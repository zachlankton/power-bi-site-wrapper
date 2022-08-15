"use strict";

import { dataViewObjectsParser } from "powerbi-visuals-utils-dataviewutils";
import DataViewObjectsParser = dataViewObjectsParser.DataViewObjectsParser;

export class EmbedSettings {
    public url: string = "";
    public circleThickness: number = 2;
    public circleFillRule: string = "";
}

export class VisualSettings extends DataViewObjectsParser {
    public opts: EmbedSettings = new EmbedSettings();
}
