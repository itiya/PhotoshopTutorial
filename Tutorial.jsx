#include "TutorialMethod.jsx"

var text = "色即是空"

CreateProject();
WriteText(text);
TextAlign();
TextRasterize();
MakeChannel();
FillColor("Wht ");
GaussianBlur();
Solarization();
LevelControl();
CopyTextLayer();
PolarCoordinateConversion("PlrR");
Rotate(90);
AdjustmentInvert();
WindFilter();
WindFilter();
WindFilter();
AdjustmentInvert();
WindFilter();
WindFilter();
WindFilter();
Rotate(-90);
PolarCoordinateConversion("RctP");
LayerModeScreen();
AddGradationLayer();
RadialBlur(text);
LoadChannelSelection();
FillColor("Blck");
SavePNG();
CloseProject();
