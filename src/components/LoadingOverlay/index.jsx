import React from "react";
import { DotLoaderOverlay } from "react-spinner-overlay";

function LoadingOverlay({ isLoadingOverlay }) {
    return (
        <DotLoaderOverlay
            loading={isLoadingOverlay}
            overlayColor="rgba(0,153,255,0.2)"
            outerBorderOpacity="0.3"
            outerBorderWidth="6"
            zIndex={999999999999}
        />
    );
}

export default LoadingOverlay;
