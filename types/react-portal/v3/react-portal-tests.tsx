// Example from https://github.com/tajo/react-portal
import * as React from "react";
import * as Portal from "react-portal";

export default class App extends React.Component {
    render() {
        const button1 = <button>Open portal with pseudo modal</button>;

        // @ts-expect-error
        <Portal />;

        return (
            <div>
                <Portal
                    isOpened={false}
                    openByClickOn={button1}
                    closeOnEsc
                    closeOnOutsideClick
                    onOpen={(node: HTMLDivElement) => {}}
                    beforeClose={(node: HTMLDivElement, resetPortalState) => resetPortalState()}
                    onClose={() => {}}
                    onUpdate={() => {}}
                >
                    <PseudoModal>
                        <h2>Pseudo Modal</h2>
                        <p>This react component is appended to the document body.</p>
                    </PseudoModal>
                </Portal>
            </div>
        );
    }
}

export class PseudoModal extends React.Component<{ children?: React.ReactNode; closePortal?(): void }> {
    render() {
        return (
            <div>
                {this.props.children}
                <p>
                    <button onClick={this.props.closePortal}>Close this</button>
                </p>
            </div>
        );
    }
}

<App />;
