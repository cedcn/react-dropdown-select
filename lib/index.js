"use strict";exports.__esModule=!0,exports.default=exports.Select=void 0;var _styledBase=_interopRequireDefault(require("@emotion/styled-base")),_react=_interopRequireWildcard(require("react")),_reactDom=_interopRequireDefault(require("react-dom")),_propTypes=_interopRequireDefault(require("prop-types")),_ClickOutside=_interopRequireDefault(require("./components/ClickOutside")),_Content=_interopRequireDefault(require("./components/Content")),_Dropdown=_interopRequireDefault(require("./components/Dropdown")),_Loading=_interopRequireDefault(require("./components/Loading")),_Clear=_interopRequireDefault(require("./components/Clear")),_Separator=_interopRequireDefault(require("./components/Separator")),_DropdownHandle=_interopRequireDefault(require("./components/DropdownHandle")),_util=require("./util"),_constants=require("./constants");function _interopRequireWildcard(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)if(Object.prototype.hasOwnProperty.call(a,c)){var d=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(a,c):{};d.get||d.set?Object.defineProperty(b,c,d):b[c]=a[c]}return b.default=a,b}function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _inheritsLoose(a,b){a.prototype=Object.create(b.prototype),a.prototype.constructor=a,a.__proto__=b}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var Select=/*#__PURE__*/function(a){function b(b){var c;return c=a.call(this,b)||this,_defineProperty(_assertThisInitialized(_assertThisInitialized(c)),"onDropdownClose",function(){c.setState({cursor:null}),c.props.onDropdownClose()}),_defineProperty(_assertThisInitialized(_assertThisInitialized(c)),"onScroll",function(){c.props.closeOnScroll&&c.dropDown("close"),c.updateSelectBounds()}),_defineProperty(_assertThisInitialized(_assertThisInitialized(c)),"updateSelectBounds",function(){return c.select.current&&c.setState({selectBounds:c.select.current.getBoundingClientRect()})}),_defineProperty(_assertThisInitialized(_assertThisInitialized(c)),"getSelectBounds",function(){return c.state.selectBounds}),_defineProperty(_assertThisInitialized(_assertThisInitialized(c)),"dropDown",function(a,b){return void 0===a&&(a="toggle"),c.props.portal&&!c.props.closeOnScroll&&!c.props.closeOnSelect&&b&&b.srcElement&&b.srcElement.offsetParent&&b.srcElement.offsetParent.classList.contains("react-dropdown-select-dropdown")?void 0:c.props.keepOpen?c.setState({dropdown:!0}):"close"===a&&c.state.dropdown?(c.select.current.blur(),c.setState({dropdown:!1,search:c.props.clearOnBlur?"":c.state.search})):"open"!==a||c.state.dropdown?"toggle"===a&&(c.select.current.focus(),c.setState({dropdown:!c.state.dropdown})):c.setState({dropdown:!0})}),_defineProperty(_assertThisInitialized(_assertThisInitialized(c)),"getSelectRef",function(){return c.select.current}),_defineProperty(_assertThisInitialized(_assertThisInitialized(c)),"addItem",function(a){if(c.props.multi){if(-1!==c.state.values.indexOf(a))return c.removeItem(null,a,!1);c.setState({values:[].concat(c.state.values,[a])})}else c.setState({values:[a],dropdown:!1});return c.props.clearOnSelect&&c.setState({search:""}),!0}),_defineProperty(_assertThisInitialized(_assertThisInitialized(c)),"removeItem",function(a,b,d){void 0===d&&(d=!1),a&&d&&(a.preventDefault(),a.stopPropagation(),c.dropDown("close")),c.setState({values:c.state.values.filter(function(a){return a[c.props.valueField]!==b[c.props.valueField]})})}),_defineProperty(_assertThisInitialized(_assertThisInitialized(c)),"setSearch",function(a){c.setState({cursor:null}),c.setState({search:a.target.value})}),_defineProperty(_assertThisInitialized(_assertThisInitialized(c)),"getInputSize",function(){return c.state.search?c.state.search.length:0<c.state.values.length?c.props.addPlaceholder.length:c.props.placeholder.length}),_defineProperty(_assertThisInitialized(_assertThisInitialized(c)),"toggleSelectAll",function(){return c.setState({values:0===c.state.values.length?c.selectAll():c.clearAll()})}),_defineProperty(_assertThisInitialized(_assertThisInitialized(c)),"clearAll",function(){c.props.onClearAll(),c.setState({values:[]})}),_defineProperty(_assertThisInitialized(_assertThisInitialized(c)),"selectAll",function(){return c.props.onSelectAll(),c.setState({values:c.props.options.filter(function(a){return!a.disabled})})}),_defineProperty(_assertThisInitialized(_assertThisInitialized(c)),"isSelected",function(a){return!!c.state.values.find(function(b){return b[c.props.valueField]===a[c.props.valueField]})}),_defineProperty(_assertThisInitialized(_assertThisInitialized(c)),"areAllSelected",function(){return c.state.values.length===c.props.options.filter(function(a){return!a.disabled}).length}),_defineProperty(_assertThisInitialized(_assertThisInitialized(c)),"safeString",function(a){return a.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}),_defineProperty(_assertThisInitialized(_assertThisInitialized(c)),"sortBy",function(){var a=c.props,d=a.sortBy,e=a.labelField,f=a.options;return d?f.sort(function(c,a){var b,g,h=c[d],i=a[d];return void 0===c[d]||void 0===i?f:h&&"number"==typeof h?(b=c[h?d:e],g=a[i?d:e],b-g):(b=(c[h?d:e]+"").toLowerCase(),g=(a[i?d:e]+"").toLowerCase(),b<g?-1:b>g?1:0)}):f}),_defineProperty(_assertThisInitialized(_assertThisInitialized(c)),"searchFn",function(a){var b=a.state,c=a.props,d=a.methods,e=new RegExp(d.safeString(b.search),"i");return d.sortBy(c.options).filter(function(a){return e.test(a[c.searchBy]||a[c.labelField])})}),_defineProperty(_assertThisInitialized(_assertThisInitialized(c)),"searchResults",function(){var a={state:c.state,props:c.props,methods:c.methods};return c.props.searchFn(a)||c.searchFn(a)}),_defineProperty(_assertThisInitialized(_assertThisInitialized(c)),"activeCursorItem",function(a){return c.setState({activeCursorItem:a})}),_defineProperty(_assertThisInitialized(_assertThisInitialized(c)),"handleKeyDown",function(a){var b=c.state.cursor;if("ArrowDown"===a.key&&null===b)return c.setState({cursor:0});if(("ArrowUp"===a.key||"ArrowDown"===a.key)&&a.preventDefault(),"Escape"===a.key&&c.dropDown("close"),"Enter"===a.key){var d=c.searchResults()[b];d&&!d.disabled&&c.addItem(d)}return("ArrowUp"===a.key&&0<b&&c.setState(function(a){return{cursor:a.cursor-1}}),"ArrowUp"===a.key&&0===b&&c.setState({cursor:c.searchResults().length}),"ArrowDown"===a.key&&c.setState(function(a){return{cursor:a.cursor+1}}),"ArrowDown"===a.key&&c.searchResults().length===b)?c.setState({cursor:0}):void 0}),_defineProperty(_assertThisInitialized(_assertThisInitialized(c)),"renderDropdown",function(){return c.props.portal?_reactDom.default.createPortal(_react.default.createElement(_Dropdown.default,{props:c.props,state:c.state,methods:c.methods}),c.dropdownRoot):_react.default.createElement(_Dropdown.default,{props:c.props,state:c.state,methods:c.methods})}),_defineProperty(_assertThisInitialized(_assertThisInitialized(c)),"createNew",function(a){var b,d=(b={},b[c.props.labelField]=a,b[c.props.valueField]=a,b);c.addItem(d),c.props.onCreateNew(d),c.setState({search:""})}),c.state={dropdown:!1,values:b.values,search:"",selectBounds:{},cursor:null},c.methods={removeItem:c.removeItem,dropDown:c.dropDown,addItem:c.addItem,setSearch:c.setSearch,getInputSize:c.getInputSize,toggleSelectAll:c.toggleSelectAll,clearAll:c.clearAll,selectAll:c.selectAll,searchResults:c.searchResults,getSelectRef:c.getSelectRef,isSelected:c.isSelected,getSelectBounds:c.getSelectBounds,areAllSelected:c.areAllSelected,handleKeyDown:c.handleKeyDown,activeCursorItem:c.activeCursorItem,createNew:c.createNew,sortBy:c.sortBy,safeString:c.safeString},c.select=_react.default.createRef(),c.dropdownRoot="undefined"!=typeof document&&document.createElement("div"),c}_inheritsLoose(b,a);var c=b.prototype;return c.componentDidMount=function a(){this.props.portal&&this.props.portal.appendChild(this.dropdownRoot),window.addEventListener("resize",(0,_util.debounce)(this.updateSelectBounds)),window.addEventListener("scroll",(0,_util.debounce)(this.onScroll)),this.props.onChange(this.state.values),this.dropDown("close"),this.select&&this.updateSelectBounds()},c.componentDidUpdate=function c(a,b){b.values!==this.state.values&&(this.props.onChange(this.state.values),this.updateSelectBounds()),b.search!==this.state.search&&this.updateSelectBounds(),b.values!==this.state.values&&this.props.closeOnSelect&&this.dropDown("close"),a.multi!==this.props.multi&&this.updateSelectBounds(),b.dropdown&&b.dropdown!==this.state.dropdown&&this.onDropdownClose(),b.dropdown||b.dropdown===this.state.dropdown||this.props.onDropdownOpen()},c.componentWillUnmount=function a(){this.props.portal&&this.props.portal.removeChild(this.dropdownRoot),window.removeEventListener("resize",(0,_util.debounce)(this.updateSelectBounds,this.props.debounceDelay)),window.removeEventListener("scroll",(0,_util.debounce)(this.onScroll,this.props.debounceDelay))},c.render=function b(){var a=this;return _react.default.createElement(_ClickOutside.default,{onClickOutside:function c(b){return a.dropDown("close",b)}},_react.default.createElement(ReactDropdownSelect,{onKeyDown:this.handleKeyDown,onClick:function c(b){return a.dropDown("open",b)},tabIndex:"0",direction:this.props.direction,style:this.props.style,ref:this.select,disabled:this.props.disabled,className:_constants.LIB_NAME+" "+this.props.className,color:this.props.color},_react.default.createElement(_Content.default,{props:this.props,state:this.state,methods:this.methods}),this.props.name&&_react.default.createElement("input",{name:this.props.name,type:"hidden",value:this.props.values}),this.props.loading&&_react.default.createElement(_Loading.default,{props:this.props}),this.props.clearable&&_react.default.createElement(_Clear.default,{props:this.props,state:this.state,methods:this.methods}),this.props.separator&&_react.default.createElement(_Separator.default,{props:this.props,state:this.state,methods:this.methods}),this.props.dropdownHandle&&_react.default.createElement(_DropdownHandle.default,{onClick:function b(){return a.select.current.focus()},props:this.props,state:this.state,methods:this.methods}),this.state.dropdown&&this.renderDropdown()))},b}(_react.Component);exports.Select=Select,Select.defaultProps={addPlaceholder:"",placeholder:"Select...",values:[],options:[],multi:!1,disabled:!1,searchBy:"label",sortBy:null,clearable:!1,searchable:!0,dropdownHandle:!0,separator:!1,keepOpen:void 0,noDataLabel:"No data",createNewLabel:"add {search}",disabledLabel:"disabled",dropdownGap:5,closeOnScroll:!1,debounceDelay:0,labelField:"label",valueField:"value",color:"#0074D9",keepSelectedInList:!0,closeOnSelect:!1,clearOnBlur:!0,clearOnSelect:!0,dropdownPosition:"bottom",dropdownHeight:"300px",autoFocus:!1,portal:null,create:!1,direction:"ltr",name:null,onChange:function a(){},onDropdownOpen:function a(){},onDropdownClose:function a(){},onClearAll:function a(){},onSelectAll:function a(){},onCreateNew:function a(){},searchFn:function a(){}};var ReactDropdownSelect=(0,_styledBase.default)("div",{target:"e1gzf2xs0",label:"ReactDropdownSelect"})("position:relative;display:flex;border:1px solid #ccc;width:100%;border-radius:2px;padding:2px 5px;flex-direction:row;direction:",function(a){var b=a.direction;return b},";align-items:center;min-height:36px;",function(a){var b=a.disabled;return b?"cursor: not-allowed;pointer-events: none;opacity: 0.3;":"pointer-events: all;"},":hover,:focus-within{border-color:",function(a){var b=a.color;return b},";}:focus,:focus-within{outline:0;box-shadow:0 0 0 3px ",function(a){var b=a.color;return(0,_util.hexToRGBA)(b,.2)},";}"+("production"===process.env.NODE_ENV?"":"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0ZnNDIiwiZmlsZSI6Ii4uL3NyYy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgQ2xpY2tPdXRzaWRlIGZyb20gJy4vY29tcG9uZW50cy9DbGlja091dHNpZGUnO1xuXG5pbXBvcnQgQ29udGVudCBmcm9tICcuL2NvbXBvbmVudHMvQ29udGVudCc7XG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnLi9jb21wb25lbnRzL0Ryb3Bkb3duJztcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vY29tcG9uZW50cy9Mb2FkaW5nJztcbmltcG9ydCBDbGVhciBmcm9tICcuL2NvbXBvbmVudHMvQ2xlYXInO1xuaW1wb3J0IFNlcGFyYXRvciBmcm9tICcuL2NvbXBvbmVudHMvU2VwYXJhdG9yJztcbmltcG9ydCBEcm9wZG93bkhhbmRsZSBmcm9tICcuL2NvbXBvbmVudHMvRHJvcGRvd25IYW5kbGUnO1xuXG5pbXBvcnQgeyBkZWJvdW5jZSwgaGV4VG9SR0JBIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7IExJQl9OQU1FIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5leHBvcnQgY2xhc3MgU2VsZWN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvbkRyb3Bkb3duQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uRHJvcGRvd25PcGVuOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNsZWFyQWxsOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblNlbGVjdEFsbDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdmFsdWVzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gICAga2VlcE9wZW46IFByb3BUeXBlcy5ib29sLFxuICAgIGRyb3Bkb3duR2FwOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG11bHRpOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBhZGRQbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuICAgIGNsZWFyYWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2VhcmNoYWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2VwYXJhdG9yOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBkcm9wZG93bkhhbmRsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2VhcmNoQnk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc29ydEJ5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNsb3NlT25TY3JvbGw6IFByb3BUeXBlcy5ib29sLFxuICAgIG9wZW5PblRvcDogUHJvcFR5cGVzLmJvb2wsXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgY29udGVudFJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBkcm9wZG93blJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBpdGVtUmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIG5vRGF0YVJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvcHRpb25SZW5kZXJlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaW5wdXRSZW5kZXJlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgbG9hZGluZ1JlbmRlcmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBjbGVhclJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBzZXBhcmF0b3JSZW5kZXJlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZHJvcGRvd25IYW5kbGVSZW5kZXJlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZGlyZWN0aW9uOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZHJvcGRvd246IGZhbHNlLFxuICAgICAgdmFsdWVzOiBwcm9wcy52YWx1ZXMsXG4gICAgICBzZWFyY2g6ICcnLFxuICAgICAgc2VsZWN0Qm91bmRzOiB7fSxcbiAgICAgIGN1cnNvcjogbnVsbFxuICAgIH07XG5cbiAgICB0aGlzLm1ldGhvZHMgPSB7XG4gICAgICByZW1vdmVJdGVtOiB0aGlzLnJlbW92ZUl0ZW0sXG4gICAgICBkcm9wRG93bjogdGhpcy5kcm9wRG93bixcbiAgICAgIGFkZEl0ZW06IHRoaXMuYWRkSXRlbSxcbiAgICAgIHNldFNlYXJjaDogdGhpcy5zZXRTZWFyY2gsXG4gICAgICBnZXRJbnB1dFNpemU6IHRoaXMuZ2V0SW5wdXRTaXplLFxuICAgICAgdG9nZ2xlU2VsZWN0QWxsOiB0aGlzLnRvZ2dsZVNlbGVjdEFsbCxcbiAgICAgIGNsZWFyQWxsOiB0aGlzLmNsZWFyQWxsLFxuICAgICAgc2VsZWN0QWxsOiB0aGlzLnNlbGVjdEFsbCxcbiAgICAgIHNlYXJjaFJlc3VsdHM6IHRoaXMuc2VhcmNoUmVzdWx0cyxcbiAgICAgIGdldFNlbGVjdFJlZjogdGhpcy5nZXRTZWxlY3RSZWYsXG4gICAgICBpc1NlbGVjdGVkOiB0aGlzLmlzU2VsZWN0ZWQsXG4gICAgICBnZXRTZWxlY3RCb3VuZHM6IHRoaXMuZ2V0U2VsZWN0Qm91bmRzLFxuICAgICAgYXJlQWxsU2VsZWN0ZWQ6IHRoaXMuYXJlQWxsU2VsZWN0ZWQsXG4gICAgICBoYW5kbGVLZXlEb3duOiB0aGlzLmhhbmRsZUtleURvd24sXG4gICAgICBhY3RpdmVDdXJzb3JJdGVtOiB0aGlzLmFjdGl2ZUN1cnNvckl0ZW0sXG4gICAgICBjcmVhdGVOZXc6IHRoaXMuY3JlYXRlTmV3LFxuICAgICAgc29ydEJ5OiB0aGlzLnNvcnRCeSxcbiAgICAgIHNhZmVTdHJpbmc6IHRoaXMuc2FmZVN0cmluZ1xuICAgIH07XG5cbiAgICB0aGlzLnNlbGVjdCA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgIHRoaXMuZHJvcGRvd25Sb290ID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMucG9ydGFsICYmIHRoaXMucHJvcHMucG9ydGFsLmFwcGVuZENoaWxkKHRoaXMuZHJvcGRvd25Sb290KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZGVib3VuY2UodGhpcy51cGRhdGVTZWxlY3RCb3VuZHMpKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2UodGhpcy5vblNjcm9sbCkpO1xuXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnN0YXRlLnZhbHVlcyk7XG5cbiAgICB0aGlzLmRyb3BEb3duKCdjbG9zZScpO1xuXG4gICAgaWYgKHRoaXMuc2VsZWN0KSB7XG4gICAgICB0aGlzLnVwZGF0ZVNlbGVjdEJvdW5kcygpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmIChwcmV2U3RhdGUudmFsdWVzICE9PSB0aGlzLnN0YXRlLnZhbHVlcykge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnN0YXRlLnZhbHVlcyk7XG4gICAgICB0aGlzLnVwZGF0ZVNlbGVjdEJvdW5kcygpO1xuICAgIH1cblxuICAgIGlmIChwcmV2U3RhdGUuc2VhcmNoICE9PSB0aGlzLnN0YXRlLnNlYXJjaCkge1xuICAgICAgdGhpcy51cGRhdGVTZWxlY3RCb3VuZHMoKTtcbiAgICB9XG5cbiAgICBpZiAocHJldlN0YXRlLnZhbHVlcyAhPT0gdGhpcy5zdGF0ZS52YWx1ZXMgJiYgdGhpcy5wcm9wcy5jbG9zZU9uU2VsZWN0KSB7XG4gICAgICB0aGlzLmRyb3BEb3duKCdjbG9zZScpO1xuICAgIH1cblxuICAgIGlmIChwcmV2UHJvcHMubXVsdGkgIT09IHRoaXMucHJvcHMubXVsdGkpIHtcbiAgICAgIHRoaXMudXBkYXRlU2VsZWN0Qm91bmRzKCk7XG4gICAgfVxuXG4gICAgaWYgKHByZXZTdGF0ZS5kcm9wZG93biAmJiBwcmV2U3RhdGUuZHJvcGRvd24gIT09IHRoaXMuc3RhdGUuZHJvcGRvd24pIHtcbiAgICAgIHRoaXMub25Ecm9wZG93bkNsb3NlKCk7XG4gICAgfVxuXG4gICAgaWYgKCFwcmV2U3RhdGUuZHJvcGRvd24gJiYgcHJldlN0YXRlLmRyb3Bkb3duICE9PSB0aGlzLnN0YXRlLmRyb3Bkb3duKSB7XG4gICAgICB0aGlzLnByb3BzLm9uRHJvcGRvd25PcGVuKCk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5wb3J0YWwgJiYgdGhpcy5wcm9wcy5wb3J0YWwucmVtb3ZlQ2hpbGQodGhpcy5kcm9wZG93blJvb3QpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgJ3Jlc2l6ZScsXG4gICAgICBkZWJvdW5jZSh0aGlzLnVwZGF0ZVNlbGVjdEJvdW5kcywgdGhpcy5wcm9wcy5kZWJvdW5jZURlbGF5KVxuICAgICk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlKHRoaXMub25TY3JvbGwsIHRoaXMucHJvcHMuZGVib3VuY2VEZWxheSkpO1xuICB9XG5cbiAgb25Ecm9wZG93bkNsb3NlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJzb3I6IG51bGwgfSk7XG4gICAgdGhpcy5wcm9wcy5vbkRyb3Bkb3duQ2xvc2UoKTtcbiAgfTtcblxuICBvblNjcm9sbCA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5jbG9zZU9uU2Nyb2xsKSB7XG4gICAgICB0aGlzLmRyb3BEb3duKCdjbG9zZScpO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlU2VsZWN0Qm91bmRzKCk7XG4gIH07XG5cbiAgdXBkYXRlU2VsZWN0Qm91bmRzID0gKCkgPT5cbiAgICB0aGlzLnNlbGVjdC5jdXJyZW50ICYmXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWxlY3RCb3VuZHM6IHRoaXMuc2VsZWN0LmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICB9KTtcblxuICBnZXRTZWxlY3RCb3VuZHMgPSAoKSA9PiB0aGlzLnN0YXRlLnNlbGVjdEJvdW5kcztcblxuICBkcm9wRG93biA9IChhY3Rpb24gPSAndG9nZ2xlJywgZXZlbnQpID0+IHtcbiAgICBpZiAoXG4gICAgICB0aGlzLnByb3BzLnBvcnRhbCAmJlxuICAgICAgIXRoaXMucHJvcHMuY2xvc2VPblNjcm9sbCAmJlxuICAgICAgIXRoaXMucHJvcHMuY2xvc2VPblNlbGVjdCAmJlxuICAgICAgZXZlbnQgJiZcbiAgICAgIGV2ZW50LnNyY0VsZW1lbnQgJiZcbiAgICAgIGV2ZW50LnNyY0VsZW1lbnQub2Zmc2V0UGFyZW50ICYmXG4gICAgICBldmVudC5zcmNFbGVtZW50Lm9mZnNldFBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3JlYWN0LWRyb3Bkb3duLXNlbGVjdC1kcm9wZG93bicpXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMua2VlcE9wZW4pIHtcbiAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHsgZHJvcGRvd246IHRydWUgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbiA9PT0gJ2Nsb3NlJyAmJiB0aGlzLnN0YXRlLmRyb3Bkb3duKSB7XG4gICAgICB0aGlzLnNlbGVjdC5jdXJyZW50LmJsdXIoKTtcblxuICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkcm9wZG93bjogZmFsc2UsXG4gICAgICAgIHNlYXJjaDogdGhpcy5wcm9wcy5jbGVhck9uQmx1ciA/ICcnIDogdGhpcy5zdGF0ZS5zZWFyY2hcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24gPT09ICdvcGVuJyAmJiAhdGhpcy5zdGF0ZS5kcm9wZG93bikge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoeyBkcm9wZG93bjogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uID09PSAndG9nZ2xlJykge1xuICAgICAgdGhpcy5zZWxlY3QuY3VycmVudC5mb2N1cygpO1xuICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoeyBkcm9wZG93bjogIXRoaXMuc3RhdGUuZHJvcGRvd24gfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGdldFNlbGVjdFJlZiA9ICgpID0+IHRoaXMuc2VsZWN0LmN1cnJlbnQ7XG5cbiAgYWRkSXRlbSA9IChpdGVtKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMubXVsdGkpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnZhbHVlcy5pbmRleE9mKGl0ZW0pICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdmVJdGVtKG51bGwsIGl0ZW0sIGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHZhbHVlczogWy4uLnRoaXMuc3RhdGUudmFsdWVzLCBpdGVtXVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB2YWx1ZXM6IFtpdGVtXSxcbiAgICAgICAgZHJvcGRvd246IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLmNsZWFyT25TZWxlY3QgJiYgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaDogJycgfSk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICByZW1vdmVJdGVtID0gKGV2ZW50LCBpdGVtLCBjbG9zZSA9IGZhbHNlKSA9PiB7XG4gICAgaWYgKGV2ZW50ICYmIGNsb3NlKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLmRyb3BEb3duKCdjbG9zZScpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmFsdWVzOiB0aGlzLnN0YXRlLnZhbHVlcy5maWx0ZXIoXG4gICAgICAgICh2YWx1ZXMpID0+IHZhbHVlc1t0aGlzLnByb3BzLnZhbHVlRmllbGRdICE9PSBpdGVtW3RoaXMucHJvcHMudmFsdWVGaWVsZF1cbiAgICAgIClcbiAgICB9KTtcbiAgfTtcblxuICBzZXRTZWFyY2ggPSAoZXZlbnQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGN1cnNvcjogbnVsbFxuICAgIH0pO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWFyY2g6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9O1xuXG4gIGdldElucHV0U2l6ZSA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5zZWFyY2gpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLnNlYXJjaC5sZW5ndGg7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGUudmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmFkZFBsYWNlaG9sZGVyLmxlbmd0aDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5wcm9wcy5wbGFjZWhvbGRlci5sZW5ndGg7XG4gIH07XG5cbiAgdG9nZ2xlU2VsZWN0QWxsID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZhbHVlczogdGhpcy5zdGF0ZS52YWx1ZXMubGVuZ3RoID09PSAwID8gdGhpcy5zZWxlY3RBbGwoKSA6IHRoaXMuY2xlYXJBbGwoKVxuICAgIH0pO1xuICB9O1xuXG4gIGNsZWFyQWxsID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMub25DbGVhckFsbCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmFsdWVzOiBbXVxuICAgIH0pO1xuICB9O1xuXG4gIHNlbGVjdEFsbCA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLm9uU2VsZWN0QWxsKCk7XG4gICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmFsdWVzOiB0aGlzLnByb3BzLm9wdGlvbnMuZmlsdGVyKChvcHRpb24pID0+ICFvcHRpb24uZGlzYWJsZWQpXG4gICAgfSk7XG4gIH07XG5cbiAgaXNTZWxlY3RlZCA9IChvcHRpb24pID0+XG4gICAgISF0aGlzLnN0YXRlLnZhbHVlcy5maW5kKFxuICAgICAgKHZhbHVlKSA9PiB2YWx1ZVt0aGlzLnByb3BzLnZhbHVlRmllbGRdID09PSBvcHRpb25bdGhpcy5wcm9wcy52YWx1ZUZpZWxkXVxuICAgICk7XG5cbiAgYXJlQWxsU2VsZWN0ZWQgPSAoKSA9PlxuICAgIHRoaXMuc3RhdGUudmFsdWVzLmxlbmd0aCA9PT0gdGhpcy5wcm9wcy5vcHRpb25zLmZpbHRlcigob3B0aW9uKSA9PiAhb3B0aW9uLmRpc2FibGVkKS5sZW5ndGg7XG5cbiAgc2FmZVN0cmluZyA9IChzdHJpbmcpID0+IHN0cmluZy5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgJ1xcXFwkJicpO1xuXG4gIHNvcnRCeSA9ICgpID0+IHtcbiAgICBjb25zdCB7IHNvcnRCeSwgbGFiZWxGaWVsZCwgb3B0aW9ucyB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICghc29ydEJ5KSB7XG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG5cbiAgICByZXR1cm4gb3B0aW9ucy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBsZXQgZmllbGRBO1xuICAgICAgbGV0IGZpZWxkQjtcblxuICAgICAgY29uc3Qgc29ydEEgPSBhW3NvcnRCeV07XG4gICAgICBjb25zdCBzb3J0QiA9IGJbc29ydEJ5XTtcblxuICAgICAgaWYgKGFbc29ydEJ5XSA9PT0gdW5kZWZpbmVkIHx8IHNvcnRCID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgICB9XG5cbiAgICAgIGlmIChzb3J0QSAmJiB0eXBlb2Ygc29ydEEgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGZpZWxkQSA9IGFbc29ydEEgPyBzb3J0QnkgOiBsYWJlbEZpZWxkXTtcbiAgICAgICAgZmllbGRCID0gYltzb3J0QiA/IHNvcnRCeSA6IGxhYmVsRmllbGRdO1xuXG4gICAgICAgIHJldHVybiBmaWVsZEEgLSBmaWVsZEI7XG4gICAgICB9XG5cbiAgICAgIGZpZWxkQSA9IFN0cmluZyhhW3NvcnRBID8gc29ydEJ5IDogbGFiZWxGaWVsZF0pLnRvTG93ZXJDYXNlKCk7XG4gICAgICBmaWVsZEIgPSBTdHJpbmcoYltzb3J0QiA/IHNvcnRCeSA6IGxhYmVsRmllbGRdKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBpZiAoZmllbGRBIDwgZmllbGRCKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZpZWxkQSA+IGZpZWxkQikge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG4gIH07XG5cbiAgc2VhcmNoRm4gPSAoeyBzdGF0ZSwgcHJvcHMsIG1ldGhvZHMgfSkgPT4ge1xuICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAobWV0aG9kcy5zYWZlU3RyaW5nKHN0YXRlLnNlYXJjaCksICdpJyk7XG5cbiAgICByZXR1cm4gbWV0aG9kcy5zb3J0QnkocHJvcHMub3B0aW9ucykuZmlsdGVyKChpdGVtKSA9PlxuICAgICAgcmVnZXhwLnRlc3QoaXRlbVtwcm9wcy5zZWFyY2hCeV0gfHwgaXRlbVtwcm9wcy5sYWJlbEZpZWxkXSlcbiAgICApO1xuICB9O1xuXG4gIHNlYXJjaFJlc3VsdHMgPSAoKSA9PiB7XG4gICAgY29uc3QgYXJncyA9IHsgc3RhdGU6IHRoaXMuc3RhdGUsIHByb3BzOiB0aGlzLnByb3BzLCBtZXRob2RzOiB0aGlzLm1ldGhvZHMgfTtcblxuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnByb3BzLnNlYXJjaEZuKGFyZ3MpIHx8IHRoaXMuc2VhcmNoRm4oYXJncylcbiAgICApO1xuICB9O1xuXG4gIGFjdGl2ZUN1cnNvckl0ZW0gPSAoYWN0aXZlQ3Vyc29ySXRlbSkgPT5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFjdGl2ZUN1cnNvckl0ZW1cbiAgICB9KTtcblxuICBoYW5kbGVLZXlEb3duID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBjdXJzb3IgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dEb3duJyAmJiBjdXJzb3IgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY3Vyc29yOiAwXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dVcCcgfHwgZXZlbnQua2V5ID09PSAnQXJyb3dEb3duJykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgdGhpcy5kcm9wRG93bignY2xvc2UnKTtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBjb25zdCBjdXJyZW50SXRlbSA9IHRoaXMuc2VhcmNoUmVzdWx0cygpW2N1cnNvcl07XG4gICAgICBpZiAoY3VycmVudEl0ZW0gJiYgIWN1cnJlbnRJdGVtLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuYWRkSXRlbShjdXJyZW50SXRlbSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93VXAnICYmIGN1cnNvciA+IDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAgICAgY3Vyc29yOiBwcmV2U3RhdGUuY3Vyc29yIC0gMVxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIGlmIChldmVudC5rZXkgPT09ICdBcnJvd1VwJyAmJiBjdXJzb3IgPT09IDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjdXJzb3I6IHRoaXMuc2VhcmNoUmVzdWx0cygpLmxlbmd0aFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAgICAgY3Vyc29yOiBwcmV2U3RhdGUuY3Vyc29yICsgMVxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIGlmIChldmVudC5rZXkgPT09ICdBcnJvd0Rvd24nICYmIHRoaXMuc2VhcmNoUmVzdWx0cygpLmxlbmd0aCA9PT0gY3Vyc29yKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGN1cnNvcjogMFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlckRyb3Bkb3duID0gKCkgPT5cbiAgICB0aGlzLnByb3BzLnBvcnRhbCA/IChcbiAgICAgIFJlYWN0RE9NLmNyZWF0ZVBvcnRhbChcbiAgICAgICAgPERyb3Bkb3duIHByb3BzPXt0aGlzLnByb3BzfSBzdGF0ZT17dGhpcy5zdGF0ZX0gbWV0aG9kcz17dGhpcy5tZXRob2RzfSAvPixcbiAgICAgICAgdGhpcy5kcm9wZG93blJvb3RcbiAgICAgIClcbiAgICApIDogKFxuICAgICAgPERyb3Bkb3duIHByb3BzPXt0aGlzLnByb3BzfSBzdGF0ZT17dGhpcy5zdGF0ZX0gbWV0aG9kcz17dGhpcy5tZXRob2RzfSAvPlxuICAgICk7XG5cbiAgY3JlYXRlTmV3ID0gKGl0ZW0pID0+IHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHtcbiAgICAgIFt0aGlzLnByb3BzLmxhYmVsRmllbGRdOiBpdGVtLFxuICAgICAgW3RoaXMucHJvcHMudmFsdWVGaWVsZF06IGl0ZW1cbiAgICB9O1xuXG4gICAgdGhpcy5hZGRJdGVtKG5ld1ZhbHVlKTtcbiAgICB0aGlzLnByb3BzLm9uQ3JlYXRlTmV3KG5ld1ZhbHVlKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoOiAnJyB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDbGlja091dHNpZGUgb25DbGlja091dHNpZGU9eyhldmVudCkgPT4gdGhpcy5kcm9wRG93bignY2xvc2UnLCBldmVudCl9PlxuICAgICAgICA8UmVhY3REcm9wZG93blNlbGVjdFxuICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5oYW5kbGVLZXlEb3dufVxuICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gdGhpcy5kcm9wRG93bignb3BlbicsIGV2ZW50KX1cbiAgICAgICAgICB0YWJJbmRleD1cIjBcIlxuICAgICAgICAgIGRpcmVjdGlvbj17dGhpcy5wcm9wcy5kaXJlY3Rpb259XG4gICAgICAgICAgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9XG4gICAgICAgICAgcmVmPXt0aGlzLnNlbGVjdH1cbiAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cbiAgICAgICAgICBjbGFzc05hbWU9e2Ake0xJQl9OQU1FfSAke3RoaXMucHJvcHMuY2xhc3NOYW1lfWB9XG4gICAgICAgICAgY29sb3I9e3RoaXMucHJvcHMuY29sb3J9PlxuICAgICAgICAgIDxDb250ZW50IHByb3BzPXt0aGlzLnByb3BzfSBzdGF0ZT17dGhpcy5zdGF0ZX0gbWV0aG9kcz17dGhpcy5tZXRob2RzfSAvPlxuXG4gICAgICAgICAge3RoaXMucHJvcHMubmFtZSAmJiAoXG4gICAgICAgICAgICA8aW5wdXQgbmFtZT17dGhpcy5wcm9wcy5uYW1lfSB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9e3RoaXMucHJvcHMudmFsdWVzfSAvPlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5sb2FkaW5nICYmIDxMb2FkaW5nIHByb3BzPXt0aGlzLnByb3BzfSAvPn1cblxuICAgICAgICAgIHt0aGlzLnByb3BzLmNsZWFyYWJsZSAmJiAoXG4gICAgICAgICAgICA8Q2xlYXIgcHJvcHM9e3RoaXMucHJvcHN9IHN0YXRlPXt0aGlzLnN0YXRlfSBtZXRob2RzPXt0aGlzLm1ldGhvZHN9IC8+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHt0aGlzLnByb3BzLnNlcGFyYXRvciAmJiAoXG4gICAgICAgICAgICA8U2VwYXJhdG9yIHByb3BzPXt0aGlzLnByb3BzfSBzdGF0ZT17dGhpcy5zdGF0ZX0gbWV0aG9kcz17dGhpcy5tZXRob2RzfSAvPlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5kcm9wZG93bkhhbmRsZSAmJiAoXG4gICAgICAgICAgICA8RHJvcGRvd25IYW5kbGVcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zZWxlY3QuY3VycmVudC5mb2N1cygpfVxuICAgICAgICAgICAgICBwcm9wcz17dGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgc3RhdGU9e3RoaXMuc3RhdGV9XG4gICAgICAgICAgICAgIG1ldGhvZHM9e3RoaXMubWV0aG9kc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHt0aGlzLnN0YXRlLmRyb3Bkb3duICYmIHRoaXMucmVuZGVyRHJvcGRvd24oKX1cbiAgICAgICAgPC9SZWFjdERyb3Bkb3duU2VsZWN0PlxuICAgICAgPC9DbGlja091dHNpZGU+XG4gICAgKTtcbiAgfVxufVxuXG5TZWxlY3QuZGVmYXVsdFByb3BzID0ge1xuICBhZGRQbGFjZWhvbGRlcjogJycsXG4gIHBsYWNlaG9sZGVyOiAnU2VsZWN0Li4uJyxcbiAgdmFsdWVzOiBbXSxcbiAgb3B0aW9uczogW10sXG4gIG11bHRpOiBmYWxzZSxcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBzZWFyY2hCeTogJ2xhYmVsJyxcbiAgc29ydEJ5OiBudWxsLFxuICBjbGVhcmFibGU6IGZhbHNlLFxuICBzZWFyY2hhYmxlOiB0cnVlLFxuICBkcm9wZG93bkhhbmRsZTogdHJ1ZSxcbiAgc2VwYXJhdG9yOiBmYWxzZSxcbiAga2VlcE9wZW46IHVuZGVmaW5lZCxcbiAgbm9EYXRhTGFiZWw6ICdObyBkYXRhJyxcbiAgY3JlYXRlTmV3TGFiZWw6ICdhZGQge3NlYXJjaH0nLFxuICBkaXNhYmxlZExhYmVsOiAnZGlzYWJsZWQnLFxuICBkcm9wZG93bkdhcDogNSxcbiAgY2xvc2VPblNjcm9sbDogZmFsc2UsXG4gIGRlYm91bmNlRGVsYXk6IDAsXG4gIGxhYmVsRmllbGQ6ICdsYWJlbCcsXG4gIHZhbHVlRmllbGQ6ICd2YWx1ZScsXG4gIGNvbG9yOiAnIzAwNzREOScsXG4gIGtlZXBTZWxlY3RlZEluTGlzdDogdHJ1ZSxcbiAgY2xvc2VPblNlbGVjdDogZmFsc2UsXG4gIGNsZWFyT25CbHVyOiB0cnVlLFxuICBjbGVhck9uU2VsZWN0OiB0cnVlLFxuICBkcm9wZG93blBvc2l0aW9uOiAnYm90dG9tJyxcbiAgZHJvcGRvd25IZWlnaHQ6ICczMDBweCcsXG4gIGF1dG9Gb2N1czogZmFsc2UsXG4gIHBvcnRhbDogbnVsbCxcbiAgY3JlYXRlOiBmYWxzZSxcbiAgZGlyZWN0aW9uOiAnbHRyJyxcbiAgbmFtZTogbnVsbCxcbiAgb25DaGFuZ2U6ICgpID0+IHVuZGVmaW5lZCxcbiAgb25Ecm9wZG93bk9wZW46ICgpID0+IHVuZGVmaW5lZCxcbiAgb25Ecm9wZG93bkNsb3NlOiAoKSA9PiB1bmRlZmluZWQsXG4gIG9uQ2xlYXJBbGw6ICgpID0+IHVuZGVmaW5lZCxcbiAgb25TZWxlY3RBbGw6ICgpID0+IHVuZGVmaW5lZCxcbiAgb25DcmVhdGVOZXc6ICgpID0+IHVuZGVmaW5lZCxcbiAgc2VhcmNoRm46ICgpID0+IHVuZGVmaW5lZFxufTtcblxuY29uc3QgUmVhY3REcm9wZG93blNlbGVjdCA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgcGFkZGluZzogMnB4IDVweDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZGlyZWN0aW9uOiAkeyh7IGRpcmVjdGlvbiB9KSA9PiBkaXJlY3Rpb259O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAzNnB4O1xuICAkeyh7IGRpc2FibGVkIH0pID0+XG4gICAgZGlzYWJsZWQgPyAnY3Vyc29yOiBub3QtYWxsb3dlZDtwb2ludGVyLWV2ZW50czogbm9uZTtvcGFjaXR5OiAwLjM7JyA6ICdwb2ludGVyLWV2ZW50czogYWxsOyd9XG5cbiAgOmhvdmVyLCBcbiAgOmZvY3VzLXdpdGhpbiB7XG4gICAgYm9yZGVyLWNvbG9yOiAkeyh7IGNvbG9yIH0pID0+IGNvbG9yfTtcbiAgfVxuXG4gIDpmb2N1cyxcbiAgOmZvY3VzLXdpdGhpbiB7XG4gICAgb3V0bGluZTogMDtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggJHsoeyBjb2xvciB9KSA9PiBoZXhUb1JHQkEoY29sb3IsIDAuMil9O1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3Q7XG4iXX0= */")),_default=Select;exports.default=_default;