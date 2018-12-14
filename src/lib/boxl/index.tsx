import React from "react";
import { BoxlComponent } from "../BoxlComponent";
import { BoxlProps, BoxlPropsPartial } from "../types";

// tslint:disable

export interface Boxl<T = {}> {
  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["div"]
  >(d?: { component?: undefined } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["a"]
  >(d?: { component?: "a" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["abbr"]
  >(d?: { component?: "abbr" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["address"]
  >(d?: { component?: "address" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["area"]
  >(d?: { component?: "area" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["article"]
  >(d?: { component?: "article" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["aside"]
  >(d?: { component?: "aside" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["audio"]
  >(d?: { component?: "audio" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["b"]
  >(d?: { component?: "b" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["base"]
  >(d?: { component?: "base" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["bdi"]
  >(d?: { component?: "bdi" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["bdo"]
  >(d?: { component?: "bdo" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["big"]
  >(d?: { component?: "big" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["blockquote"]
  >(d?: { component?: "blockquote" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["body"]
  >(d?: { component?: "body" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["br"]
  >(d?: { component?: "br" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["button"]
  >(d?: { component?: "button" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["canvas"]
  >(d?: { component?: "canvas" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["caption"]
  >(d?: { component?: "caption" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["cite"]
  >(d?: { component?: "cite" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["code"]
  >(d?: { component?: "code" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["col"]
  >(d?: { component?: "col" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["colgroup"]
  >(d?: { component?: "colgroup" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["data"]
  >(d?: { component?: "data" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["datalist"]
  >(d?: { component?: "datalist" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["dd"]
  >(d?: { component?: "dd" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["del"]
  >(d?: { component?: "del" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["details"]
  >(d?: { component?: "details" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["dfn"]
  >(d?: { component?: "dfn" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["dialog"]
  >(d?: { component?: "dialog" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["div"]
  >(d?: { component?: "div" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["dl"]
  >(d?: { component?: "dl" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["dt"]
  >(d?: { component?: "dt" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["em"]
  >(d?: { component?: "em" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["embed"]
  >(d?: { component?: "embed" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["fieldset"]
  >(d?: { component?: "fieldset" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["figcaption"]
  >(d?: { component?: "figcaption" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["figure"]
  >(d?: { component?: "figure" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["footer"]
  >(d?: { component?: "footer" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["form"]
  >(d?: { component?: "form" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["h1"]
  >(d?: { component?: "h1" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["h2"]
  >(d?: { component?: "h2" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["h3"]
  >(d?: { component?: "h3" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["h4"]
  >(d?: { component?: "h4" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["h5"]
  >(d?: { component?: "h5" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["h6"]
  >(d?: { component?: "h6" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["head"]
  >(d?: { component?: "head" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["header"]
  >(d?: { component?: "header" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["hgroup"]
  >(d?: { component?: "hgroup" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["hr"]
  >(d?: { component?: "hr" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["html"]
  >(d?: { component?: "html" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["i"]
  >(d?: { component?: "i" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["iframe"]
  >(d?: { component?: "iframe" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["img"]
  >(d?: { component?: "img" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["input"]
  >(d?: { component?: "input" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["ins"]
  >(d?: { component?: "ins" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["kbd"]
  >(d?: { component?: "kbd" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["keygen"]
  >(d?: { component?: "keygen" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["label"]
  >(d?: { component?: "label" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["legend"]
  >(d?: { component?: "legend" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["li"]
  >(d?: { component?: "li" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["link"]
  >(d?: { component?: "link" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["main"]
  >(d?: { component?: "main" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["map"]
  >(d?: { component?: "map" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["mark"]
  >(d?: { component?: "mark" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["menu"]
  >(d?: { component?: "menu" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["menuitem"]
  >(d?: { component?: "menuitem" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["meta"]
  >(d?: { component?: "meta" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["meter"]
  >(d?: { component?: "meter" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["nav"]
  >(d?: { component?: "nav" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["noindex"]
  >(d?: { component?: "noindex" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["noscript"]
  >(d?: { component?: "noscript" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["object"]
  >(d?: { component?: "object" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["ol"]
  >(d?: { component?: "ol" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["optgroup"]
  >(d?: { component?: "optgroup" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["option"]
  >(d?: { component?: "option" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["output"]
  >(d?: { component?: "output" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["p"]
  >(d?: { component?: "p" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["param"]
  >(d?: { component?: "param" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["picture"]
  >(d?: { component?: "picture" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["pre"]
  >(d?: { component?: "pre" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["progress"]
  >(d?: { component?: "progress" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["q"]
  >(d?: { component?: "q" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["rp"]
  >(d?: { component?: "rp" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["rt"]
  >(d?: { component?: "rt" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["ruby"]
  >(d?: { component?: "ruby" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["s"]
  >(d?: { component?: "s" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["samp"]
  >(d?: { component?: "samp" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["script"]
  >(d?: { component?: "script" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["section"]
  >(d?: { component?: "section" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["select"]
  >(d?: { component?: "select" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["small"]
  >(d?: { component?: "small" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["source"]
  >(d?: { component?: "source" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["span"]
  >(d?: { component?: "span" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["strong"]
  >(d?: { component?: "strong" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["style"]
  >(d?: { component?: "style" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["sub"]
  >(d?: { component?: "sub" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["summary"]
  >(d?: { component?: "summary" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["sup"]
  >(d?: { component?: "sup" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["table"]
  >(d?: { component?: "table" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["tbody"]
  >(d?: { component?: "tbody" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["td"]
  >(d?: { component?: "td" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["textarea"]
  >(d?: { component?: "textarea" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["tfoot"]
  >(d?: { component?: "tfoot" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["th"]
  >(d?: { component?: "th" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["thead"]
  >(d?: { component?: "thead" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["time"]
  >(d?: { component?: "time" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["title"]
  >(d?: { component?: "title" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["tr"]
  >(d?: { component?: "tr" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["track"]
  >(d?: { component?: "track" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["u"]
  >(d?: { component?: "u" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["ul"]
  >(d?: { component?: "ul" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["var"]
  >(d?: { component?: "var" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["video"]
  >(d?: { component?: "video" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["wbr"]
  >(d?: { component?: "wbr" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["webview"]
  >(d?: { component?: "webview" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["svg"]
  >(d?: { component?: "svg" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["animate"]
  >(d?: { component?: "animate" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["animateTransform"]
  >(
    d?: { component?: "animateTransform" } & D
  ): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["circle"]
  >(d?: { component?: "circle" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["clipPath"]
  >(d?: { component?: "clipPath" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["defs"]
  >(d?: { component?: "defs" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["desc"]
  >(d?: { component?: "desc" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["ellipse"]
  >(d?: { component?: "ellipse" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feBlend"]
  >(d?: { component?: "feBlend" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feColorMatrix"]
  >(d?: { component?: "feColorMatrix" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feComponentTransfer"]
  >(
    d?: { component?: "feComponentTransfer" } & D
  ): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feComposite"]
  >(d?: { component?: "feComposite" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feConvolveMatrix"]
  >(
    d?: { component?: "feConvolveMatrix" } & D
  ): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feDiffuseLighting"]
  >(
    d?: { component?: "feDiffuseLighting" } & D
  ): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feDisplacementMap"]
  >(
    d?: { component?: "feDisplacementMap" } & D
  ): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feDistantLight"]
  >(
    d?: { component?: "feDistantLight" } & D
  ): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feFlood"]
  >(d?: { component?: "feFlood" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feFuncA"]
  >(d?: { component?: "feFuncA" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feFuncB"]
  >(d?: { component?: "feFuncB" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feFuncG"]
  >(d?: { component?: "feFuncG" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feFuncR"]
  >(d?: { component?: "feFuncR" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feGaussianBlur"]
  >(
    d?: { component?: "feGaussianBlur" } & D
  ): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feImage"]
  >(d?: { component?: "feImage" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feMerge"]
  >(d?: { component?: "feMerge" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feMergeNode"]
  >(d?: { component?: "feMergeNode" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feMorphology"]
  >(d?: { component?: "feMorphology" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feOffset"]
  >(d?: { component?: "feOffset" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["fePointLight"]
  >(d?: { component?: "fePointLight" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feSpecularLighting"]
  >(
    d?: { component?: "feSpecularLighting" } & D
  ): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feSpotLight"]
  >(d?: { component?: "feSpotLight" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feTile"]
  >(d?: { component?: "feTile" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feTurbulence"]
  >(d?: { component?: "feTurbulence" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["filter"]
  >(d?: { component?: "filter" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["foreignObject"]
  >(d?: { component?: "foreignObject" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["g"]
  >(d?: { component?: "g" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["image"]
  >(d?: { component?: "image" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["line"]
  >(d?: { component?: "line" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["linearGradient"]
  >(
    d?: { component?: "linearGradient" } & D
  ): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["marker"]
  >(d?: { component?: "marker" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["mask"]
  >(d?: { component?: "mask" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["metadata"]
  >(d?: { component?: "metadata" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["path"]
  >(d?: { component?: "path" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["pattern"]
  >(d?: { component?: "pattern" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["polygon"]
  >(d?: { component?: "polygon" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["polyline"]
  >(d?: { component?: "polyline" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["radialGradient"]
  >(
    d?: { component?: "radialGradient" } & D
  ): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["rect"]
  >(d?: { component?: "rect" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["stop"]
  >(d?: { component?: "stop" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["switch"]
  >(d?: { component?: "switch" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["symbol"]
  >(d?: { component?: "symbol" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["text"]
  >(d?: { component?: "text" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["textPath"]
  >(d?: { component?: "textPath" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["tspan"]
  >(d?: { component?: "tspan" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["use"]
  >(d?: { component?: "use" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["view"]
  >(d?: { component?: "view" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;
  
  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = React.ComponentType<P>
  >(d?: { component?: React.ComponentType<P> } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;
}

export const boxl: Boxl = <
  P,
  E = JSX.IntrinsicElements["div"],
  D extends BoxlPropsPartial<P, {}, E> = BoxlPropsPartial<P, {}, E>
>(d?: Partial<D>) => {
  return function Boxl(p: BoxlProps<P, {}, E>) {
    return <BoxlComponent {...d} {...p} />;
  };
};