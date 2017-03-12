function CreateProject() {
    var idMk = charIDToTypeID("Mk  ");
    var desc33 = new ActionDescriptor();
    var idNw = charIDToTypeID("Nw  ");
    var desc34 = new ActionDescriptor();
    var idNm = charIDToTypeID("Nm  ");
    desc34.putString(idNm, """test""" );
    var idMd = charIDToTypeID("Md  ");
    var idRGBM = charIDToTypeID("RGBM");
    desc34.putClass(idMd, idRGBM);
    var idWdth = charIDToTypeID("Wdth");
    var idRlt = charIDToTypeID("#Rlt");
    desc34.putUnitDouble(idWdth, idRlt, 2560.000000);
    var idHght = charIDToTypeID("Hght");
    var idRlt = charIDToTypeID("#Rlt");
    desc34.putUnitDouble(idHght, idRlt, 1440.000000);
    var idRslt = charIDToTypeID("Rslt");
    var idRsl = charIDToTypeID("#Rsl");
    desc34.putUnitDouble(idRslt, idRsl, 72.000000);
    var idpixelScaleFactor = stringIDToTypeID("pixelScaleFactor");
    desc34.putDouble(idpixelScaleFactor, 1.000000);
    var idFl = charIDToTypeID("Fl  ");
    var idFl = charIDToTypeID("Fl  ");
    var idWht = charIDToTypeID("Wht ");
    desc34.putEnumerated(idFl, idFl, idWht);
    var idDpth = charIDToTypeID("Dpth");
    desc34.putInteger(idDpth, 8);
    var idprofile = stringIDToTypeID("profile");
    desc34.putString(idprofile, """sRGB IEC61966-2.1""" );
    var idDcmn = charIDToTypeID("Dcmn");
    desc33.putObject(idNw, idDcmn, desc34);
    executeAction(idMk, desc33, DialogModes.NO);
};

function SelectLayer(layerName) {
    var idslct = charIDToTypeID("slct");
    var desc54 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref7 = new ActionReference();
    var idLyr = charIDToTypeID("Lyr ");
    ref7.putName(idLyr, layerName);
    desc54.putReference(idnull, ref7);
    var idMkVs = charIDToTypeID("MkVs");
    desc54.putBoolean(idMkVs, false);
    executeAction(idslct, desc54, DialogModes.NO);
};

