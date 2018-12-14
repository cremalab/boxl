import React from "react";
import { BoxlComponent } from "../BoxlComponent";
import { BoxlProps, BoxlPropsPartial } from "../types";

// tslint:disable

export interface Boxl<T = {}> {
  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["div"]
  >(d?: { element?: undefined } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["a"]
  >(d?: { element?: "a" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["abbr"]
  >(d?: { element?: "abbr" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["address"]
  >(d?: { element?: "address" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["area"]
  >(d?: { element?: "area" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["article"]
  >(d?: { element?: "article" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["aside"]
  >(d?: { element?: "aside" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["audio"]
  >(d?: { element?: "audio" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["b"]
  >(d?: { element?: "b" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["base"]
  >(d?: { element?: "base" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["bdi"]
  >(d?: { element?: "bdi" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["bdo"]
  >(d?: { element?: "bdo" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["big"]
  >(d?: { element?: "big" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["blockquote"]
  >(d?: { element?: "blockquote" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["body"]
  >(d?: { element?: "body" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["br"]
  >(d?: { element?: "br" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["button"]
  >(d?: { element?: "button" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["canvas"]
  >(d?: { element?: "canvas" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["caption"]
  >(d?: { element?: "caption" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["cite"]
  >(d?: { element?: "cite" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["code"]
  >(d?: { element?: "code" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["col"]
  >(d?: { element?: "col" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["colgroup"]
  >(d?: { element?: "colgroup" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["data"]
  >(d?: { element?: "data" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["datalist"]
  >(d?: { element?: "datalist" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["dd"]
  >(d?: { element?: "dd" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["del"]
  >(d?: { element?: "del" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["details"]
  >(d?: { element?: "details" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["dfn"]
  >(d?: { element?: "dfn" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["dialog"]
  >(d?: { element?: "dialog" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["div"]
  >(d?: { element?: "div" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["dl"]
  >(d?: { element?: "dl" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["dt"]
  >(d?: { element?: "dt" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["em"]
  >(d?: { element?: "em" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["embed"]
  >(d?: { element?: "embed" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["fieldset"]
  >(d?: { element?: "fieldset" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["figcaption"]
  >(d?: { element?: "figcaption" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["figure"]
  >(d?: { element?: "figure" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["footer"]
  >(d?: { element?: "footer" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["form"]
  >(d?: { element?: "form" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["h1"]
  >(d?: { element?: "h1" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["h2"]
  >(d?: { element?: "h2" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["h3"]
  >(d?: { element?: "h3" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["h4"]
  >(d?: { element?: "h4" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["h5"]
  >(d?: { element?: "h5" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["h6"]
  >(d?: { element?: "h6" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["head"]
  >(d?: { element?: "head" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["header"]
  >(d?: { element?: "header" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["hgroup"]
  >(d?: { element?: "hgroup" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["hr"]
  >(d?: { element?: "hr" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["html"]
  >(d?: { element?: "html" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["i"]
  >(d?: { element?: "i" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["iframe"]
  >(d?: { element?: "iframe" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["img"]
  >(d?: { element?: "img" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["input"]
  >(d?: { element?: "input" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["ins"]
  >(d?: { element?: "ins" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["kbd"]
  >(d?: { element?: "kbd" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["keygen"]
  >(d?: { element?: "keygen" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["label"]
  >(d?: { element?: "label" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["legend"]
  >(d?: { element?: "legend" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["li"]
  >(d?: { element?: "li" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["link"]
  >(d?: { element?: "link" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["main"]
  >(d?: { element?: "main" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["map"]
  >(d?: { element?: "map" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["mark"]
  >(d?: { element?: "mark" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["menu"]
  >(d?: { element?: "menu" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["menuitem"]
  >(d?: { element?: "menuitem" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["meta"]
  >(d?: { element?: "meta" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["meter"]
  >(d?: { element?: "meter" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["nav"]
  >(d?: { element?: "nav" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["noindex"]
  >(d?: { element?: "noindex" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["noscript"]
  >(d?: { element?: "noscript" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["object"]
  >(d?: { element?: "object" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["ol"]
  >(d?: { element?: "ol" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["optgroup"]
  >(d?: { element?: "optgroup" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["option"]
  >(d?: { element?: "option" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["output"]
  >(d?: { element?: "output" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["p"]
  >(d?: { element?: "p" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["param"]
  >(d?: { element?: "param" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["picture"]
  >(d?: { element?: "picture" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["pre"]
  >(d?: { element?: "pre" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["progress"]
  >(d?: { element?: "progress" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["q"]
  >(d?: { element?: "q" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["rp"]
  >(d?: { element?: "rp" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["rt"]
  >(d?: { element?: "rt" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["ruby"]
  >(d?: { element?: "ruby" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["s"]
  >(d?: { element?: "s" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["samp"]
  >(d?: { element?: "samp" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["script"]
  >(d?: { element?: "script" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["section"]
  >(d?: { element?: "section" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["select"]
  >(d?: { element?: "select" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["small"]
  >(d?: { element?: "small" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["source"]
  >(d?: { element?: "source" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["span"]
  >(d?: { element?: "span" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["strong"]
  >(d?: { element?: "strong" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["style"]
  >(d?: { element?: "style" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["sub"]
  >(d?: { element?: "sub" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["summary"]
  >(d?: { element?: "summary" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["sup"]
  >(d?: { element?: "sup" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["table"]
  >(d?: { element?: "table" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["tbody"]
  >(d?: { element?: "tbody" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["td"]
  >(d?: { element?: "td" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["textarea"]
  >(d?: { element?: "textarea" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["tfoot"]
  >(d?: { element?: "tfoot" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["th"]
  >(d?: { element?: "th" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["thead"]
  >(d?: { element?: "thead" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["time"]
  >(d?: { element?: "time" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["title"]
  >(d?: { element?: "title" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["tr"]
  >(d?: { element?: "tr" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["track"]
  >(d?: { element?: "track" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["u"]
  >(d?: { element?: "u" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["ul"]
  >(d?: { element?: "ul" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["var"]
  >(d?: { element?: "var" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["video"]
  >(d?: { element?: "video" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["wbr"]
  >(d?: { element?: "wbr" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["webview"]
  >(d?: { element?: "webview" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["svg"]
  >(d?: { element?: "svg" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["animate"]
  >(d?: { element?: "animate" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

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
  >(d?: { element?: "circle" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["clipPath"]
  >(d?: { element?: "clipPath" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["defs"]
  >(d?: { element?: "defs" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["desc"]
  >(d?: { element?: "desc" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["ellipse"]
  >(d?: { element?: "ellipse" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feBlend"]
  >(d?: { element?: "feBlend" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feColorMatrix"]
  >(d?: { element?: "feColorMatrix" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

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
  >(d?: { element?: "feComposite" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

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
  >(d?: { element?: "feFlood" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feFuncA"]
  >(d?: { element?: "feFuncA" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feFuncB"]
  >(d?: { element?: "feFuncB" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feFuncG"]
  >(d?: { element?: "feFuncG" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feFuncR"]
  >(d?: { element?: "feFuncR" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

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
  >(d?: { element?: "feImage" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feMerge"]
  >(d?: { element?: "feMerge" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feMergeNode"]
  >(d?: { element?: "feMergeNode" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feMorphology"]
  >(d?: { element?: "feMorphology" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feOffset"]
  >(d?: { element?: "feOffset" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["fePointLight"]
  >(d?: { element?: "fePointLight" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

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
  >(d?: { element?: "feSpotLight" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feTile"]
  >(d?: { element?: "feTile" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["feTurbulence"]
  >(d?: { element?: "feTurbulence" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["filter"]
  >(d?: { element?: "filter" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["foreignObject"]
  >(d?: { element?: "foreignObject" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["g"]
  >(d?: { element?: "g" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["image"]
  >(d?: { element?: "image" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["line"]
  >(d?: { element?: "line" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

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
  >(d?: { element?: "marker" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["mask"]
  >(d?: { element?: "mask" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["metadata"]
  >(d?: { element?: "metadata" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["path"]
  >(d?: { element?: "path" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["pattern"]
  >(d?: { element?: "pattern" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["polygon"]
  >(d?: { element?: "polygon" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["polyline"]
  >(d?: { element?: "polyline" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

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
  >(d?: { element?: "rect" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["stop"]
  >(d?: { element?: "stop" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["switch"]
  >(d?: { element?: "switch" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["symbol"]
  >(d?: { element?: "symbol" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["text"]
  >(d?: { element?: "text" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["textPath"]
  >(d?: { element?: "textPath" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["tspan"]
  >(d?: { element?: "tspan" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["use"]
  >(d?: { element?: "use" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;

  <
    P,
    D extends BoxlPropsPartial<P, T, E> = BoxlPropsPartial<P, T, E>,
    E = JSX.IntrinsicElements["view"]
  >(d?: { element?: "view" } & D): (p: BoxlProps<P, T, E>) => JSX.Element;
}

export const boxl: Boxl = <
  P,
  E = JSX.IntrinsicElements["div"],
  D extends BoxlPropsPartial<P, {}, E> = BoxlPropsPartial<P, {}, E>
>(d?: D) => {
  return function Boxl(p: BoxlProps<P, {}, E>) {
    return <BoxlComponent {...d} {...p} />;
  };
};