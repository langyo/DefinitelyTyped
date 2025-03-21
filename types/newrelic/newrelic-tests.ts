/// <reference types="node" />
import * as newrelic from "newrelic";

const config: newrelic.Config = {
    app_name: "My Application",
    license_key: "f596af15a89ea28a6c15c689c09a5f8aFFFFNRAL",
    allow_all_headers: true,
    logging: {
        level: "info",
    },
    strip_exception_messages: {
        enabled: false,
    },
    api: {
        custom_attributes_enabled: true,
        custom_events_enabled: true,
        notice_error_enabled: true,
    },
    application_logging: {
        enabled: true,
        forwarding: {
            enabled: true,
        },
    },
};

newrelic.setTransactionName("foo"); // $ExpectType void

const trans = newrelic.getTransaction();
trans.ignore(); // $ExpectType void
trans.end(); // $ExpectType void
trans.end(() => {}); // $ExpectType void
trans.insertDistributedTraceHeaders({ test: "test" }); // $ExpectType void
trans.acceptDistributedTraceHeaders("Test", { test: "test" }); // $ExpectType void
trans.isSampled(); // $ExpectType boolean

newrelic.setDispatcher("foo"); // $ExpectType void
newrelic.setDispatcher("foo", "42"); // $ExpectType void

newrelic.setControllerName("foo", "GET"); // $ExpectType void

newrelic.addCustomAttribute("foo", "bar"); // $ExpectType void
newrelic.addCustomAttribute("foo", 42); // $ExpectType void
newrelic.addCustomAttributes({ foo: "bar", baz: "bang" }); // $ExpectType void
newrelic.addCustomAttributes({ foo: "bar", baz: 42 }); // $ExpectType void

newrelic.addCustomSpanAttribute("foo", "bar"); // $ExpectType void
newrelic.addCustomSpanAttribute("foo", 42); // $ExpectType void
newrelic.addCustomSpanAttributes({ foo: "bar", baz: "bang" }); // $ExpectType void
newrelic.addCustomSpanAttributes({ foo: "bar", baz: 42 }); // $ExpectType void

newrelic.noticeError(Error("Oh no!")); // $ExpectType void
newrelic.noticeError(Error("Oh no!"), { foo: "bar" }); // $ExpectType void
newrelic.noticeError(Error("Oh no!"), { foo: 42 }); // $ExpectType void
newrelic.noticeError(Error("Oh no!"), { foo: true }); // $ExpectType void
newrelic.noticeError(Error("Oh no!"), true); // $ExpectType void
newrelic.noticeError(Error("Oh no!"), false); // $ExpectType void
newrelic.noticeError(Error("Oh no!"), { foo: "bar" }, true); // $ExpectType void
newrelic.noticeError(Error("Oh no!"), { foo: 42 }, false); // $ExpectType void

newrelic.setErrorGroupCallback((errMetadata) => errMetadata["error.expected"] ? "Expected Error" : "Unexpected Error"); // $ExpectType void

newrelic.recordLogEvent({ message: "" }); // $ExpectType void
newrelic.recordLogEvent({ message: "", timestamp: 1 }); // $ExpectType void
newrelic.recordLogEvent({ message: "", error: new SyntaxError() }); // $ExpectType void

newrelic.addNamingRule("/user/customers/all/.*", "/user/customers/all"); // $ExpectType void
newrelic.addNamingRule(/\/user\/customers\/.*/, "/user/customers/:customer"); // $ExpectType void

newrelic.addIgnoringRule("^/items/[0-9]+$"); // $ExpectType void
newrelic.addIgnoringRule(/^[0-9]+$/); // $ExpectType void

newrelic.getBrowserTimingHeader(); // $ExpectType string
newrelic.getBrowserTimingHeader({ nonce: "foo" }); // $ExpectType string
newrelic.getBrowserTimingHeader({ hasToRemoveScriptWrapper: true }); // $ExpectType string
newrelic.getBrowserTimingHeader({ allowTransactionlessInjection: true }); // $ExpectType string
newrelic.getBrowserTimingHeader({ nonce: "foo", hasToRemoveScriptWrapper: true, allowTransactionlessInjection: true }); // $ExpectType string

