var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, Input } from '@angular/core';
var LAmeta = (function () {
    function LAmeta() {
        this.defaultColors = ["#5A8770", "#B2B7BB", "#6FA9AB", "#F5AF29", "#0088B9", "#F18636", "#D93A37", "#A6B12E", "#5C9BBC", "#F5888D", "#9A89B5", "#407887", "#9A89B5", "#5A8770", "#D33F33", "#A2B01F", "#F0B126", "#0087BF", "#F18636", "#0087BF", "#B2B7BB", "#72ACAE", "#9C8AB4", "#5A8770", "#EEB424", "#407887"];
        this.defaultTextColor = '#ffffff';
        this.defaultBorder = 'border:5px solid white';
        this.defaultTriangleup = 'width: 0;height: 0;border-left: 50px solid transparent;border-right: 50px solid transparent;border-bottom: 100px solid;';
        this.deafultFontsize = '30';
        this.defaultHeight = '50';
        this.deafultWidth = '50';
        this.defaultRadius = 'border-radius:50%;';
        this.deafultDynamic = 'false';
        this.defaultRotatedeg = '0';
        this.defaultAvatarborder = 'false';
        this.defaultFontWeight = '400';
        this.defaultFontFamily = 'HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica, Arial,Lucida Grande, sans-serif';
    }
    return LAmeta;
}());
export { LAmeta };
var Attributes = (function () {
    function Attributes() {
        this.alphabetcolors = 'avatar-alphabet-colors';
        this.textColor = 'avatar-text-color';
        this.defaultBorder = 'avatar-default-border';
        this.triangleup = 'avatar-triangle-up';
        this.fontsize = 'avatar-font-size';
        this.height = 'avatar-height';
        this.width = 'avatar-width';
        this.radius = 'avatar-radius';
        this.avatarcustombgcolor = 'avatar-custom-bg-color';
        this.dynamic = 'avatar-dynamic';
        this.fontWeight = 'avatar-font-weight';
        this.fontFamily = 'avatar-font-family';
        this.shape = 'avatar-shape';
        this.data = 'avatar-data';
        this.rotatedeg = 'avatar-rotate-degree';
        this.avatarborder = 'avatar-border';
    }
    return Attributes;
}());
export { Attributes };
var Ng2LetterAvatar = (function () {
    function Ng2LetterAvatar(el) {
        this._meta = new LAmeta();
        this.attribute = new Attributes();
        this.base = 'data:image/svg+xml;base64,';
        this.charCount = '1';
        this.letteravatar = el.nativeElement;
    }
    Ng2LetterAvatar.prototype.ngAfterViewInit = function () {
        //  console.log('input data:' + this.data);
        //  console.log('element data:' + this.letteravatar['data']);
        if (!this.alphabetcolors) {
            this.alphabetcolors = this.getPropertyValue(this.attribute.alphabetcolors) ?
                this.getPropertyValue(this.attribute.alphabetcolors) : this._meta.defaultColors;
        }
        if (!this.textColor) {
            this.textColor = this.getPropertyValue(this.attribute.textColor) ?
                this.getPropertyValue(this.attribute.textColor) : this._meta.defaultTextColor;
        }
        if (!this.avatarcustombgcolor) {
            this.avatarcustombgcolor = this.getPropertyValue(this.attribute.avatarcustombgcolor);
        }
        if (!this.avatarborder) {
            this.avatarborder = this.getPropertyValue(this.attribute.avatarborder) ?
                this.getPropertyValue(this.attribute.avatarborder) : this._meta.defaultAvatarborder;
        }
        if (!this.defaultBorder) {
            this.defaultBorder = this.getPropertyValue(this.attribute.defaultBorder) ?
                this.getPropertyValue(this.attribute.defaultBorder) : this._meta.defaultBorder;
        }
        if (!this.triangleup) {
            this.triangleup = this.getPropertyValue(this.attribute.triangleup) ?
                this.getPropertyValue(this.attribute.triangleup) : this._meta.defaultTriangleup;
        }
        if (!this.fontsize) {
            this.fontsize = this.getPropertyValue(this.attribute.fontsize) ?
                this.getPropertyValue(this.attribute.fontsize) : this._meta.deafultFontsize;
        }
        if (!this.height) {
            this.height = this.getPropertyValue(this.attribute.height) ?
                this.getPropertyValue(this.attribute.height) : this._meta.defaultHeight;
        }
        if (!this.width) {
            this.width = this.getPropertyValue(this.attribute.width) ?
                this.getPropertyValue(this.attribute.width) : this._meta.deafultWidth;
        }
        if (!this.radius) {
            this.radius = this.getPropertyValue(this.attribute.radius) ?
                this.getPropertyValue(this.attribute.radius) : this._meta.defaultRadius;
        }
        if (!this.dynamic) {
            this.dynamic = this.getPropertyValue(this.attribute.dynamic) ?
                this.getPropertyValue(this.attribute.dynamic) : false;
        }
        if (!this.rotatedeg) {
            this.rotatedeg = this.getPropertyValue(this.attribute.rotatedeg) ?
                this.getPropertyValue(this.attribute.rotatedeg) : this._meta.defaultRotatedeg;
        }
        if (!this.fontWeight) {
            this.fontWeight = this.getPropertyValue(this.attribute.fontWeight) ?
                this.getPropertyValue(this.attribute.fontWeight) : this._meta.defaultFontWeight;
        }
        if (!this.fontFamily) {
            this.fontFamily = this.getPropertyValue(this.attribute.fontFamily) ?
                this.getPropertyValue(this.attribute.fontFamily) : this._meta.defaultFontFamily;
        }
        if (!this.shape) {
            this.shape = this.getPropertyValue(this.attribute.shape);
        }
        if (!this.data) {
            this.data = this.getPropertyValue(this.attribute.data);
        }
        this.createAvatar();
    };
    Ng2LetterAvatar.prototype.getPropertyValue = function (property) {
        var result = '';
        result = this.letteravatar.getAttribute(property);
        return result;
    };
    Ng2LetterAvatar.prototype.createAvatar = function () {
        var c = '';
        if (this.charCount == '2') {
            var _data = getFirstAndLastName(this.data.toUpperCase());
            if (_data) {
                c = _data;
            }
            else {
                c = this.data.substring(0, +this.charCount).toUpperCase();
            }
        }
        else {
            c = this.data.substring(0, +this.charCount).toUpperCase();
        }
        var textTag = this.getCharacterTextTag(c, this.textColor, this.fontFamily, this.fontWeight, this.fontsize);
        var colorIndex;
        var color = '';
        /**
        * Populate the colors according to attributes
        */
        if (c.charCodeAt(0) < 65) {
            color = getRandomColors();
        }
        else {
            colorIndex = Math.floor((c.charCodeAt(0) - 65) % this.alphabetcolors.length);
            color = this.alphabetcolors[colorIndex];
        }
        if (this.avatarcustombgcolor) {
            color = this.avatarcustombgcolor;
        }
        this.createSvg(this.width, this.height, color, textTag);
        var lvcomponent = this.getLVText();
        var svgHtml = window.btoa(unescape(encodeURIComponent(lvcomponent)));
        var component;
        var base = this.base;
        var _style = '';
        if (this.avatarBorderStyle) {
            _style = this.avatarBorderStyle;
        }
        else if (this.avatarborder === 'true') {
            _style = this.defaultBorder;
        }
        if (this.rotatedeg != '0') {
            _style = '-ms-transform: rotate(' + this.rotatedeg + 'deg); -webkit-transform: rotate(' + this.rotatedeg + 'deg); transform: rotate(' + this.rotatedeg + 'deg)';
        }
        if (this.shape) {
            if (this.shape === 'round') {
                var round_style = this.radius + _style;
                if (this.data.indexOf('http') > -1 || this.data.indexOf('data:image') > -1) {
                    var img_size = 'width:' + this.width + 'px;height:' + this.height + 'px;';
                    component = "<img src=" + this.data + " style='" + img_size + round_style + "'  />";
                }
                else {
                    component = "<img src=" + base + svgHtml + " style='" + round_style + "' title='" + this.data + "' />";
                }
            }
        }
        else {
            if (this.data.indexOf('http') > -1 || this.data.indexOf('data:image') > -1) {
                var img_size = 'width:' + this.width + 'px;height:' + this.height + 'px;';
                component = "<img src=" + this.data + " style='" + img_size + _style + "'  />";
            }
            else {
                component = "<img src=" + base + svgHtml + " style='" + _style + "' title='" + this.data + "' />";
            }
        }
        //        if (this.dynamic === 'true') {
        //            this.letteravatar.innerHTML = component;
        //        } else {
        //            element.replaceWith(component);
        //        }
        this.letteravatar.innerHTML = component;
    };
    Ng2LetterAvatar.prototype.getLVText = function () {
        var lvTag = document.createElement('div');
        lvTag.appendChild(this.imageTag.cloneNode());
        return this.imageTag.outerHTML;
    };
    /**
     * Populate the svg tag which will used for the avatar generation
     * @param {type} width
     * @param {type} height
     * @param {type} color
     * @returns {unresolved}
     */
    Ng2LetterAvatar.prototype.createSvg = function (width, height, color, cobj) {
        var svgTag = document.createElement('svg');
        svgTag.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        svgTag.setAttribute('pointer-events', 'none');
        svgTag.setAttribute('width', width);
        svgTag.setAttribute('height', height);
        svgTag.setAttribute('style', "background-color:" + color + "; width:" + width + "px; height:" + height + "px");
        //  svgTag.insertAdjacentHTML('beforeend', cobj)
        svgTag.appendChild(cobj);
        //  svgTag.innerHTML = cobj;
        this.imageTag = svgTag;
        return svgTag.innerHTML;
    };
    /**
     *  Generate the Letter tag by using the svg text element
     * @param {type} character
     * @param {type} textColor
     * @param {type} fontFamily
     * @param {type} fontWeight
     * @param {type} fontsize
     * @returns {unresolved}
     */
    Ng2LetterAvatar.prototype.getCharacterTextTag = function (character, textColor, fontFamily, fontWeight, fontsize) {
        var textTag = document.createElement('text');
        textTag.setAttribute('text-anchor', 'middle');
        textTag.setAttribute('x', '50%');
        textTag.setAttribute('y', '50%');
        textTag.setAttribute('dy', '0.35em');
        textTag.setAttribute('pointer-events', 'auto');
        textTag.setAttribute('fill', textColor);
        textTag.setAttribute('font-family', fontFamily);
        textTag.setAttribute('style', "font-weight:" + fontWeight + " ;font-size:" + fontsize + "px");
        textTag.innerText = character;
        return textTag;
    };
    /**
    * Need to work on this in later releases
    */
    Ng2LetterAvatar.prototype.ngOnInit = function () {
    };
    /**
     * Need to work on this in later releases
     */
    Ng2LetterAvatar.prototype.ngOnDestroy = function () {
    };
    return Ng2LetterAvatar;
}());
__decorate([
    Input('avatar-alphabet-colors'),
    __metadata("design:type", Array)
], Ng2LetterAvatar.prototype, "alphabetcolors", void 0);
__decorate([
    Input('avatar-text-color'),
    __metadata("design:type", String)
], Ng2LetterAvatar.prototype, "textColor", void 0);
__decorate([
    Input('avatar-default-border'),
    __metadata("design:type", String)
], Ng2LetterAvatar.prototype, "defaultBorder", void 0);
__decorate([
    Input('avatar-triangle-up'),
    __metadata("design:type", String)
], Ng2LetterAvatar.prototype, "triangleup", void 0);
__decorate([
    Input('avatar-font-size'),
    __metadata("design:type", String)
], Ng2LetterAvatar.prototype, "fontsize", void 0);
__decorate([
    Input('avatar-height'),
    __metadata("design:type", String)
], Ng2LetterAvatar.prototype, "height", void 0);
__decorate([
    Input('avatar-width'),
    __metadata("design:type", String)
], Ng2LetterAvatar.prototype, "width", void 0);
__decorate([
    Input('avatar-font-weight'),
    __metadata("design:type", String)
], Ng2LetterAvatar.prototype, "fontWeight", void 0);
__decorate([
    Input('avatar-font-family'),
    __metadata("design:type", String)
], Ng2LetterAvatar.prototype, "fontFamily", void 0);
__decorate([
    Input('avatar-radius'),
    __metadata("design:type", String)
], Ng2LetterAvatar.prototype, "radius", void 0);
__decorate([
    Input('avatar-dynamic'),
    __metadata("design:type", String)
], Ng2LetterAvatar.prototype, "dynamic", void 0);
__decorate([
    Input('avatar-rotate-degree'),
    __metadata("design:type", String)
], Ng2LetterAvatar.prototype, "rotatedeg", void 0);
__decorate([
    Input('avatar-char-count'),
    __metadata("design:type", String)
], Ng2LetterAvatar.prototype, "charCount", void 0);
__decorate([
    Input('avatar-data'),
    __metadata("design:type", String)
], Ng2LetterAvatar.prototype, "data", void 0);
__decorate([
    Input('avatar-border-style'),
    __metadata("design:type", String)
], Ng2LetterAvatar.prototype, "avatarBorderStyle", void 0);
__decorate([
    Input('avatar-border'),
    __metadata("design:type", String)
], Ng2LetterAvatar.prototype, "avatarborder", void 0);
__decorate([
    Input('avatar-custom-border'),
    __metadata("design:type", String)
], Ng2LetterAvatar.prototype, "avatarcustomborder", void 0);
__decorate([
    Input('avatar-shape'),
    __metadata("design:type", String)
], Ng2LetterAvatar.prototype, "shape", void 0);
__decorate([
    Input('avatar-custom-bg-color'),
    __metadata("design:type", String)
], Ng2LetterAvatar.prototype, "avatarcustombgcolor", void 0);
Ng2LetterAvatar = __decorate([
    Component({
        selector: 'ng2-letter-avatar',
        template: '<ng-content></ng-content>'
    }),
    __metadata("design:paramtypes", [ElementRef])
], Ng2LetterAvatar);
export { Ng2LetterAvatar };
/**
 * Get the random colors
 * @returns {String}
 */
function getRandomColors() {
    var letters = '0123456789ABCDEF'.split('');
    var _color = '#';
    for (var i = 0; i < 6; i++) {
        _color += letters[Math.floor(Math.random() * 16)];
    }
    return _color;
}
/**
 * get the first name and last name first letters and combined and form the letter avatar
 * @param {type} data
 * @returns {unresolved}
 */
function getFirstAndLastName(data) {
    var names = data.split(" ");
    if (names && names.length >= 2) {
        var firstName = names[0];
        var lastName = names[1];
        if (firstName && lastName) {
            var text = firstName.substr(0, 1) + lastName.substr(0, 1);
            return text;
        }
        else {
            return data.substr(0, 2);
        }
    }
}
//# sourceMappingURL=ng2letteravatar.js.map