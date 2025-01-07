import { buildConfig } from "payload";

export default buildConfig({
    serverURL: process.env.NEXT_PUBLIC_URL || '',
    collections : [],
    routes : { 
        admin: "/shell"
    },
    admin: {},
    editor: slateEditor({}),
    db: mongooseAdapter()
})