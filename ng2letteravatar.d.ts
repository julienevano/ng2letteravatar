import { ElementRef, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
export declare class LAmeta {
    defaultColors: string[];
    defaultTextColor: string;
    defaultBorder: string;
    defaultTriangleup: string;
    deafultFontsize: string;
    defaultHeight: string;
    deafultWidth: string;
    defaultRadius: string;
    deafultDynamic: string;
    defaultRotatedeg: string;
    defaultAvatarborder: string;
    defaultFontWeight: string;
    defaultFontFamily: string;
}
export declare class Attributes {
    alphabetcolors: string;
    textColor: string;
    defaultBorder: string;
    triangleup: string;
    fontsize: string;
    height: string;
    width: string;
    radius: string;
    avatarcustombgcolor: string;
    dynamic: string;
    fontWeight: string;
    fontFamily: string;
    shape: string;
    data: string;
    rotatedeg: string;
    avatarborder: string;
}
export declare class Ng2LetterAvatar implements OnInit, OnDestroy, AfterViewInit {
    private letteravatar;
    private imageTag;
    _meta: LAmeta;
    attribute: Attributes;
    alphabetcolors: string[];
    textColor: string;
    defaultBorder: string;
    triangleup: string;
    fontsize: string;
    height: string;
    width: string;
    fontWeight: string;
    fontFamily: string;
    base: string;
    radius: string;
    dynamic: string;
    rotatedeg: string;
    charCount: string;
    data: string;
    avatarBorderStyle: string;
    avatarborder: string;
    avatarcustomborder: string;
    shape: string;
    avatarcustombgcolor: string;
    constructor(el: ElementRef);
    ngAfterViewInit(): void;
    private getPropertyValue(property);
    private createAvatar();
    private getLVText();
    /**
     * Populate the svg tag which will used for the avatar generation
     * @param {type} width
     * @param {type} height
     * @param {type} color
     * @returns {unresolved}
     */
    private createSvg(width, height, color, cobj);
    /**
     *  Generate the Letter tag by using the svg text element
     * @param {type} character
     * @param {type} textColor
     * @param {type} fontFamily
     * @param {type} fontWeight
     * @param {type} fontsize
     * @returns {unresolved}
     */
    private getCharacterTextTag(character, textColor, fontFamily, fontWeight, fontsize);
    /**
    * Need to work on this in later releases
    */
    ngOnInit(): void;
    /**
     * Need to work on this in later releases
     */
    ngOnDestroy(): void;
}
