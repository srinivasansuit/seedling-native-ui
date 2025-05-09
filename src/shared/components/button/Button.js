import React, { forwardRef } from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, Dimensions } from 'react-native';

const VARIANT_STYLES = {
  primary:      { bg: '#10B981', text: '#FFFFFF', pressed: '#059669' },
  secondary:    { bg: '#E5E7EB', text: '#1F2937', pressed: '#D1D5DB' },
  tertiary:     { bg: 'transparent', text: '#4B5563' },
  destructive:  { bg: '#EF4444', text: '#FFFFFF', pressed: '#DC2626' },
  link:         { bg: 'transparent', text: '#10B981' },
  icon:         { bg: 'transparent', text: '#1F2937' },
};

const SIZE_STYLES = {
  sm: { paddingVertical: 8,  paddingHorizontal: 12, fontSize: 12 },
  md: { paddingVertical: 12, paddingHorizontal: 16, fontSize: 14 },
  lg: { paddingVertical: 16, paddingHorizontal: 20, fontSize: 16 },
  xl: { paddingVertical: 20, paddingHorizontal: 24, fontSize: 18 },
};

const screenWidth = Dimensions.get('screen').width;

const Button = forwardRef(
  ({ variant = 'primary', size = 'md', isLoading, children, style, disabled, ...props }, ref) => {
    const v = VARIANT_STYLES[variant] || VARIANT_STYLES.primary;
    const s = SIZE_STYLES[size] || SIZE_STYLES.md;
    const isDisabled = isLoading || disabled;

    return (
      <TouchableOpacity
        ref={ref}
        activeOpacity={0.7}
        disabled={isDisabled}
        style={[
          styles.base,
          { backgroundColor: v.bg, opacity: isDisabled ? 0.5 : 1 },
          variant === 'icon' && styles.icon,
          s,
          style,
        ]}
        {...props}
      >
        {isLoading ? (
          <ActivityIndicator color={v.text} />
        ) : (
          <Text style={[styles.text, { color: v.text, fontSize: s.fontSize }, variant === 'link' && styles.link]}>
            {children}
          </Text>
        )}
      </TouchableOpacity>
    );
  }
);

const styles = StyleSheet.create({
  base: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width:screenWidth
  },
  text: {
    fontWeight: '500',
  },
  icon: {
    borderRadius: 9999,
    padding: 8,
  },
  link: {
    textDecorationLine: 'underline',
  },
});

Button.displayName = 'Button';
export default Button;
