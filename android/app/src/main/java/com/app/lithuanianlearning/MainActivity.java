package com.app.lithuanianlearning;

import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;
import com.getcapacitor.BridgeActivity;

/**
 * Disables WebView HTTP cache for bundled assets so fresh JS from
 * {@code vite build} + {@code npx cap sync android} is not masked by a stale cache.
 */
public class MainActivity extends BridgeActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getBridge() != null) {
            WebView webView = getBridge().getWebView();
            if (webView != null) {
                webView.getSettings().setCacheMode(WebSettings.LOAD_NO_CACHE);
            }
        }
    }
}
