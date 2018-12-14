import React from "react";
import { BoxlComponent } from "../BoxlComponent";
import { BoxlProps, BoxlPropsPartial } from "../types";

// tslint:disable

export interface Boxl<T = {}> {
  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["div"]
  >(d?: { element?: undefined } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["a"]
  >(d?: { element?: "a" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["abbr"]
  >(d?: { element?: "abbr" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["address"]
  >(d?: { element?: "address" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["area"]
  >(d?: { element?: "area" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["article"]
  >(d?: { element?: "article" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["aside"]
  >(d?: { element?: "aside" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["audio"]
  >(d?: { element?: "audio" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["b"]
  >(d?: { element?: "b" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["base"]
  >(d?: { element?: "base" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["bdi"]
  >(d?: { element?: "bdi" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["bdo"]
  >(d?: { element?: "bdo" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["big"]
  >(d?: { element?: "big" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["blockquote"]
  >(d?: { element?: "blockquote" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["body"]
  >(d?: { element?: "body" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["br"]
  >(d?: { element?: "br" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["button"]
  >(d?: { element?: "button" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["canvas"]
  >(d?: { element?: "canvas" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["caption"]
  >(d?: { element?: "caption" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["cite"]
  >(d?: { element?: "cite" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["code"]
  >(d?: { element?: "code" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["col"]
  >(d?: { element?: "col" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["colgroup"]
  >(d?: { element?: "colgroup" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["data"]
  >(d?: { element?: "data" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["datalist"]
  >(d?: { element?: "datalist" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["dd"]
  >(d?: { element?: "dd" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["del"]
  >(d?: { element?: "del" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["details"]
  >(d?: { element?: "details" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["dfn"]
  >(d?: { element?: "dfn" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["dialog"]
  >(d?: { element?: "dialog" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["div"]
  >(d?: { element?: "div" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["dl"]
  >(d?: { element?: "dl" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["dt"]
  >(d?: { element?: "dt" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["em"]
  >(d?: { element?: "em" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["embed"]
  >(d?: { element?: "embed" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["fieldset"]
  >(d?: { element?: "fieldset" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["figcaption"]
  >(d?: { element?: "figcaption" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["figure"]
  >(d?: { element?: "figure" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["footer"]
  >(d?: { element?: "footer" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["form"]
  >(d?: { element?: "form" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["h1"]
  >(d?: { element?: "h1" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["h2"]
  >(d?: { element?: "h2" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["h3"]
  >(d?: { element?: "h3" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["h4"]
  >(d?: { element?: "h4" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["h5"]
  >(d?: { element?: "h5" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["h6"]
  >(d?: { element?: "h6" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["head"]
  >(d?: { element?: "head" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["header"]
  >(d?: { element?: "header" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["hgroup"]
  >(d?: { element?: "hgroup" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["hr"]
  >(d?: { element?: "hr" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["html"]
  >(d?: { element?: "html" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["i"]
  >(d?: { element?: "i" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["iframe"]
  >(d?: { element?: "iframe" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["img"]
  >(d?: { element?: "img" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["input"]
  >(d?: { element?: "input" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["ins"]
  >(d?: { element?: "ins" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["kbd"]
  >(d?: { element?: "kbd" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["keygen"]
  >(d?: { element?: "keygen" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["label"]
  >(d?: { element?: "label" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["legend"]
  >(d?: { element?: "legend" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["li"]
  >(d?: { element?: "li" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["link"]
  >(d?: { element?: "link" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["main"]
  >(d?: { element?: "main" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["map"]
  >(d?: { element?: "map" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["mark"]
  >(d?: { element?: "mark" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["menu"]
  >(d?: { element?: "menu" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["menuitem"]
  >(d?: { element?: "menuitem" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["meta"]
  >(d?: { element?: "meta" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["meter"]
  >(d?: { element?: "meter" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["nav"]
  >(d?: { element?: "nav" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["noindex"]
  >(d?: { element?: "noindex" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["noscript"]
  >(d?: { element?: "noscript" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["object"]
  >(d?: { element?: "object" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["ol"]
  >(d?: { element?: "ol" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["optgroup"]
  >(d?: { element?: "optgroup" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["option"]
  >(d?: { element?: "option" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["output"]
  >(d?: { element?: "output" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["p"]
  >(d?: { element?: "p" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["param"]
  >(d?: { element?: "param" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["picture"]
  >(d?: { element?: "picture" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["pre"]
  >(d?: { element?: "pre" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["progress"]
  >(d?: { element?: "progress" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["q"]
  >(d?: { element?: "q" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["rp"]
  >(d?: { element?: "rp" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["rt"]
  >(d?: { element?: "rt" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["ruby"]
  >(d?: { element?: "ruby" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["s"]
  >(d?: { element?: "s" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["samp"]
  >(d?: { element?: "samp" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["script"]
  >(d?: { element?: "script" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["section"]
  >(d?: { element?: "section" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["select"]
  >(d?: { element?: "select" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["small"]
  >(d?: { element?: "small" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["source"]
  >(d?: { element?: "source" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["span"]
  >(d?: { element?: "span" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["strong"]
  >(d?: { element?: "strong" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["style"]
  >(d?: { element?: "style" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["sub"]
  >(d?: { element?: "sub" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["summary"]
  >(d?: { element?: "summary" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["sup"]
  >(d?: { element?: "sup" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["table"]
  >(d?: { element?: "table" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["tbody"]
  >(d?: { element?: "tbody" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["td"]
  >(d?: { element?: "td" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["textarea"]
  >(d?: { element?: "textarea" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["tfoot"]
  >(d?: { element?: "tfoot" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["th"]
  >(d?: { element?: "th" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["thead"]
  >(d?: { element?: "thead" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["time"]
  >(d?: { element?: "time" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["title"]
  >(d?: { element?: "title" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["tr"]
  >(d?: { element?: "tr" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["track"]
  >(d?: { element?: "track" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["u"]
  >(d?: { element?: "u" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["ul"]
  >(d?: { element?: "ul" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["var"]
  >(d?: { element?: "var" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["video"]
  >(d?: { element?: "video" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["wbr"]
  >(d?: { element?: "wbr" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["webview"]
  >(d?: { element?: "webview" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["svg"]
  >(d?: { element?: "svg" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["animate"]
  >(d?: { element?: "animate" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["animateTransform"]
  >(
    d?: { element?: "animateTransform" } & D
  ): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["circle"]
  >(d?: { element?: "circle" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["clipPath"]
  >(d?: { element?: "clipPath" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["defs"]
  >(d?: { element?: "defs" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["desc"]
  >(d?: { element?: "desc" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["ellipse"]
  >(d?: { element?: "ellipse" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feBlend"]
  >(d?: { element?: "feBlend" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feColorMatrix"]
  >(d?: { element?: "feColorMatrix" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feComponentTransfer"]
  >(
    d?: { element?: "feComponentTransfer" } & D
  ): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feComposite"]
  >(d?: { element?: "feComposite" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feConvolveMatrix"]
  >(
    d?: { element?: "feConvolveMatrix" } & D
  ): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feDiffuseLighting"]
  >(
    d?: { element?: "feDiffuseLighting" } & D
  ): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feDisplacementMap"]
  >(
    d?: { element?: "feDisplacementMap" } & D
  ): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feDistantLight"]
  >(
    d?: { element?: "feDistantLight" } & D
  ): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feFlood"]
  >(d?: { element?: "feFlood" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feFuncA"]
  >(d?: { element?: "feFuncA" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feFuncB"]
  >(d?: { element?: "feFuncB" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feFuncG"]
  >(d?: { element?: "feFuncG" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feFuncR"]
  >(d?: { element?: "feFuncR" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feGaussianBlur"]
  >(
    d?: { element?: "feGaussianBlur" } & D
  ): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feImage"]
  >(d?: { element?: "feImage" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feMerge"]
  >(d?: { element?: "feMerge" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feMergeNode"]
  >(d?: { element?: "feMergeNode" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feMorphology"]
  >(d?: { element?: "feMorphology" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feOffset"]
  >(d?: { element?: "feOffset" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["fePointLight"]
  >(d?: { element?: "fePointLight" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feSpecularLighting"]
  >(
    d?: { element?: "feSpecularLighting" } & D
  ): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feSpotLight"]
  >(d?: { element?: "feSpotLight" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feTile"]
  >(d?: { element?: "feTile" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feTurbulence"]
  >(d?: { element?: "feTurbulence" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["filter"]
  >(d?: { element?: "filter" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["foreignObject"]
  >(d?: { element?: "foreignObject" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["g"]
  >(d?: { element?: "g" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["image"]
  >(d?: { element?: "image" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["line"]
  >(d?: { element?: "line" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["linearGradient"]
  >(
    d?: { element?: "linearGradient" } & D
  ): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["marker"]
  >(d?: { element?: "marker" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["mask"]
  >(d?: { element?: "mask" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["metadata"]
  >(d?: { element?: "metadata" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["path"]
  >(d?: { element?: "path" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["pattern"]
  >(d?: { element?: "pattern" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["polygon"]
  >(d?: { element?: "polygon" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["polyline"]
  >(d?: { element?: "polyline" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["radialGradient"]
  >(
    d?: { element?: "radialGradient" } & D
  ): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["rect"]
  >(d?: { element?: "rect" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["stop"]
  >(d?: { element?: "stop" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["switch"]
  >(d?: { element?: "switch" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["symbol"]
  >(d?: { element?: "symbol" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["text"]
  >(d?: { element?: "text" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["textPath"]
  >(d?: { element?: "textPath" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["tspan"]
  >(d?: { element?: "tspan" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["use"]
  >(d?: { element?: "use" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["view"]
  >(d?: { element?: "view" } & Partial<D>): (p: BoxlProps<P, T, E>) => JSX.Element;
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