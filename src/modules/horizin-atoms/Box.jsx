import styled from '@emotion/styled';
import css, {get} from '@styled-system/css';
import {createShouldForwardProp} from '@styled-system/should-forward-prop';
import space from '@styled-system/space';
import color from '@styled-system/color';

const shouldForwardProp = createShouldForwardProp([
  ...space.propNames,
  ...color.propNames,
]);

const sx = props => css(props.sx)(props.theme);
const base = props => css(props.__css)(props.theme);

const variant = ({theme, variant, __themeKey = 'variants'}) =>
  css(get(theme, __themeKey + '.' + variant, get(theme, variant)));

const shorthand = ({theme, ...props}) =>
  Object.keys(props).map(selector =>
    css(get(theme, `effects.common.${selector}`)),
  );

const variants = ({theme, variants, __variantsKey = 'variants'}) =>
  Array.isArray(variants)
    ? variants.map(variant =>
        css(get(theme, __variantsKey + '.' + variant, get(theme, variant))),
      )
    : null;
const variantsShorthand = ({theme, __effectKey = 'common', ...props}) =>
  Object.keys(props).map(selector =>
    css(get(theme, `effects.${__effectKey}.${selector}`)),
  );

const gradient = ({theme, gradient, direction = 0}) => {
  return css({
    backgroundImage: `linear-gradient(${direction}deg, ${get(
      theme,
      `gradients.${gradient}`,
    )})`,
  });
};

const effects = ({theme, effects, __effectKey = 'effects'}) =>
  Array.isArray(effects)
    ? effects.map(effect =>
        css(get(theme, __effectKey + '.' + effect, get(theme, effect))),
      )
    : null;

export const Box = styled('div', {
  shouldForwardProp,
})(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
    position: 'relative',
  },
  gradient,
  variants,
  variant,
  effects,
  shorthand,
  variantsShorthand,
  gradient,
  space,
  color,
  base,
  sx,
  props => props.css,
);

export default Box;
