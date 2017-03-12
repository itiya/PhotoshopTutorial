#include "TutorialMethod.jsx"

var text = "色即是空"
var windCount = 3;

CreateProject();
WriteText(text);
TextAlign();
TextRasterize();
MakeChannel();
FillColor("Wht ");
GaussianBlur(8);
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
