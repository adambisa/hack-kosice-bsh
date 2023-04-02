import { color_sequence } from "./color_sequence";
import { full_color } from "./full_color";
import { shipper } from "./shipper";

export function full_change(length = 500, cooldown = 10) {
  const sequence = new Array();
  color_sequence(length).forEach((elm) => {
    full_color(elm, false)
      .then((elm) => {
        sequence.push(elm);
      })
      .catch(() => {});
  });

  shipper(sequence, cooldown);
}