newrelic.startSegment("foo", false, () => "bar"); // $ExpectType string
newrelic.startSegment("foo", false, () => "bar", () => "baz"); // $ExpectType string
newrelic.startSegment("foo", true, async () => "bar"); // $ExpectType Promise<string>

const wrappedFn = newrelic.createTracer("foo", (x: number) => {
    return x * x;
});
const wrappedResult: number = wrappedFn(42);

newrelic.startWebTransaction("/some/url/path", () => {
    const transaction = newrelic.getTransaction();
    setTimeout(() => {
        // do some work
        transaction.end();
    }, 100);
});

newrelic.startWebTransaction("/some/url/path", Promise.resolve(7)); // $ExpectType Promise<number>

newrelic.startBackgroundTransaction("Red October", foo => foo); // $ExpectType any
newrelic.startBackgroundTransaction("Red October", () => 7); // $ExpectType number
newrelic.startBackgroundTransaction("Red October", Promise.resolve(7)); // $ExpectType Promise<number>
newrelic.startBackgroundTransaction("Red October", "Subs", () => {
    const transaction = newrelic.getTransaction();
    setTimeout(() => {
        // do some work
        transaction.end();
    }, 100);
});

newrelic.endTransaction(); // $ExpectType void

newrelic.recordMetric("foo", 42); // $ExpectType void
newrelic.recordMetric("foo", {
    count: 10,
    total: 42,
    min: 1,
    max: 17,
    sumOfSquares: 60,
});

newrelic.incrementMetric("foo"); // $ExpectType void
newrelic.incrementMetric("foo", 42); // $ExpectType void

newrelic.recordCustomEvent("my_event", {
    foo: true,
    bar: 42,
    baz: "don't panic",
});

newrelic.instrument("foo", () => {}); // $ExpectType void
newrelic.instrumentDatastore("foo", () => {}, (err: Error) => {});
newrelic.instrumentLoadedModule("foo", () => {}); // $ExpectType boolean
newrelic.instrumentWebframework({
    moduleName: "foo",
    onRequire: () => {},
});
newrelic.instrumentMessages({
    moduleName: "foo",
    onRequire: () => {},
    onError: err => {
        const error: Error = err;
    },
});

newrelic.setUserID("user-id"); // $ExpectType void

newrelic.shutdown(); // $ExpectType void
newrelic.shutdown({ collectPendingData: true });
newrelic.shutdown({ timeout: 3000 });
newrelic.shutdown({ collectPendingData: true, timeout: 3000 });
newrelic.shutdown({ collectPendingData: true, timeout: 3000 }, err => {
    const error: Error | undefined = err;
});
newrelic.shutdown({ collectPendingData: true, timeout: 3000, waitForIdle: true });
newrelic.shutdown({ collectPendingData: true, timeout: 3000, waitForIdle: true }, err => {
    const error: Error | undefined = err;
});
newrelic.shutdown(err => {
    const error: Error | undefined = err;
});

newrelic.getLinkingMetadata();
newrelic.getLinkingMetadata(true);
newrelic.getTraceMetadata();

newrelic.setLambdaHandler(() => void 0); // $ExpectType () => undefined
newrelic.setLambdaHandler((event: unknown, context: unknown) => ({ statusCode: 200, body: "Hello!" })); // $ExpectType (event: unknown, context: unknown) => { statusCode: number; body: string; }
// @ts-expect-error
newrelic.setLambdaHandler({ some: "object" });

newrelic.obfuscateSql("SELECT * FROM USERS", "postgres"); // $ExpectType string
newrelic.withLlmCustomAttributes({ task: "question" }, () => void 0);

newrelic.setLlmTokenCountCallback(() => void 0);
