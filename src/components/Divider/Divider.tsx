import React from 'react';
import block from 'bem-cn-lite';

import {DividerProps} from '../../models';

import './Divider.scss';

const b = block('divider-block');

const Divider: React.FunctionComponent<DividerProps> = ({size = 'm', border}) => (
    <div className={b({size, border})} />
);

export default Divider;