function WriteText(text) {
    var idMk = charIDToTypeID("Mk  ");
    var desc37 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref5 = new ActionReference();
    var idTxLr = charIDToTypeID("TxLr");
    ref5.putClass(idTxLr);
    desc37.putReference(idnull, ref5);
    var idUsng = charIDToTypeID("Usng");
    var desc38 = new ActionDescriptor();
    var idTxt = charIDToTypeID("Txt ");
    desc38.putString(idTxt, text);
    var idwarp = stringIDToTypeID("warp");
    var desc39 = new ActionDescriptor();
    var idwarpStyle = stringIDToTypeID("warpStyle");
    var idwarpStyle = stringIDToTypeID("warpStyle");
    var idwarpNone = stringIDToTypeID("warpNone");
    desc39.putEnumerated(idwarpStyle, idwarpStyle, idwarpNone);
    var idwarpValue = stringIDToTypeID("warpValue");
    desc39.putDouble(idwarpValue, 0.000000);
    var idwarpPerspective = stringIDToTypeID("warpPerspective");
    desc39.putDouble(idwarpPerspective, 0.000000);
    var idwarpPerspectiveOther = stringIDToTypeID("warpPerspectiveOther");
    desc39.putDouble(idwarpPerspectiveOther, 0.000000);
    var idwarpRotate = stringIDToTypeID("warpRotate");
    var idOrnt = charIDToTypeID("Ornt");
    var idHrzn = charIDToTypeID("Hrzn");
    desc39.putEnumerated(idwarpRotate, idOrnt, idHrzn);
    var idwarp = stringIDToTypeID("warp");
    desc38.putObject(idwarp, idwarp, desc39);
    var idTxtC = charIDToTypeID("TxtC");
    var desc40 = new ActionDescriptor();
    var idHrzn = charIDToTypeID("Hrzn");
    var idPrc = charIDToTypeID("#Prc");
    desc40.putUnitDouble(idHrzn, idPrc, 41.796875);
    var idVrtc = charIDToTypeID("Vrtc");
    var idPrc = charIDToTypeID("#Prc");
    desc40.putUnitDouble(idVrtc, idPrc, 52.361111);
    var idPnt = charIDToTypeID("Pnt ");
    desc38.putObject(idTxtC, idPnt, desc40);
    var idtextGridding = stringIDToTypeID("textGridding");
    var idtextGridding = stringIDToTypeID("textGridding");
    var idNone = charIDToTypeID("None");
    desc38.putEnumerated(idtextGridding, idtextGridding, idNone);
    var idOrnt = charIDToTypeID("Ornt");
    var idOrnt = charIDToTypeID("Ornt");
    var idHrzn = charIDToTypeID("Hrzn");
    desc38.putEnumerated(idOrnt, idOrnt, idHrzn);
    var idAntA = charIDToTypeID("AntA");
    var idAnnt = charIDToTypeID("Annt");
    var idantiAliasSharp = stringIDToTypeID("antiAliasSharp");
    desc38.putEnumerated(idAntA, idAnnt, idantiAliasSharp);
    var idtextShape = stringIDToTypeID("textShape");
    var list5 = new ActionList();
    var desc41 = new ActionDescriptor();
    var idTEXT = charIDToTypeID("TEXT");
    var idTEXT = charIDToTypeID("TEXT");
    var idPnt = charIDToTypeID("Pnt ");
    desc41.putEnumerated(idTEXT, idTEXT, idPnt);
    var idOrnt = charIDToTypeID("Ornt");
    var idOrnt = charIDToTypeID("Ornt");
    var idHrzn = charIDToTypeID("Hrzn");
    desc41.putEnumerated(idOrnt, idOrnt, idHrzn);
    var idTrnf = charIDToTypeID("Trnf");
    var desc42 = new ActionDescriptor();
    var idxx = stringIDToTypeID("xx");
    desc42.putDouble(idxx, 1.000000);
    var idxy = stringIDToTypeID("xy");
    desc42.putDouble(idxy, 0.000000);
    var idyx = stringIDToTypeID("yx");
    desc42.putDouble(idyx, 0.000000);
    var idyy = stringIDToTypeID("yy");
    desc42.putDouble(idyy, 1.000000);
    var idtx = stringIDToTypeID("tx");
    desc42.putDouble(idtx, 0.000000);
    var idty = stringIDToTypeID("ty");
    desc42.putDouble(idty, 0.000000);
    var idTrnf = charIDToTypeID("Trnf");
    desc41.putObject(idTrnf, idTrnf, desc42);
    var idrowCount = stringIDToTypeID("rowCount");
    desc41.putInteger(idrowCount, 1);
    var idcolumnCount = stringIDToTypeID("columnCount");
    desc41.putInteger(idcolumnCount, 1);
    var idrowMajorOrder = stringIDToTypeID("rowMajorOrder");
    desc41.putBoolean(idrowMajorOrder, true);
    var idrowGutter = stringIDToTypeID("rowGutter");
    var idPnt = charIDToTypeID("#Pnt");
    desc41.putUnitDouble(idrowGutter, idPnt, 0.000000);
    var idcolumnGutter = stringIDToTypeID("columnGutter");
    var idPnt = charIDToTypeID("#Pnt");
    desc41.putUnitDouble(idcolumnGutter, idPnt, 0.000000);
    var idSpcn = charIDToTypeID("Spcn");
    var idPnt = charIDToTypeID("#Pnt");
    desc41.putUnitDouble(idSpcn, idPnt, 0.000000);
    var idframeBaselineAlignment = stringIDToTypeID("frameBaselineAlignment");
    var idframeBaselineAlignment = stringIDToTypeID("frameBaselineAlignment");
    var idalignByAscent = stringIDToTypeID("alignByAscent");
    desc41.putEnumerated(idframeBaselineAlignment, idframeBaselineAlignment, idalignByAscent);
    var idfirstBaselineMinimum = stringIDToTypeID("firstBaselineMinimum");
    var idPnt = charIDToTypeID("#Pnt");
    desc41.putUnitDouble(idfirstBaselineMinimum, idPnt, 0.000000);
    var idbase = stringIDToTypeID("base");
    var desc43 = new ActionDescriptor();
    var idHrzn = charIDToTypeID("Hrzn");
    desc43.putDouble(idHrzn, 0.000000);
    var idVrtc = charIDToTypeID("Vrtc");
    desc43.putDouble(idVrtc, 0.000000);
    var idPnt = charIDToTypeID("Pnt ");
    desc41.putObject(idbase, idPnt, desc43);
    var idtextShape = stringIDToTypeID("textShape");
    list5.putObject(idtextShape, desc41);
    desc38.putList(idtextShape, list5);
    var idTxtt = charIDToTypeID("Txtt");
    var list6 = new ActionList();
    var desc44 = new ActionDescriptor();
    var idFrom = charIDToTypeID("From");
    desc44.putInteger(idFrom, 0);
    var idT = charIDToTypeID("T   ");
    desc44.putInteger(idT, 13);
    var idTxtS = charIDToTypeID("TxtS");
    var desc45 = new ActionDescriptor();
    var idstyleSheetHasParent = stringIDToTypeID("styleSheetHasParent");
    desc45.putBoolean(idstyleSheetHasParent, true);
    var idfontPostScriptName = stringIDToTypeID("fontPostScriptName");
    desc45.putString(idfontPostScriptName, """MS-Gothic""" );
    var idFntN = charIDToTypeID("FntN");
    desc45.putString(idFntN, """MS Gothic""" );
    var idFntS = charIDToTypeID("FntS");
    desc45.putString(idFntS, """Regular""" );
    var idScrp = charIDToTypeID("Scrp");
    desc45.putInteger(idScrp, 1);
    var idFntT = charIDToTypeID("FntT");
    desc45.putInteger(idFntT, 1);
    var idSz = charIDToTypeID("Sz  ");
    var idPnt = charIDToTypeID("#Pnt");
    desc45.putUnitDouble(idSz, idPnt, 422.000000);
    var idTxtS = charIDToTypeID("TxtS");
    desc44.putObject(idTxtS, idTxtS, desc45);
    var idTxtt = charIDToTypeID("Txtt");
    list6.putObject(idTxtt, desc44);
    desc38.putList(idTxtt, list6);
    var idparagraphStyleRange = stringIDToTypeID("paragraphStyleRange");
    var list7 = new ActionList();
    var desc46 = new ActionDescriptor();
    var idFrom = charIDToTypeID("From");
    desc46.putInteger(idFrom, 0);
    var idT = charIDToTypeID("T   ");
    desc46.putInteger(idT, 5);
    var idparagraphStyle = stringIDToTypeID("paragraphStyle");
    var desc47 = new ActionDescriptor();
    var idstyleSheetHasParent = stringIDToTypeID("styleSheetHasParent");
    desc47.putBoolean(idstyleSheetHasParent, true);
    var idAlgn = charIDToTypeID("Algn");
    var idAlg = charIDToTypeID("Alg ");
    var idCntr = charIDToTypeID("Cntr");
    desc47.putEnumerated(idAlgn, idAlg, idCntr);
    var idparagraphStyle = stringIDToTypeID("paragraphStyle");
    desc46.putObject(idparagraphStyle, idparagraphStyle, desc47);
    var idparagraphStyleRange = stringIDToTypeID("paragraphStyleRange");
    list7.putObject(idparagraphStyleRange, desc46);
    var desc48 = new ActionDescriptor();
    var idFrom = charIDToTypeID("From");
    desc48.putInteger(idFrom, 5);
    var idT = charIDToTypeID("T   ");
    desc48.putInteger(idT, 13);
    var idparagraphStyle = stringIDToTypeID("paragraphStyle");
    var desc49 = new ActionDescriptor();
    var idstyleSheetHasParent = stringIDToTypeID("styleSheetHasParent");
    desc49.putBoolean(idstyleSheetHasParent, true);
    var idAlgn = charIDToTypeID("Algn");
    var idAlg = charIDToTypeID("Alg ");
    var idCntr = charIDToTypeID("Cntr");
    desc49.putEnumerated(idAlgn, idAlg, idCntr);
    var idparagraphStyle = stringIDToTypeID("paragraphStyle");
    desc48.putObject(idparagraphStyle, idparagraphStyle, desc49);
    var idparagraphStyleRange = stringIDToTypeID("paragraphStyleRange");
    list7.putObject(idparagraphStyleRange, desc48);
    desc38.putList(idparagraphStyleRange, list7);
    var idkerningRange = stringIDToTypeID("kerningRange");
    var list8 = new ActionList();
    desc38.putList(idkerningRange, list8);
    var idTxLr = charIDToTypeID("TxLr");
    desc37.putObject(idUsng, idTxLr, desc38);
    executeAction(idMk, desc37, DialogModes.NO);
};

