// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: rbPHTCCgxa1NtQh9SvuYvu
// Component: pxvQuH8cjTN_Y
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import MenuButton from "../../MenuButton"; // plasmic-import: pJaTTuLIzYklDL/component
import LinkButton from "../../LinkButton"; // plasmic-import: dlrqhj701dimA/component
import IconLink from "../../IconLink"; // plasmic-import: u1zH5QXSmcg4i/component
import { useScreenVariants as useScreenVariants_1MD7ZHfJhi7DYn } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 1mD7zHfJHI7dYN/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_furn_e_commerce.module.css"; // plasmic-import: rbPHTCCgxa1NtQh9SvuYvu/projectcss
import sty from "./PlasmicHeader.module.css"; // plasmic-import: pxvQuH8cjTN_Y/css
import SearchIcon from "./icons/PlasmicIcon__Search"; // plasmic-import: T-nPFRR3cyQbzV/icon
import CogIcon from "./icons/PlasmicIcon__Cog"; // plasmic-import: FScUavZ9h_j_MC/icon
import ShoppingCartIcon from "./icons/PlasmicIcon__ShoppingCart"; // plasmic-import: C6Vuon0-RgWq-W/icon
import plasmic4XvZcLVnY6D2Nj from "./images/plasmic.png"; // plasmic-import: 4xvZcLVnY6d2NJ/picture

export const PlasmicHeader__VariantProps = new Array("expanded");

export const PlasmicHeader__ArgProps = new Array();

function PlasmicHeader__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = args;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_1MD7ZHfJhi7DYn()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root,
        { [sty.rootexpanded]: hasVariant(variants, "expanded", "expanded") }
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__cuJry)}
      >
        {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
          <MenuButton
            data-plasmic-name={"menuButton"}
            data-plasmic-override={overrides.menuButton}
            className={classNames("__wab_instance", sty.menuButton, {
              [sty.menuButtonexpanded]: hasVariant(
                variants,
                "expanded",
                "expanded"
              )
            })}
            expanded={
              hasVariant(variants, "expanded", "expanded") &&
              hasVariant(globalVariants, "screen", "mobile")
                ? true
                : undefined
            }
          />
        ) : null}

        <a
          data-plasmic-name={"link"}
          data-plasmic-override={overrides.link}
          className={classNames(projectcss.all, projectcss.a, sty.link)}
          href={"/"}
        >
          <p.PlasmicImg
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"none"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"100%"}
            src={{
              src: plasmic4XvZcLVnY6D2Nj,
              fullWidth: 3216,
              fullHeight: 624,
              aspectRatio: undefined
            }}
          />
        </a>

        {(
          hasVariant(variants, "expanded", "expanded") &&
          hasVariant(globalVariants, "screen", "mobile")
            ? true
            : hasVariant(globalVariants, "screen", "mobile")
            ? true
            : true
        ) ? (
          <div
            className={classNames(projectcss.all, sty.freeBox__cf07X, {
              [sty.freeBoxexpanded__cf07XtUvqd]: hasVariant(
                variants,
                "expanded",
                "expanded"
              )
            })}
          >
            <LinkButton
              className={classNames("__wab_instance", sty.linkButton__sTvR)}
              href={"/#home"}
              size={"small"}
              text={"Home"}
              type={"blankGray"}
            />

            <LinkButton
              className={classNames("__wab_instance", sty.linkButton__kwIgE)}
              href={"/#new-arrival"}
              size={"small"}
              text={"New Arrival"}
              type={"blankGray"}
            />

            <LinkButton
              className={classNames("__wab_instance", sty.linkButton__jKdHb)}
              href={"/#features"}
              size={"small"}
              text={"Features"}
              type={"blankGray"}
            />

            <LinkButton
              className={classNames("__wab_instance", sty.linkButton__bCa6Y)}
              href={"/#blog"}
              size={"small"}
              text={"Blog"}
              type={"blankGray"}
            />

            <LinkButton
              className={classNames("__wab_instance", sty.linkButton__p8Alh)}
              href={"/#contact"}
              size={"small"}
              text={"Contact"}
              type={"blankGray"}
            />
          </div>
        ) : null}

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__uNs1)}
        >
          <IconLink
            className={classNames("__wab_instance", sty.iconLink__zJAt)}
            icon={
              <SearchIcon
                className={classNames(projectcss.all, sty.svg__dw0Sb)}
                role={"img"}
              />
            }
          />

          <IconLink
            className={classNames("__wab_instance", sty.iconLink__dTybs)}
            icon={
              <CogIcon
                className={classNames(projectcss.all, sty.svg__aiDvq)}
                role={"img"}
              />
            }
          />

          <IconLink
            className={classNames("__wab_instance", sty.iconLink__ekb6)}
            icon={
              <ShoppingCartIcon
                className={classNames(projectcss.all, sty.svg__gEwQd)}
                role={"img"}
              />
            }
          />
        </p.Stack>
      </p.Stack>

      {(
        hasVariant(variants, "expanded", "expanded") &&
        hasVariant(globalVariants, "screen", "mobile")
          ? true
          : true
      ) ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__xcmQd, {
            [sty.freeBoxexpanded__xcmQdtUvqd]: hasVariant(
              variants,
              "expanded",
              "expanded"
            )
          })}
        >
          <LinkButton
            className={classNames("__wab_instance", sty.linkButton__vePsD)}
            text={"Home"}
            type={"blankGray"}
          />

          <LinkButton
            className={classNames("__wab_instance", sty.linkButton__alMsl)}
            text={"New Arrival"}
            type={"blankGray"}
          />

          <LinkButton
            className={classNames("__wab_instance", sty.linkButton__fQtcZ)}
            text={"Features"}
            type={"blankGray"}
          />

          <LinkButton
            className={classNames("__wab_instance", sty.linkButton__v4IMg)}
            text={"Blog"}
            type={"blankGray"}
          />

          <LinkButton
            className={classNames("__wab_instance", sty.linkButton___6MFCn)}
            text={"Contact"}
            type={"blankGray"}
          />
        </div>
      ) : null}
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "menuButton", "link", "img"],
  menuButton: ["menuButton"],
  link: ["link", "img"],
  img: ["img"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHeader__ArgProps,
          internalVariantPropNames: PlasmicHeader__VariantProps
        }),

      [props, nodeName]
    );

    return PlasmicHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader";
  } else {
    func.displayName = `PlasmicHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader = Object.assign(
  // Top-level PlasmicHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    menuButton: makeNodeComponent("menuButton"),
    link: makeNodeComponent("link"),
    img: makeNodeComponent("img"),
    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps
  }
);

export default PlasmicHeader;
/* prettier-ignore-end */