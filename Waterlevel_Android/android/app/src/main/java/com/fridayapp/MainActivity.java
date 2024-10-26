package com.fridayapp;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate; // add this
import com.facebook.react.ReactRootView; // add this
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView; // add this


public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "fridayApp";
  }
}