function EditLayerName(layerName) {
    var idsetd = charIDToTypeID("setd");
    var desc51 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref6 = new ActionReference();
    var idLyr = charIDToTypeID("Lyr ");
    var idOrdn = charIDToTypeID("Ordn");
    var idTrgt = charIDToTypeID("Trgt");
    ref6.putEnumerated(idLyr, idOrdn, idTrgt);
    desc51.putReference(idnull, ref6);
    var idT = charIDToTypeID("T   ");
    var desc52 = new ActionDescriptor();
    var idNm = charIDToTypeID("Nm  ");
    desc52.putString(idNm, layerName );
    var idLyr = charIDToTypeID("Lyr ");
    desc51.putObject(idT, idLyr, desc52);
    executeAction(idsetd, desc51, DialogModes.NO);
}

function TextAlign() {
    // =======================================================
    var idsetd = charIDToTypeID("setd");
    var desc49 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref21 = new ActionReference();
    var idChnl = charIDToTypeID("Chnl");
    var idfsel = charIDToTypeID("fsel");
    ref21.putProperty(idChnl, idfsel);
    desc49.putReference(idnull, ref21);
    var idT = charIDToTypeID("T   ");
    var idOrdn = charIDToTypeID("Ordn");
    var idAl = charIDToTypeID("Al  ");
    desc49.putEnumerated(idT, idOrdn, idAl);
    executeAction(idsetd, desc49, DialogModes.NO);

    // =======================================================
    var idAlgn = charIDToTypeID("Algn");
    var desc50 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref22 = new ActionReference();
    var idLyr = charIDToTypeID("Lyr ");
    var idOrdn = charIDToTypeID("Ordn");
    var idTrgt = charIDToTypeID("Trgt");
    ref22.putEnumerated(idLyr, idOrdn, idTrgt);
    desc50.putReference(idnull, ref22);
    var idUsng = charIDToTypeID("Usng");
    var idADSt = charIDToTypeID("ADSt");
    var idAdCV = charIDToTypeID("AdCV");
    desc50.putEnumerated(idUsng, idADSt, idAdCV);
    executeAction(idAlgn, desc50, DialogModes.NO);

    // =======================================================
    var idAlgn = charIDToTypeID("Algn");
    var desc51 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref23 = new ActionReference();
    var idLyr = charIDToTypeID("Lyr ");
    var idOrdn = charIDToTypeID("Ordn");
    var idTrgt = charIDToTypeID("Trgt");
    ref23.putEnumerated(idLyr, idOrdn, idTrgt);
    desc51.putReference(idnull, ref23);
    var idUsng = charIDToTypeID("Usng");
    var idADSt = charIDToTypeID("ADSt");
    var idAdCH = charIDToTypeID("AdCH");
    desc51.putEnumerated(idUsng, idADSt, idAdCH);
    executeAction(idAlgn, desc51, DialogModes.NO);
};

