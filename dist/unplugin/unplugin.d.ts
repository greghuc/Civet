import { type TransformResult, createUnplugin } from 'unplugin';
import { type ParseOptions } from '@danielx/civet';
export type PluginOptions = {
    implicitExtension?: boolean;
    outputExtension?: string;
    transformOutput?: (code: string, id: string) => TransformResult | Promise<TransformResult>;
    emitDeclaration?: boolean;
    declarationExtension?: string;
    typecheck?: boolean | string;
    ts?: 'civet' | 'esbuild' | 'tsc' | 'preserve';
    /** @deprecated Use "ts" option instead */
    js?: boolean;
    /** @deprecated Use "emitDeclaration" instead */
    dts?: boolean;
    /** Number of parallel threads to compile with (Node only) */
    threads?: number;
    /** Cache compilation results based on file mtime (useful for serve or watch mode) */
    cache?: boolean;
    /** config filename, or false/null to not look for default config file */
    config?: string | false | null;
    parseOptions?: ParseOptions;
};
export declare function slash(p: string): string;
export declare const rawPlugin: Parameters<typeof createUnplugin<PluginOptions>>[0];
declare var unplugin: import("unplugin").UnpluginInstance<PluginOptions, boolean>;
export default unplugin;
