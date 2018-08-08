import React from 'react';

import { iconStyle } from './styles';

export default ({ alt = "icon", src }) => (
    <img src={`/${src}`} alt={alt} style={iconStyle} />
);