function TextRasterize() {
    // =======================================================
    var idsetd = charIDToTypeID("setd");
    var desc52 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref24 = new ActionReference();
    var idChnl = charIDToTypeID("Chnl");
    var idfsel = charIDToTypeID("fsel");
    ref24.putProperty(idChnl, idfsel);
    desc52.putReference(idnull, ref24);
    var idT = charIDToTypeID("T   ");
    var idOrdn = charIDToTypeID("Ordn");
    var idNone = charIDToTypeID("None");
    desc52.putEnumerated(idT, idOrdn, idNone);
    executeAction(idsetd, desc52, DialogModes.NO);

    // =======================================================
    var idrasterizeLayer = stringIDToTypeID("rasterizeLayer");
    var desc53 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref25 = new ActionReference();
    var idLyr = charIDToTypeID("Lyr ");
    var idOrdn = charIDToTypeID("Ordn");
    var idTrgt = charIDToTypeID("Trgt");
    ref25.putEnumerated(idLyr, idOrdn, idTrgt);
    desc53.putReference(idnull, ref25);
    var idWhat = charIDToTypeID("What");
    var idrasterizeItem = stringIDToTypeID("rasterizeItem");
    var idType = charIDToTypeID("Type");
    desc53.putEnumerated(idWhat, idrasterizeItem, idType);
    executeAction(idrasterizeLayer, desc53, DialogModes.NO);
};

function MakeChannel() {
    // =======================================================
    var idsetd = charIDToTypeID("setd");
    var desc54 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref26 = new ActionReference();
    var idChnl = charIDToTypeID("Chnl");
    var idfsel = charIDToTypeID("fsel");
    ref26.putProperty(idChnl, idfsel);
    desc54.putReference(idnull, ref26);
    var idT = charIDToTypeID("T   ");
    var ref27 = new ActionReference();
    var idChnl = charIDToTypeID("Chnl");
    var idChnl = charIDToTypeID("Chnl");
    var idTrsp = charIDToTypeID("Trsp");
    ref27.putEnumerated(idChnl, idChnl, idTrsp);
    desc54.putReference(idT, ref27);
    executeAction(idsetd, desc54, DialogModes.NO);

    // =======================================================
    var idDplc = charIDToTypeID("Dplc");
    var desc55 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref28 = new ActionReference();
    var idChnl = charIDToTypeID("Chnl");
    var idfsel = charIDToTypeID("fsel");
    ref28.putProperty(idChnl, idfsel);
    desc55.putReference(idnull, ref28);
    var idNm = charIDToTypeID("Nm  ");
    desc55.putString(idNm, """alpha1""" );
    executeAction(idDplc, desc55, DialogModes.NO);
};

