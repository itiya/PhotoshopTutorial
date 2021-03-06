#include "TutorialMethod.jsx"

var text = arguments[0];
var windCount = arguments[1];
var blurPix = arguments[2];
var fileName = arguments[3];
var scriptPath = arguments[4];

text =�@text.replace("CR+LF", "\r")

var layerName = "origin";
CreateProject();
WriteText(text);
TextAlign();
TextRasterize();
MakeChannel();
EditLayerName(layerName);
FillColor("Wht ");
GaussianBlur(blurPix);
Solarization();
LevelControl();
CopyTextLayer();
PolarCoordinateConversion("PlrR");
Rotate(90);
AdjustmentInvert();
WindFilterMulti(windCount);
AdjustmentInvert();
WindFilterMulti(windCount);
Rotate(-90);
PolarCoordinateConversion("RctP");
LayerModeScreen();
AddGradationLayer();
RadialBlur(layerName);
LoadChannelSelection();
FillColor("Blck");
SavePNG(scriptPath + fileName);
CloseProject();
