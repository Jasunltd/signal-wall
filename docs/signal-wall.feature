Feature: Signal Wall local tuning

Scenario: Hybrid history
Given Night Drive is selected
When a visitor deliberately tunes Archive Hour
Then one history entry is pushed after the tune commits
And remote scanning replaces rather than pushes history

Scenario: Power guard and persistent mute
Given the CRT is off
When a visitor attempts channel navigation
Then selection and URL do not change
But mute remains operable and survives power cycling

Scenario: Roving channel focus
Given the CRT is on
When Arrow Right moves focus from the final channel
Then focus wraps to the first channel without tuning
When Enter is pressed
Then the focused channel tunes

Scenario: Unknown channel route
Given the URL fragment is unknown
When the app loads
Then an unavailable-channel state is shown
And no media request occurs