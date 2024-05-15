# Path to the DLL file
$dllPath = "bink2w32.dll"

# Get the version information of the DLL
$versionInfo = (get-item .\bink2w32.dll).VersionInfo.FileVersion

# Output a success message
Write-Output "File copied to $versionInfo successfully."