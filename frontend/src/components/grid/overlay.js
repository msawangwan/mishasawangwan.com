import React from 'react';
import './overlay.css';

export const TrackOverlay = props =>
    <React.Fragment>
        {Array.from(
            { 'length': props.columns },
            (j, i) => i).map(
                n =>
                    <div
                        key={`track-overlay-column-${n}`}
                        className={`${props.colClassName ? props.colClassName : ''}`}
                        style={{
                            'gridArea': `1 / ${n + 1} / ${props.rows + 1} / ${n + 2}`,
                            'border': '0.1em dashed blue',
                        }}>
                    </div>
            )}
        {Array.from(
            { 'length': props.rows },
            (j, i) => i).map(
                n =>
                    <div
                        key={`track-overlay-row-${n}`}
                        className={`${props.rowClassName ? props.rowClassName : ''}`}
                        style={{
                            'gridArea': `${n + 1} / 1 / ${n + 2} / ${props.columns + 1}`,
                            'border': '0.1em dotted blue',
                        }}>
                    </div>
            )}
    </React.Fragment>