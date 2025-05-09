import React, { forwardRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const CommonCheckbox = forwardRef(
  ({ label, checked, onChange, disabled = false }, ref) => {
    const handlePress = () => {
      if (!disabled) {
        onChange(!checked);
      }
    };

    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={handlePress}
          disabled={disabled}
          ref={ref}
          style={[
            styles.checkbox,
            disabled && styles.disabledCheckbox,
            checked && styles.checkedCheckbox,
          ]}
        >
          {checked && (
            <Svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <Path
                d="M3 8L6 11L11 3.5"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          )}
        </TouchableOpacity>
        <Text
          style={[
            styles.label,
            disabled ? styles.disabledLabel : styles.enabledLabel
          ]}
        >
          {label}
        </Text>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#D1D5DB', 
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedCheckbox: {
    backgroundColor: '#047857', 
    borderColor: '#047857',
  },
  disabledCheckbox: {
    backgroundColor: '#E5E7EB', 
    borderColor: '#9CA3AF',
  },
  label: {
    fontSize: 14,
    lineHeight: 18,
  },
  enabledLabel: {
    color: '#111827', 
  },
  disabledLabel: {
    color: '#9CA3AF', 
  },
});

CommonCheckbox.displayName = 'CommonCheckbox';

export default CommonCheckbox;
