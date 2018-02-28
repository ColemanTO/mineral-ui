# Select

### MVP

* Placeholder
* States - hover, focus, etc
* Controlled/uncontrolled
* Uses Dropdown/Popover/Menu components
* Keyboard nav
  * open/close and navigate menu
  * Simplified typeahead
* Works in FormField
* Variants
* Disabled
* ReadOnly
* Sizes


### Not MVP

* Multiple item selection
* Tagging
* Input typeahead filtering
* Native select
* Avatars
* Store items in instance variable [perf]
* Render props
* Custom item renderer for root item


### Design Questions

* Component width
  * Question for all of our form elements
* Clearable


### Todos los TODOs

* Improve prop documentation
* SelectTrigger
  * renders MenuItem
    * Determine relationship/responsibilities with FauxControl
* Select - finish control props pattern
* Examples
  * States
    * Fix issue with simulated states - (Kyle) I don't think this is reasonable until render props
  * More...
    * Async data loading?
    * Extract examples from kitchen sink.
* Best practices
* Test coverage
  * Unit tests
  * Snapshots
* Does CardTitleMenu need updated?
* Prop getters
  * Validate prop getter implementation
  * Ensure overrides in correct order
  * Remove scope where possible
  * Compose event handlers when needed
  * Update prop getter functions to not require passing empty props object
  * Mark public prop getters as private
  * Ensure Flow type definitions are correct
* Validate id's set/passed correctly/consistently
* isMounted pattern needed?
* Cross browser testing
* A11y testing
* Test in CRA


### Intentional Changes

* Close Select, Dropdown, Popover on blur outside component
* Added typeahead to Dropdown
* Added highlightedIndex control prop to dropdown
* Menu and Dropdown now support both flat and hierarchical data prop

### Followup

* Publish mineral-ui-icons package
* Implement render props across Popover components
* Avatar component should extract 2 letters
* Avatar renders icon prop as <span icon="[object Object]" in basic usage example
* Add "built-in" avatar support to MenuItem, similar to icons
* CustomRender examples updated to render something simple besides an Avatar