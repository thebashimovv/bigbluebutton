import React from 'react';
import BannerComponent from './component';
import { layoutSelectInput, layoutDispatch } from '../layout/context';
import { useStorageKey } from '../../services/storage/hooks';

const BannerContainer = (props) => {
  const bannerBar = layoutSelectInput((i) => i.bannerBar);
  const { hasBanner } = bannerBar;
  const layoutContextDispatch = layoutDispatch();
  const color = useStorageKey('bannerColor') || '#0174AA';
  const text = useStorageKey('bannerText') || '';

  return <BannerComponent {...{ hasBanner, layoutContextDispatch, color, text, ...props }} />;
};

export default BannerContainer;
