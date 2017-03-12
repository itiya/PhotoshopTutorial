#include "TutorialMethod.jsx"

var text = "かきくけこ\rあいうえお";
var windCount = 3;
var blurPix = 8;

CreateProject();
WriteText(text);
TextAlign();
TextRasterize();
MakeChannel();
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
RadialBlur(text);
LoadChannelSelection();
FillColor("Blck");
SavePNG();
CloseProject();
