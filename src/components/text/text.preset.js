import { colors } from "../../theme/colors";
import { typography } from "../../theme/typography";

const BASE = {
    fontFamily: typography.primary,
    fontSize: 16,
    color: colors.black
}

const BOLD = {
    fontFamily: typography.bold,
    color: colors.black
}

export const presets = {
    default: BASE,
    bold: BOLD,
    h1: {
        ...BOLD,
        fontSize: 32,
    },
    h2: {
        ...BOLD,
        fontSize: 28,
    },
    h3: {
        ...BOLD,
        fontSize: 24,
    },
    h4: {
        ...BOLD,
        fontSize: 20,
    },
    h5: {
        ...BOLD,
        fontSize: 18,
    },
    small: {
        ...BASE,
        fontSize: 16,
    }
}