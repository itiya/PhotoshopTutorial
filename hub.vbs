Dim oParam
Set oParam = WScript.Arguments
Set args = CreateObject("System.Collections.ArrayList")

For i=0 To Wscript.Arguments.count - 1
	args.add oParam(i)
Next
Dim scriptName
scriptName = args(0)
args.RemoveAt(0)
Dim arg
arg = args.ToArray()

Dim objFSO
Set objFSO = CreateObject("Scripting.FileSystemObject")

Dim objApp
Set objApp = CreateObject("Photoshop.Application")

objApp.DoJavaScriptFile objFSO.GetAbsolutePathName(scriptName), arg, 1
