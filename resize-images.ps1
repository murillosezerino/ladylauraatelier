# resize-images.ps1
# Redimensiona todas as imagens de public/images/ para max 1200px mantendo proporção.
# Requer: nenhuma instalação — usa System.Drawing nativo do Windows.
# Uso: rode na raiz do projeto (onde está o package.json)

Add-Type -AssemblyName System.Drawing

$maxWidth  = 1200
$maxHeight = 1200
$quality   = 85  # 0-100, 85 é ótimo para web

$folder = ".\public\images"
$extensions = @("*.jpg","*.jpeg","*.png","*.webp")

$files = $extensions | ForEach-Object { Get-ChildItem -Path $folder -Recurse -Filter $_ } | Sort-Object FullName

if ($files.Count -eq 0) {
    Write-Host "Nenhuma imagem encontrada em $folder" -ForegroundColor Yellow
    exit
}

Write-Host "Encontradas $($files.Count) imagens. Redimensionando..." -ForegroundColor Cyan

foreach ($file in $files) {
    try {
        $img = [System.Drawing.Image]::FromFile($file.FullName)

        $w = $img.Width
        $h = $img.Height

        # Ja esta pequena o suficiente?
        if ($w -le $maxWidth -and $h -le $maxHeight) {
            Write-Host "  SKIP  $($file.Name) (${w}x${h})" -ForegroundColor DarkGray
            $img.Dispose()
            continue
        }

        # Calcula novo tamanho mantendo proporcao
        $ratioW = $maxWidth  / $w
        $ratioH = $maxHeight / $h
        $ratio  = [Math]::Min($ratioW, $ratioH)

        $newW = [int]($w * $ratio)
        $newH = [int]($h * $ratio)

        # Redimensiona com boa qualidade
        $bmp = New-Object System.Drawing.Bitmap($newW, $newH)
        $g   = [System.Drawing.Graphics]::FromImage($bmp)
        $g.InterpolationMode  = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $g.SmoothingMode      = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $g.PixelOffsetMode    = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
        $g.DrawImage($img, 0, 0, $newW, $newH)

        # Configura qualidade JPEG
        $encoder  = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
        $encParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
        $encParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
            [System.Drawing.Imaging.Encoder]::Quality, [long]$quality
        )

        $img.Dispose()

        # Salva no mesmo lugar (sobrescreve)
        if ($file.Extension -in @(".jpg",".jpeg")) {
            $bmp.Save($file.FullName, $encoder, $encParams)
        } else {
            $bmp.Save($file.FullName)
        }

        $bmp.Dispose()
        $g.Dispose()

        $before = [math]::Round($file.Length / 1KB)
        $after  = [math]::Round((Get-Item $file.FullName).Length / 1KB)
        Write-Host "  OK    $($file.Name)  ${w}x${h} -> ${newW}x${newH}  (${before}KB -> ${after}KB)" -ForegroundColor Green

    } catch {
        Write-Host "  ERRO  $($file.Name): $_" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "Pronto! Agora rode:" -ForegroundColor Cyan
Write-Host "  git add public/images" -ForegroundColor White
Write-Host "  git commit -m chore: otimiza imagens para web" -ForegroundColor White
Write-Host "  git push" -ForegroundColor White
