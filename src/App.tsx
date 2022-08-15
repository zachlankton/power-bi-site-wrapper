import powerbi from "powerbi-visuals-api";
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import * as React from "react";
import { stackOrderNone } from "d3";

let options;

export default function App(props: any) {
    const iframe = React.useCallback((node) => {
        if (node === null) return;

        window.addEventListener("message", (e) => {
            console.log(e);
            if (e.data === "ZWC - Get Settings and Data") {
                node.contentWindow.postMessage(options.dataViews[0], "*");
            }
        });
    }, []);

    if (props === undefined) return <></>;

    options = props.options as VisualUpdateOptions;

    if (!options.dataViews) return <></>;

    const url = options.dataViews[0].metadata.objects.opts.url as string;

    if (url === "")
        return <p>Please set a URL in the Settings of this Visual</p>;

    const frameStyle = {
        width: "100%",
        height: "100%",
        border: "none",
    };

    return (
        <div id="wrapper" style={{ overflow: "hidden" }}>
            <iframe src={url} style={frameStyle} ref={iframe} />
        </div>
    );
}