function FillColor(color) {
    // =======================================================
    var idFl = charIDToTypeID("Fl  ");
    var desc56 = new ActionDescriptor();
    var idUsng = charIDToTypeID("Usng");
    var idFlCn = charIDToTypeID("FlCn");
    var idWht = charIDToTypeID(color);
    desc56.putEnumerated(idUsng, idFlCn, idWht);
    var idOpct = charIDToTypeID("Opct");
    var idPrc = charIDToTypeID("#Prc");
    desc56.putUnitDouble(idOpct, idPrc, 100.000000);
    var idMd = charIDToTypeID("Md  ");
    var idBlnM = charIDToTypeID("BlnM");
    var idMltp = charIDToTypeID("Mltp");
    desc56.putEnumerated(idMd, idBlnM, idMltp);
    executeAction(idFl, desc56, DialogModes.NO);
};

function GaussianBlur(pixel) {
    // =======================================================
    var idsetd = charIDToTypeID("setd");
    var desc57 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref29 = new ActionReference();
    var idChnl = charIDToTypeID("Chnl");
    var idfsel = charIDToTypeID("fsel");
    ref29.putProperty(idChnl, idfsel);
    desc57.putReference(idnull, ref29);
    var idT = charIDToTypeID("T   ");
    var idOrdn = charIDToTypeID("Ordn");
    var idNone = charIDToTypeID("None");
    desc57.putEnumerated(idT, idOrdn, idNone);
    executeAction(idsetd, desc57, DialogModes.NO);

    // =======================================================
    var idFl = charIDToTypeID("Fl  ");
    var desc58 = new ActionDescriptor();
    var idUsng = charIDToTypeID("Usng");
    var idFlCn = charIDToTypeID("FlCn");
    var idWht = charIDToTypeID("Wht ");
    desc58.putEnumerated(idUsng, idFlCn, idWht);
    var idOpct = charIDToTypeID("Opct");
    var idPrc = charIDToTypeID("#Prc");
    desc58.putUnitDouble(idOpct, idPrc, 100.000000);
    var idMd = charIDToTypeID("Md  ");
    var idBlnM = charIDToTypeID("BlnM");
    var idMltp = charIDToTypeID("Mltp");
    desc58.putEnumerated(idMd, idBlnM, idMltp);
    executeAction(idFl, desc58, DialogModes.NO);

    // =======================================================
    var idGsnB = charIDToTypeID("GsnB");
    var desc59 = new ActionDescriptor();
    var idRds = charIDToTypeID("Rds ");
    var idPxl = charIDToTypeID("#Pxl");
    desc59.putUnitDouble(idRds, idPxl, pixel);
    executeAction(idGsnB, desc59, DialogModes.NO);
};

function Solarization() {
    // =======================================================
    var idSlrz = charIDToTypeID("Slrz");
    executeAction(idSlrz, undefined, DialogModes.NO);
};

function LevelControl() {
    // =======================================================
    var idLvls = charIDToTypeID("Lvls");
    var desc60 = new ActionDescriptor();
    var idpresetKind = stringIDToTypeID("presetKind");
    var idpresetKindType = stringIDToTypeID("presetKindType");
    var idpresetKindCustom = stringIDToTypeID("presetKindCustom");
    desc60.putEnumerated(idpresetKind, idpresetKindType, idpresetKindCustom);
    var idAdjs = charIDToTypeID("Adjs");
    var list9 = new ActionList();
    var desc61 = new ActionDescriptor();
    var idChnl = charIDToTypeID("Chnl");
    var ref30 = new ActionReference();
    var idChnl = charIDToTypeID("Chnl");
    var idChnl = charIDToTypeID("Chnl");
    var idCmps = charIDToTypeID("Cmps");
    ref30.putEnumerated(idChnl, idChnl, idCmps);
    desc61.putReference(idChnl, ref30);
    var idInpt = charIDToTypeID("Inpt");
    var list10 = new ActionList();
    list10.putInteger(0);
    list10.putInteger(128);
    desc61.putList(idInpt, list10);
    var idLvlA = charIDToTypeID("LvlA");
    list9.putObject(idLvlA, desc61);
    desc60.putList(idAdjs, list9);
    executeAction(idLvls, desc60, DialogModes.NO);
};

function CopyTextLayer() {
    // =======================================================
    var idDplc = charIDToTypeID("Dplc");
    var desc62 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref31 = new ActionReference();
    var idLyr = charIDToTypeID("Lyr ");
    var idOrdn = charIDToTypeID("Ordn");
    var idTrgt = charIDToTypeID("Trgt");
    ref31.putEnumerated(idLyr, idOrdn, idTrgt);
    desc62.putReference(idnull, ref31);
    var idNm = charIDToTypeID("Nm  ");
    desc62.putString(idNm, """copy""" );
    var idVrsn = charIDToTypeID("Vrsn");
    desc62.putInteger(idVrsn, 5);
    executeAction(idDplc, desc62, DialogModes.NO);
};

