"use strict";
import powerbi from "powerbi-visuals-api";

import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import VisualObjectInstance = powerbi.VisualObjectInstance;
import EnumerateVisualObjectInstancesOptions = powerbi.EnumerateVisualObjectInstancesOptions;
import VisualObjectInstanceEnumerationObject = powerbi.VisualObjectInstanceEnumerationObject;
import { VisualSettings } from "./settings";
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";

import "./../style/visual.less";

export class Visual implements IVisual {
    private settings: VisualSettings;
    private target: HTMLElement;
    private reactRoot: React.FunctionComponentElement<any>;

    constructor(options: VisualConstructorOptions) {
        this.target = options.element;
        this.clear();
    }

    public enumerateObjectInstances(
        options: EnumerateVisualObjectInstancesOptions
    ): VisualObjectInstance[] | VisualObjectInstanceEnumerationObject {
        return VisualSettings.enumerateObjectInstances(
            this.settings || VisualSettings.getDefault(),
            options
        );
    }

    public update(options: VisualUpdateOptions) {
        if (options.dataViews && options.dataViews[0]) {
            this.settings = VisualSettings.parse(
                options.dataViews[0]
            ) as VisualSettings;
            const settings = this.settings;
            this.renderApp({ options, settings });
        } else {
            this.clear();
        }
    }

    private clear() {
        this.renderApp({ options: {}, settings: {} });
    }

    private renderApp(data: any) {
        this.reactRoot = React.createElement(App, data);
        ReactDOM.render(this.reactRoot, this.target);
    }
}
