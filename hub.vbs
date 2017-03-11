Option Explicit
Dim objFSO
Set objFSO = CreateObject("Scripting.FileSystemObject")
Dim oParam
Set oParam = WScript.Arguments
Dim objApp
Set objApp = CreateObject("Photoshop.Application")
Dim arg
arg = Array("1")
objApp.DoJavaScriptFile objFSO.GetAbsolutePathName(oParam(0)), arg, 1