function PolarCoordinateConversion(conversionType) {
    // =======================================================
    var idPlr = charIDToTypeID("Plr ");
    var desc63 = new ActionDescriptor();
    var idCnvr = charIDToTypeID("Cnvr");
    var idCnvr = charIDToTypeID("Cnvr");
    var idPlrR = charIDToTypeID(conversionType);
    desc63.putEnumerated(idCnvr, idCnvr, idPlrR);
    executeAction(idPlr, desc63, DialogModes.NO);
};

function Rotate(angle) {
    // =======================================================
    var idRtte = charIDToTypeID("Rtte");
    var desc64 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref32 = new ActionReference();
    var idDcmn = charIDToTypeID("Dcmn");
    var idOrdn = charIDToTypeID("Ordn");
    var idFrst = charIDToTypeID("Frst");
    ref32.putEnumerated(idDcmn, idOrdn, idFrst);
    desc64.putReference(idnull, ref32);
    var idAngl = charIDToTypeID("Angl");
    var idAng = charIDToTypeID("#Ang");
    desc64.putUnitDouble(idAngl, idAng, angle);
    executeAction(idRtte, desc64, DialogModes.NO);
};

function AdjustmentInvert() {
    // =======================================================
    var idInvr = charIDToTypeID("Invr");
    executeAction(idInvr, undefined, DialogModes.NO);
};

function WindFilterMulti(times) {
    for (count = 0; count < times; count++) {
        WindFilter();
    }
};

function WindFilter() {
    // =======================================================
    var idWnd = charIDToTypeID("Wnd ");
    var desc65 = new ActionDescriptor();
    var idWndM = charIDToTypeID("WndM");
    var idWndM = charIDToTypeID("WndM");
    var idWnd = charIDToTypeID("Wnd ");
    desc65.putEnumerated(idWndM, idWndM, idWnd);
    var idDrct = charIDToTypeID("Drct");
    var idDrct = charIDToTypeID("Drct");
    var idLeft = charIDToTypeID("Left");
    desc65.putEnumerated(idDrct, idDrct, idLeft);
    executeAction(idWnd, desc65, DialogModes.NO);
};

function LayerModeScreen() {
    // =======================================================
    var idsetd = charIDToTypeID("setd");
    var desc73 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref34 = new ActionReference();
    var idLyr = charIDToTypeID("Lyr ");
    var idOrdn = charIDToTypeID("Ordn");
    var idTrgt = charIDToTypeID("Trgt");
    ref34.putEnumerated(idLyr, idOrdn, idTrgt);
    desc73.putReference(idnull, ref34);
    var idT = charIDToTypeID("T   ");
    var desc74 = new ActionDescriptor();
    var idMd = charIDToTypeID("Md  ");
    var idBlnM = charIDToTypeID("BlnM");
    var idScrn = charIDToTypeID("Scrn");
    desc74.putEnumerated(idMd, idBlnM, idScrn);
    var idLyr = charIDToTypeID("Lyr ");
    desc73.putObject(idT, idLyr, desc74);
    executeAction(idsetd, desc73, DialogModes.NO);
};

