import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("SUBSCRIBE TO BASIC");
    });

    test("after creation span should be displayed", () => {
        const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC"/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    });

    test("after creation input shouldn't be displayed", () => {
        const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC"/>);
        const root = component.root;
        expect(() => {
            let input = root.findByType("input");
        }).toThrow();
    });

    test("after creation span should be contains correct status", () => {
        const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC"/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe("SUBSCRIBE TO BASIC");
    });

    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC"/>);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe("SUBSCRIBE TO BASIC");
    });

    test("callback should be called", () => {
        const mockCallBack = jest.fn();
        const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC" updateStatus={mockCallBack}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode()
        expect(mockCallBack.mock.calls.length).toBe(1);
    });
});