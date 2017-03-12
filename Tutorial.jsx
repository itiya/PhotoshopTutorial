#include "TutorialMethod.jsx"

var text = "色即是空\r空即是色";
var windCount = 3;
var blurPix = 8;

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
SavePNG();
CloseProject();