function AddGradationLayer() {
    // =======================================================
    var idMk = charIDToTypeID("Mk  ");
    var desc24 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref2 = new ActionReference();
    var idcontentLayer = stringIDToTypeID("contentLayer");
    ref2.putClass(idcontentLayer);
    desc24.putReference(idnull, ref2);
    var idUsng = charIDToTypeID("Usng");
    var desc25 = new ActionDescriptor();
    var idType = charIDToTypeID("Type");
    var desc26 = new ActionDescriptor();
    var idAngl = charIDToTypeID("Angl");
    var idAng = charIDToTypeID("#Ang");
    desc26.putUnitDouble(idAngl, idAng, 90.000000);
    var idType = charIDToTypeID("Type");
    var idGrdT = charIDToTypeID("GrdT");
    var idLnr = charIDToTypeID("Lnr ");
    desc26.putEnumerated(idType, idGrdT, idLnr);
    var idGrad = charIDToTypeID("Grad");
    var desc27 = new ActionDescriptor();
    var idNm = charIDToTypeID("Nm  ");
    desc27.putString(idNm, """ƒJƒXƒ^ƒ€""" );
    var idGrdF = charIDToTypeID("GrdF");
    var idGrdF = charIDToTypeID("GrdF");
    var idCstS = charIDToTypeID("CstS");
    desc27.putEnumerated(idGrdF, idGrdF, idCstS);
    var idIntr = charIDToTypeID("Intr");
    desc27.putDouble(idIntr, 4096.000000);
    var idClrs = charIDToTypeID("Clrs");
    var list3 = new ActionList();
    var desc28 = new ActionDescriptor();
    var idClr = charIDToTypeID("Clr ");
    var desc29 = new ActionDescriptor();
    var idRd = charIDToTypeID("Rd  ");
    desc29.putDouble(idRd, 41.003892);
    var idGrn = charIDToTypeID("Grn ");
    desc29.putDouble(idGrn, 10.000000);
    var idBl = charIDToTypeID("Bl  ");
    desc29.putDouble(idBl, 89.003893);
    var idRGBC = charIDToTypeID("RGBC");
    desc28.putObject(idClr, idRGBC, desc29);
    var idType = charIDToTypeID("Type");
    var idClry = charIDToTypeID("Clry");
    var idUsrS = charIDToTypeID("UsrS");
    desc28.putEnumerated(idType, idClry, idUsrS);
    var idLctn = charIDToTypeID("Lctn");
    desc28.putInteger(idLctn, 0);
    var idMdpn = charIDToTypeID("Mdpn");
    desc28.putInteger(idMdpn, 50);
    var idClrt = charIDToTypeID("Clrt");
    list3.putObject(idClrt, desc28);
    var desc30 = new ActionDescriptor();
    var idClr = charIDToTypeID("Clr ");
    var desc31 = new ActionDescriptor();
    var idRd = charIDToTypeID("Rd  ");
    desc31.putDouble(idRd, 0.000000);
    var idGrn = charIDToTypeID("Grn ");
    desc31.putDouble(idGrn, 255.000000);
    var idBl = charIDToTypeID("Bl  ");
    desc31.putDouble(idBl, 95.992220);
    var idRGBC = charIDToTypeID("RGBC");
    desc30.putObject(idClr, idRGBC, desc31);
    var idType = charIDToTypeID("Type");
    var idClry = charIDToTypeID("Clry");
    var idUsrS = charIDToTypeID("UsrS");
    desc30.putEnumerated(idType, idClry, idUsrS);
    var idLctn = charIDToTypeID("Lctn");
    desc30.putInteger(idLctn, 4096);
    var idMdpn = charIDToTypeID("Mdpn");
    desc30.putInteger(idMdpn, 50);
    var idClrt = charIDToTypeID("Clrt");
    list3.putObject(idClrt, desc30);
    desc27.putList(idClrs, list3);
    var idTrns = charIDToTypeID("Trns");
    var list4 = new ActionList();
    var desc32 = new ActionDescriptor();
    var idOpct = charIDToTypeID("Opct");
    var idPrc = charIDToTypeID("#Prc");
    desc32.putUnitDouble(idOpct, idPrc, 100.000000);
    var idLctn = charIDToTypeID("Lctn");
    desc32.putInteger(idLctn, 0);
    var idMdpn = charIDToTypeID("Mdpn");
    desc32.putInteger(idMdpn, 50);
    var idTrnS = charIDToTypeID("TrnS");
    list4.putObject(idTrnS, desc32);
    var desc33 = new ActionDescriptor();
    var idOpct = charIDToTypeID("Opct");
    var idPrc = charIDToTypeID("#Prc");
    desc33.putUnitDouble(idOpct, idPrc, 100.000000);
    var idLctn = charIDToTypeID("Lctn");
    desc33.putInteger(idLctn, 4096);
    var idMdpn = charIDToTypeID("Mdpn");
    desc33.putInteger(idMdpn, 50);
    var idTrnS = charIDToTypeID("TrnS");
    list4.putObject(idTrnS, desc33);
    desc27.putList(idTrns, list4);
    var idGrdn = charIDToTypeID("Grdn");
    desc26.putObject(idGrad, idGrdn, desc27);
    var idgradientLayer = stringIDToTypeID("gradientLayer");
    desc25.putObject(idType, idgradientLayer, desc26);
    var idcontentLayer = stringIDToTypeID("contentLayer");
    desc24.putObject(idUsng, idcontentLayer, desc25);
    executeAction(idMk, desc24, DialogModes.NO);
};

