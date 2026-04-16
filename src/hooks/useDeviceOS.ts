import { useState, useEffect } from 'react';

export type DeviceOS = 'mac' | 'windows' | 'linux' | 'android' | 'ios' | 'unknown';

export function useDeviceOS() {
  const [os, setOs] = useState<DeviceOS>('unknown');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    
    // Check mobile devices first
    if (/android/i.test(userAgent)) {
      setOs('android');
      setIsMobile(true);
    } else if (/iphone|ipad|ipod/i.test(userAgent) || 
              (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
      setOs('ios');
      setIsMobile(true);
    } else if (/mac/i.test(userAgent)) {
      setOs('mac');
      setIsMobile(false);
    } else if (/win/i.test(userAgent)) {
      setOs('windows');
      setIsMobile(false);
    } else if (/linux/i.test(userAgent)) {
      setOs('linux');
      setIsMobile(false);
    }
  }, []);

  const getShortcutText = () => {
    if (isMobile) return 'Tap Search';
    if (os === 'mac') return '⌘K';
    return 'Ctrl+K';
  };

  const getShortcutKey = () => {
    if (os === 'mac') return '⌘';
    return 'Ctrl';
  };

  return { os, isMobile, getShortcutText, getShortcutKey };
}
