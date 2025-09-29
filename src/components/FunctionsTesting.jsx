// FunctionsTesting.jsx
// Quick visual test for every component & effect exported
// from SolarPanelAnimations.jsx

import SolarShowcase from './SolarAnimation';

import React from 'react';
import {
    IdlePanel,
    PulsePanel,
    RotatePanel,
    SunTrackPanel,
    DataFlowPanel,
    RipplePanel,
    ChargePanel,
    FlipPanel,
    SparkPanel,
    EfficiencyPanel,
    Glow,
    ScanLine,
    DataLabel,
    PanelTilt,
    Shadow,
    DepthGlint,
} from './SolarPanelAnimations';

export default function FunctionsTesting() {
    const styles = {
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))',
            gap: 32,
            padding: 32,
            justifyItems: 'center',
            background: '#0d0d0f',
        },
        card: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
            color: '#0f9',
            fontSize: 12,
            fontFamily: 'monospace',
        },
    };

    return (
        <div style={styles.grid}>
            {/* 10 animations ------------------------------------------------ */}
            <div style={styles.card}>
                <IdlePanel size={120} color="#00e5ff" />
                IdlePanel
            </div>

            <div style={styles.card}>
                <PulsePanel size={120} color="#00ff90" />
                PulsePanel
            </div>

            <div style={styles.card}>
                <RotatePanel size={120} />
                RotatePanel
            </div>

            <div style={styles.card}>
                <SunTrackPanel size={120} />
                SunTrackPanel
            </div>

            <div style={styles.card}>
                <DataFlowPanel size={120} />
                DataFlowPanel
            </div>

            <div style={styles.card}>
                <RipplePanel size={120} />
                RipplePanel
            </div>

            <div style={styles.card}>
                <ChargePanel size={120} />
                ChargePanel
            </div>

            <div style={styles.card}>
                <FlipPanel size={120} />
                FlipPanel
            </div>

            <div style={styles.card}>
                <SparkPanel size={120} />
                SparkPanel
            </div>

            <div style={styles.card}>
                <EfficiencyPanel size={120} />
                EfficiencyPanel
            </div>

            {/* 2-D & 3-D effect combinations ------------------------------- */}
            <div style={styles.card}>
                <Glow color="#00ff90" size={20}>
                    <IdlePanel size={110} />
                </Glow>
                Glow
            </div>

            <div style={styles.card}>
                <ScanLine opacity={0.4}>
                    <DataFlowPanel size={110} />
                </ScanLine>
                ScanLine
            </div>

            <div style={styles.card}>
                <DataLabel text="100 W">
                    <ChargePanel size={110} />
                </DataLabel>
                DataLabel
            </div>

            <div style={styles.card}>
                <PanelTilt rx={15} ry={-25}>
                    <PulsePanel size={110} />
                </PanelTilt>
                PanelTilt
            </div>

            <div style={styles.card}>
                <Shadow offset={10} blur={15}>
                    <RotatePanel size={110} />
                </Shadow>
                Shadow
            </div>

            <div style={styles.card}>
                <DepthGlint>
                    <EfficiencyPanel size={110} />
                </DepthGlint>
                DepthGlint
            </div>
            {/* <SolarShowcase /> */}
            {/* All-in-one mega combo --------------------------------------- */}
            <div style={{ ...styles.card, gridColumn: '1 / -1' }}>
                <Shadow offset={12} blur={18}>
                    <Glow color="#00ff90" size={25}>
                        <PanelTilt rx={12} ry={-18}>
                            <DataLabel text="SolarTile">
                                <DepthGlint>
                                    <SunTrackPanel size={140} />
                                </DepthGlint>
                            </DataLabel>
                        </PanelTilt>
                    </Glow>
                </Shadow>
                Combo of all effects
            </div>
        </div>
    );
}

