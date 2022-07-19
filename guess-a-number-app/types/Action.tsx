type Action = {
    title: string;
    action: (...args: any[]) => any;
}

export default Action;
