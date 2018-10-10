/* @flow */
/**
 * Helper to normalize a theme variable (defined in ems) against the applied
 * fontSize (also defined in ems), so that the resulting value renders correctly
 */
export default function getNormalizedValue(
  value: string | number | null,
  base: string | number | null
) {
  return `${parseFloat(value) / parseFloat(base)}em`;
}