function RadialBlur(layerName) {
    // =======================================================
    var idsetd = charIDToTypeID("setd");
    var desc87 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref36 = new ActionReference();
    var idLyr = charIDToTypeID("Lyr ");
    var idOrdn = charIDToTypeID("Ordn");
    var idTrgt = charIDToTypeID("Trgt");
    ref36.putEnumerated(idLyr, idOrdn, idTrgt);
    desc87.putReference(idnull, ref36);
    var idT = charIDToTypeID("T   ");
    var desc88 = new ActionDescriptor();
    var idMd = charIDToTypeID("Md  ");
    var idBlnM = charIDToTypeID("BlnM");
    var idClr = charIDToTypeID("Clr ");
    desc88.putEnumerated(idMd, idBlnM, idClr);
    var idLyr = charIDToTypeID("Lyr ");
    desc87.putObject(idT, idLyr, desc88);
    executeAction(idsetd, desc87, DialogModes.NO);

    // =======================================================
    var idslct = charIDToTypeID("slct");
    var desc89 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref37 = new ActionReference();
    var idLyr = charIDToTypeID("Lyr ");
    ref37.putName(idLyr, layerName);
    desc89.putReference(idnull, ref37);
    var idMkVs = charIDToTypeID("MkVs");
    desc89.putBoolean(idMkVs, false);
    executeAction(idslct, desc89, DialogModes.NO);

    // =======================================================
    var idRdlB = charIDToTypeID("RdlB");
    var desc90 = new ActionDescriptor();
    var idAmnt = charIDToTypeID("Amnt");
    desc90.putInteger(idAmnt, 10);
    var idBlrM = charIDToTypeID("BlrM");
    var idBlrM = charIDToTypeID("BlrM");
    var idZm = charIDToTypeID("Zm  ");
    desc90.putEnumerated(idBlrM, idBlrM, idZm);
    var idBlrQ = charIDToTypeID("BlrQ");
    var idBlrQ = charIDToTypeID("BlrQ");
    var idBst = charIDToTypeID("Bst ");
    desc90.putEnumerated(idBlrQ, idBlrQ, idBst);
    executeAction(idRdlB, desc90, DialogModes.NO);
};

function LoadChannelSelection() {
    // =======================================================
    var idsetd = charIDToTypeID("setd");
    var desc91 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref38 = new ActionReference();
    var idChnl = charIDToTypeID("Chnl");
    var idfsel = charIDToTypeID("fsel");
    ref38.putProperty(idChnl, idfsel);
    desc91.putReference(idnull, ref38);
    var idT = charIDToTypeID("T   ");
    var ref39 = new ActionReference();
    var idChnl = charIDToTypeID("Chnl");
    ref39.putName(idChnl, "alpha1");
    desc91.putReference(idT, ref39);
    executeAction(idsetd, desc91, DialogModes.NO);
};

function SavePNG() {
    // =======================================================
    var idsave = charIDToTypeID("save");
    var desc95 = new ActionDescriptor();
    var idAs = charIDToTypeID("As  ");
    var desc96 = new ActionDescriptor();
    var idPGIT = charIDToTypeID("PGIT");
    var idPGIT = charIDToTypeID("PGIT");
    var idPGIN = charIDToTypeID("PGIN");
    desc96.putEnumerated(idPGIT, idPGIT, idPGIN);
    var idPNGf = charIDToTypeID("PNGf");
    var idPNGf = charIDToTypeID("PNGf");
    var idPGAd = charIDToTypeID("PGAd");
    desc96.putEnumerated(idPNGf, idPNGf, idPGAd);
    var idCmpr = charIDToTypeID("Cmpr");
    desc96.putInteger(idCmpr, 9);
    var idPNGF = charIDToTypeID("PNGF");
    desc95.putObject(idAs, idPNGF, desc96);
    var idIn = charIDToTypeID("In  ");
    desc95.putPath(idIn, new File("G:\\Project\\PhotoshopTutorialAutomation\\test.png"));
    var idDocI = charIDToTypeID("DocI");
    desc95.putInteger(idDocI, 1289);
    var idCpy = charIDToTypeID("Cpy ");
    desc95.putBoolean(idCpy, true);
    var idAlpC = charIDToTypeID("AlpC");
    desc95.putBoolean(idAlpC, false);
    var idsaveStage = stringIDToTypeID("saveStage");
    var idsaveStageType = stringIDToTypeID("saveStageType");
    var idsaveBegin = stringIDToTypeID("saveBegin");
    desc95.putEnumerated(idsaveStage, idsaveStageType, idsaveBegin);
    executeAction(idsave, desc95, DialogModes.NO);
};

function CloseProject() {
    // =======================================================
    var idCls = charIDToTypeID("Cls ");
    var desc2 = new ActionDescriptor();
    var idSvng = charIDToTypeID("Svng");
    var idYsN = charIDToTypeID("YsN ");
    var idN = charIDToTypeID("N   ");
    desc2.putEnumerated(idSvng, idYsN, idN);
    executeAction(idCls, desc2, DialogModes.NO);
};
