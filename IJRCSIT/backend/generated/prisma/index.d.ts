
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Thesis
 * 
 */
export type Thesis = $Result.DefaultSelection<Prisma.$ThesisPayload>
/**
 * Model Volume
 * 
 */
export type Volume = $Result.DefaultSelection<Prisma.$VolumePayload>
/**
 * Model Issues
 * 
 */
export type Issues = $Result.DefaultSelection<Prisma.$IssuesPayload>
/**
 * Model Author
 * 
 */
export type Author = $Result.DefaultSelection<Prisma.$AuthorPayload>
/**
 * Model Action
 * 
 */
export type Action = $Result.DefaultSelection<Prisma.$ActionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED',
  PENDING: 'PENDING',
  REVIEW: 'REVIEW'
};

export type Status = (typeof Status)[keyof typeof Status]


export const UserType: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type UserType = (typeof UserType)[keyof typeof UserType]

}

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type UserType = $Enums.UserType

export const UserType: typeof $Enums.UserType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.thesis`: Exposes CRUD operations for the **Thesis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Theses
    * const theses = await prisma.thesis.findMany()
    * ```
    */
  get thesis(): Prisma.ThesisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.volume`: Exposes CRUD operations for the **Volume** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Volumes
    * const volumes = await prisma.volume.findMany()
    * ```
    */
  get volume(): Prisma.VolumeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.issues`: Exposes CRUD operations for the **Issues** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Issues
    * const issues = await prisma.issues.findMany()
    * ```
    */
  get issues(): Prisma.IssuesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.author`: Exposes CRUD operations for the **Author** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Authors
    * const authors = await prisma.author.findMany()
    * ```
    */
  get author(): Prisma.AuthorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.action`: Exposes CRUD operations for the **Action** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Actions
    * const actions = await prisma.action.findMany()
    * ```
    */
  get action(): Prisma.ActionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Thesis: 'Thesis',
    Volume: 'Volume',
    Issues: 'Issues',
    Author: 'Author',
    Action: 'Action'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "thesis" | "volume" | "issues" | "author" | "action"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Thesis: {
        payload: Prisma.$ThesisPayload<ExtArgs>
        fields: Prisma.ThesisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ThesisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThesisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ThesisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThesisPayload>
          }
          findFirst: {
            args: Prisma.ThesisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThesisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ThesisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThesisPayload>
          }
          findMany: {
            args: Prisma.ThesisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThesisPayload>[]
          }
          create: {
            args: Prisma.ThesisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThesisPayload>
          }
          createMany: {
            args: Prisma.ThesisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ThesisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThesisPayload>[]
          }
          delete: {
            args: Prisma.ThesisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThesisPayload>
          }
          update: {
            args: Prisma.ThesisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThesisPayload>
          }
          deleteMany: {
            args: Prisma.ThesisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ThesisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ThesisUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThesisPayload>[]
          }
          upsert: {
            args: Prisma.ThesisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThesisPayload>
          }
          aggregate: {
            args: Prisma.ThesisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateThesis>
          }
          groupBy: {
            args: Prisma.ThesisGroupByArgs<ExtArgs>
            result: $Utils.Optional<ThesisGroupByOutputType>[]
          }
          count: {
            args: Prisma.ThesisCountArgs<ExtArgs>
            result: $Utils.Optional<ThesisCountAggregateOutputType> | number
          }
        }
      }
      Volume: {
        payload: Prisma.$VolumePayload<ExtArgs>
        fields: Prisma.VolumeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VolumeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolumePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VolumeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolumePayload>
          }
          findFirst: {
            args: Prisma.VolumeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolumePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VolumeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolumePayload>
          }
          findMany: {
            args: Prisma.VolumeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolumePayload>[]
          }
          create: {
            args: Prisma.VolumeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolumePayload>
          }
          createMany: {
            args: Prisma.VolumeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VolumeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolumePayload>[]
          }
          delete: {
            args: Prisma.VolumeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolumePayload>
          }
          update: {
            args: Prisma.VolumeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolumePayload>
          }
          deleteMany: {
            args: Prisma.VolumeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VolumeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VolumeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolumePayload>[]
          }
          upsert: {
            args: Prisma.VolumeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolumePayload>
          }
          aggregate: {
            args: Prisma.VolumeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVolume>
          }
          groupBy: {
            args: Prisma.VolumeGroupByArgs<ExtArgs>
            result: $Utils.Optional<VolumeGroupByOutputType>[]
          }
          count: {
            args: Prisma.VolumeCountArgs<ExtArgs>
            result: $Utils.Optional<VolumeCountAggregateOutputType> | number
          }
        }
      }
      Issues: {
        payload: Prisma.$IssuesPayload<ExtArgs>
        fields: Prisma.IssuesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IssuesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IssuesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuesPayload>
          }
          findFirst: {
            args: Prisma.IssuesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IssuesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuesPayload>
          }
          findMany: {
            args: Prisma.IssuesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuesPayload>[]
          }
          create: {
            args: Prisma.IssuesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuesPayload>
          }
          createMany: {
            args: Prisma.IssuesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IssuesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuesPayload>[]
          }
          delete: {
            args: Prisma.IssuesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuesPayload>
          }
          update: {
            args: Prisma.IssuesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuesPayload>
          }
          deleteMany: {
            args: Prisma.IssuesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IssuesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IssuesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuesPayload>[]
          }
          upsert: {
            args: Prisma.IssuesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuesPayload>
          }
          aggregate: {
            args: Prisma.IssuesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIssues>
          }
          groupBy: {
            args: Prisma.IssuesGroupByArgs<ExtArgs>
            result: $Utils.Optional<IssuesGroupByOutputType>[]
          }
          count: {
            args: Prisma.IssuesCountArgs<ExtArgs>
            result: $Utils.Optional<IssuesCountAggregateOutputType> | number
          }
        }
      }
      Author: {
        payload: Prisma.$AuthorPayload<ExtArgs>
        fields: Prisma.AuthorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          findFirst: {
            args: Prisma.AuthorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          findMany: {
            args: Prisma.AuthorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>[]
          }
          create: {
            args: Prisma.AuthorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          createMany: {
            args: Prisma.AuthorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>[]
          }
          delete: {
            args: Prisma.AuthorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          update: {
            args: Prisma.AuthorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          deleteMany: {
            args: Prisma.AuthorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>[]
          }
          upsert: {
            args: Prisma.AuthorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          aggregate: {
            args: Prisma.AuthorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthor>
          }
          groupBy: {
            args: Prisma.AuthorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthorCountArgs<ExtArgs>
            result: $Utils.Optional<AuthorCountAggregateOutputType> | number
          }
        }
      }
      Action: {
        payload: Prisma.$ActionPayload<ExtArgs>
        fields: Prisma.ActionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          findFirst: {
            args: Prisma.ActionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          findMany: {
            args: Prisma.ActionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>[]
          }
          create: {
            args: Prisma.ActionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          createMany: {
            args: Prisma.ActionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>[]
          }
          delete: {
            args: Prisma.ActionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          update: {
            args: Prisma.ActionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          deleteMany: {
            args: Prisma.ActionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>[]
          }
          upsert: {
            args: Prisma.ActionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          aggregate: {
            args: Prisma.ActionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAction>
          }
          groupBy: {
            args: Prisma.ActionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActionCountArgs<ExtArgs>
            result: $Utils.Optional<ActionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    thesis?: ThesisOmit
    volume?: VolumeOmit
    issues?: IssuesOmit
    author?: AuthorOmit
    action?: ActionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    thesis: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    thesis?: boolean | UserCountOutputTypeCountThesisArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountThesisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThesisWhereInput
  }


  /**
   * Count Type ThesisCountOutputType
   */

  export type ThesisCountOutputType = {
    authors: number
  }

  export type ThesisCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authors?: boolean | ThesisCountOutputTypeCountAuthorsArgs
  }

  // Custom InputTypes
  /**
   * ThesisCountOutputType without action
   */
  export type ThesisCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThesisCountOutputType
     */
    select?: ThesisCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ThesisCountOutputType without action
   */
  export type ThesisCountOutputTypeCountAuthorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthorWhereInput
  }


  /**
   * Count Type VolumeCountOutputType
   */

  export type VolumeCountOutputType = {
    issues: number
    Thesis: number
  }

  export type VolumeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issues?: boolean | VolumeCountOutputTypeCountIssuesArgs
    Thesis?: boolean | VolumeCountOutputTypeCountThesisArgs
  }

  // Custom InputTypes
  /**
   * VolumeCountOutputType without action
   */
  export type VolumeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolumeCountOutputType
     */
    select?: VolumeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VolumeCountOutputType without action
   */
  export type VolumeCountOutputTypeCountIssuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IssuesWhereInput
  }

  /**
   * VolumeCountOutputType without action
   */
  export type VolumeCountOutputTypeCountThesisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThesisWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    userId: number | null
  }

  export type UserSumAggregateOutputType = {
    userId: number | null
  }

  export type UserMinAggregateOutputType = {
    userId: number | null
    email: string | null
    name: string | null
    password: string | null
    type: $Enums.UserType | null
  }

  export type UserMaxAggregateOutputType = {
    userId: number | null
    email: string | null
    name: string | null
    password: string | null
    type: $Enums.UserType | null
  }

  export type UserCountAggregateOutputType = {
    userId: number
    email: number
    name: number
    password: number
    type: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    userId?: true
  }

  export type UserSumAggregateInputType = {
    userId?: true
  }

  export type UserMinAggregateInputType = {
    userId?: true
    email?: true
    name?: true
    password?: true
    type?: true
  }

  export type UserMaxAggregateInputType = {
    userId?: true
    email?: true
    name?: true
    password?: true
    type?: true
  }

  export type UserCountAggregateInputType = {
    userId?: true
    email?: true
    name?: true
    password?: true
    type?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    userId: number
    email: string
    name: string
    password: string
    type: $Enums.UserType
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    type?: boolean
    thesis?: boolean | User$thesisArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    type?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    type?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    userId?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    type?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "email" | "name" | "password" | "type", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    thesis?: boolean | User$thesisArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      thesis: Prisma.$ThesisPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      email: string
      name: string
      password: string
      type: $Enums.UserType
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userWithUserIdOnly = await prisma.user.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    thesis<T extends User$thesisArgs<ExtArgs> = {}>(args?: Subset<T, User$thesisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThesisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly userId: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly type: FieldRef<"User", 'UserType'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.thesis
   */
  export type User$thesisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thesis
     */
    select?: ThesisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thesis
     */
    omit?: ThesisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThesisInclude<ExtArgs> | null
    where?: ThesisWhereInput
    orderBy?: ThesisOrderByWithRelationInput | ThesisOrderByWithRelationInput[]
    cursor?: ThesisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ThesisScalarFieldEnum | ThesisScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Thesis
   */

  export type AggregateThesis = {
    _count: ThesisCountAggregateOutputType | null
    _avg: ThesisAvgAggregateOutputType | null
    _sum: ThesisSumAggregateOutputType | null
    _min: ThesisMinAggregateOutputType | null
    _max: ThesisMaxAggregateOutputType | null
  }

  export type ThesisAvgAggregateOutputType = {
    thesisId: number | null
    volumeId: number | null
    uploadedBy: number | null
  }

  export type ThesisSumAggregateOutputType = {
    thesisId: number | null
    volumeId: number | null
    uploadedBy: number | null
  }

  export type ThesisMinAggregateOutputType = {
    thesisId: number | null
    title: string | null
    abstract: string | null
    primaryAuthor: string | null
    file: string | null
    status: $Enums.Status | null
    volumeId: number | null
    actionDate: Date | null
    uploadedBy: number | null
  }

  export type ThesisMaxAggregateOutputType = {
    thesisId: number | null
    title: string | null
    abstract: string | null
    primaryAuthor: string | null
    file: string | null
    status: $Enums.Status | null
    volumeId: number | null
    actionDate: Date | null
    uploadedBy: number | null
  }

  export type ThesisCountAggregateOutputType = {
    thesisId: number
    title: number
    abstract: number
    primaryAuthor: number
    file: number
    status: number
    volumeId: number
    actionDate: number
    uploadedBy: number
    _all: number
  }


  export type ThesisAvgAggregateInputType = {
    thesisId?: true
    volumeId?: true
    uploadedBy?: true
  }

  export type ThesisSumAggregateInputType = {
    thesisId?: true
    volumeId?: true
    uploadedBy?: true
  }

  export type ThesisMinAggregateInputType = {
    thesisId?: true
    title?: true
    abstract?: true
    primaryAuthor?: true
    file?: true
    status?: true
    volumeId?: true
    actionDate?: true
    uploadedBy?: true
  }

  export type ThesisMaxAggregateInputType = {
    thesisId?: true
    title?: true
    abstract?: true
    primaryAuthor?: true
    file?: true
    status?: true
    volumeId?: true
    actionDate?: true
    uploadedBy?: true
  }

  export type ThesisCountAggregateInputType = {
    thesisId?: true
    title?: true
    abstract?: true
    primaryAuthor?: true
    file?: true
    status?: true
    volumeId?: true
    actionDate?: true
    uploadedBy?: true
    _all?: true
  }

  export type ThesisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Thesis to aggregate.
     */
    where?: ThesisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Theses to fetch.
     */
    orderBy?: ThesisOrderByWithRelationInput | ThesisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ThesisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Theses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Theses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Theses
    **/
    _count?: true | ThesisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ThesisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ThesisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ThesisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ThesisMaxAggregateInputType
  }

  export type GetThesisAggregateType<T extends ThesisAggregateArgs> = {
        [P in keyof T & keyof AggregateThesis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateThesis[P]>
      : GetScalarType<T[P], AggregateThesis[P]>
  }




  export type ThesisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThesisWhereInput
    orderBy?: ThesisOrderByWithAggregationInput | ThesisOrderByWithAggregationInput[]
    by: ThesisScalarFieldEnum[] | ThesisScalarFieldEnum
    having?: ThesisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ThesisCountAggregateInputType | true
    _avg?: ThesisAvgAggregateInputType
    _sum?: ThesisSumAggregateInputType
    _min?: ThesisMinAggregateInputType
    _max?: ThesisMaxAggregateInputType
  }

  export type ThesisGroupByOutputType = {
    thesisId: number
    title: string
    abstract: string
    primaryAuthor: string
    file: string
    status: $Enums.Status
    volumeId: number
    actionDate: Date
    uploadedBy: number
    _count: ThesisCountAggregateOutputType | null
    _avg: ThesisAvgAggregateOutputType | null
    _sum: ThesisSumAggregateOutputType | null
    _min: ThesisMinAggregateOutputType | null
    _max: ThesisMaxAggregateOutputType | null
  }

  type GetThesisGroupByPayload<T extends ThesisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ThesisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ThesisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ThesisGroupByOutputType[P]>
            : GetScalarType<T[P], ThesisGroupByOutputType[P]>
        }
      >
    >


  export type ThesisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    thesisId?: boolean
    title?: boolean
    abstract?: boolean
    primaryAuthor?: boolean
    file?: boolean
    status?: boolean
    volumeId?: boolean
    actionDate?: boolean
    uploadedBy?: boolean
    volume?: boolean | VolumeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    authors?: boolean | Thesis$authorsArgs<ExtArgs>
    action?: boolean | Thesis$actionArgs<ExtArgs>
    _count?: boolean | ThesisCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["thesis"]>

  export type ThesisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    thesisId?: boolean
    title?: boolean
    abstract?: boolean
    primaryAuthor?: boolean
    file?: boolean
    status?: boolean
    volumeId?: boolean
    actionDate?: boolean
    uploadedBy?: boolean
    volume?: boolean | VolumeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["thesis"]>

  export type ThesisSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    thesisId?: boolean
    title?: boolean
    abstract?: boolean
    primaryAuthor?: boolean
    file?: boolean
    status?: boolean
    volumeId?: boolean
    actionDate?: boolean
    uploadedBy?: boolean
    volume?: boolean | VolumeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["thesis"]>

  export type ThesisSelectScalar = {
    thesisId?: boolean
    title?: boolean
    abstract?: boolean
    primaryAuthor?: boolean
    file?: boolean
    status?: boolean
    volumeId?: boolean
    actionDate?: boolean
    uploadedBy?: boolean
  }

  export type ThesisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"thesisId" | "title" | "abstract" | "primaryAuthor" | "file" | "status" | "volumeId" | "actionDate" | "uploadedBy", ExtArgs["result"]["thesis"]>
  export type ThesisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    volume?: boolean | VolumeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    authors?: boolean | Thesis$authorsArgs<ExtArgs>
    action?: boolean | Thesis$actionArgs<ExtArgs>
    _count?: boolean | ThesisCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ThesisIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    volume?: boolean | VolumeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ThesisIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    volume?: boolean | VolumeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ThesisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Thesis"
    objects: {
      volume: Prisma.$VolumePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      authors: Prisma.$AuthorPayload<ExtArgs>[]
      action: Prisma.$ActionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      thesisId: number
      title: string
      abstract: string
      primaryAuthor: string
      file: string
      status: $Enums.Status
      volumeId: number
      actionDate: Date
      uploadedBy: number
    }, ExtArgs["result"]["thesis"]>
    composites: {}
  }

  type ThesisGetPayload<S extends boolean | null | undefined | ThesisDefaultArgs> = $Result.GetResult<Prisma.$ThesisPayload, S>

  type ThesisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ThesisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ThesisCountAggregateInputType | true
    }

  export interface ThesisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Thesis'], meta: { name: 'Thesis' } }
    /**
     * Find zero or one Thesis that matches the filter.
     * @param {ThesisFindUniqueArgs} args - Arguments to find a Thesis
     * @example
     * // Get one Thesis
     * const thesis = await prisma.thesis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ThesisFindUniqueArgs>(args: SelectSubset<T, ThesisFindUniqueArgs<ExtArgs>>): Prisma__ThesisClient<$Result.GetResult<Prisma.$ThesisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Thesis that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ThesisFindUniqueOrThrowArgs} args - Arguments to find a Thesis
     * @example
     * // Get one Thesis
     * const thesis = await prisma.thesis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ThesisFindUniqueOrThrowArgs>(args: SelectSubset<T, ThesisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ThesisClient<$Result.GetResult<Prisma.$ThesisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Thesis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThesisFindFirstArgs} args - Arguments to find a Thesis
     * @example
     * // Get one Thesis
     * const thesis = await prisma.thesis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ThesisFindFirstArgs>(args?: SelectSubset<T, ThesisFindFirstArgs<ExtArgs>>): Prisma__ThesisClient<$Result.GetResult<Prisma.$ThesisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Thesis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThesisFindFirstOrThrowArgs} args - Arguments to find a Thesis
     * @example
     * // Get one Thesis
     * const thesis = await prisma.thesis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ThesisFindFirstOrThrowArgs>(args?: SelectSubset<T, ThesisFindFirstOrThrowArgs<ExtArgs>>): Prisma__ThesisClient<$Result.GetResult<Prisma.$ThesisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Theses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThesisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Theses
     * const theses = await prisma.thesis.findMany()
     * 
     * // Get first 10 Theses
     * const theses = await prisma.thesis.findMany({ take: 10 })
     * 
     * // Only select the `thesisId`
     * const thesisWithThesisIdOnly = await prisma.thesis.findMany({ select: { thesisId: true } })
     * 
     */
    findMany<T extends ThesisFindManyArgs>(args?: SelectSubset<T, ThesisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThesisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Thesis.
     * @param {ThesisCreateArgs} args - Arguments to create a Thesis.
     * @example
     * // Create one Thesis
     * const Thesis = await prisma.thesis.create({
     *   data: {
     *     // ... data to create a Thesis
     *   }
     * })
     * 
     */
    create<T extends ThesisCreateArgs>(args: SelectSubset<T, ThesisCreateArgs<ExtArgs>>): Prisma__ThesisClient<$Result.GetResult<Prisma.$ThesisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Theses.
     * @param {ThesisCreateManyArgs} args - Arguments to create many Theses.
     * @example
     * // Create many Theses
     * const thesis = await prisma.thesis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ThesisCreateManyArgs>(args?: SelectSubset<T, ThesisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Theses and returns the data saved in the database.
     * @param {ThesisCreateManyAndReturnArgs} args - Arguments to create many Theses.
     * @example
     * // Create many Theses
     * const thesis = await prisma.thesis.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Theses and only return the `thesisId`
     * const thesisWithThesisIdOnly = await prisma.thesis.createManyAndReturn({
     *   select: { thesisId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ThesisCreateManyAndReturnArgs>(args?: SelectSubset<T, ThesisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThesisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Thesis.
     * @param {ThesisDeleteArgs} args - Arguments to delete one Thesis.
     * @example
     * // Delete one Thesis
     * const Thesis = await prisma.thesis.delete({
     *   where: {
     *     // ... filter to delete one Thesis
     *   }
     * })
     * 
     */
    delete<T extends ThesisDeleteArgs>(args: SelectSubset<T, ThesisDeleteArgs<ExtArgs>>): Prisma__ThesisClient<$Result.GetResult<Prisma.$ThesisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Thesis.
     * @param {ThesisUpdateArgs} args - Arguments to update one Thesis.
     * @example
     * // Update one Thesis
     * const thesis = await prisma.thesis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ThesisUpdateArgs>(args: SelectSubset<T, ThesisUpdateArgs<ExtArgs>>): Prisma__ThesisClient<$Result.GetResult<Prisma.$ThesisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Theses.
     * @param {ThesisDeleteManyArgs} args - Arguments to filter Theses to delete.
     * @example
     * // Delete a few Theses
     * const { count } = await prisma.thesis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ThesisDeleteManyArgs>(args?: SelectSubset<T, ThesisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Theses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThesisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Theses
     * const thesis = await prisma.thesis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ThesisUpdateManyArgs>(args: SelectSubset<T, ThesisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Theses and returns the data updated in the database.
     * @param {ThesisUpdateManyAndReturnArgs} args - Arguments to update many Theses.
     * @example
     * // Update many Theses
     * const thesis = await prisma.thesis.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Theses and only return the `thesisId`
     * const thesisWithThesisIdOnly = await prisma.thesis.updateManyAndReturn({
     *   select: { thesisId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ThesisUpdateManyAndReturnArgs>(args: SelectSubset<T, ThesisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThesisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Thesis.
     * @param {ThesisUpsertArgs} args - Arguments to update or create a Thesis.
     * @example
     * // Update or create a Thesis
     * const thesis = await prisma.thesis.upsert({
     *   create: {
     *     // ... data to create a Thesis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Thesis we want to update
     *   }
     * })
     */
    upsert<T extends ThesisUpsertArgs>(args: SelectSubset<T, ThesisUpsertArgs<ExtArgs>>): Prisma__ThesisClient<$Result.GetResult<Prisma.$ThesisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Theses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThesisCountArgs} args - Arguments to filter Theses to count.
     * @example
     * // Count the number of Theses
     * const count = await prisma.thesis.count({
     *   where: {
     *     // ... the filter for the Theses we want to count
     *   }
     * })
    **/
    count<T extends ThesisCountArgs>(
      args?: Subset<T, ThesisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ThesisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Thesis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThesisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ThesisAggregateArgs>(args: Subset<T, ThesisAggregateArgs>): Prisma.PrismaPromise<GetThesisAggregateType<T>>

    /**
     * Group by Thesis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThesisGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ThesisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ThesisGroupByArgs['orderBy'] }
        : { orderBy?: ThesisGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ThesisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetThesisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Thesis model
   */
  readonly fields: ThesisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Thesis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ThesisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    volume<T extends VolumeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VolumeDefaultArgs<ExtArgs>>): Prisma__VolumeClient<$Result.GetResult<Prisma.$VolumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    authors<T extends Thesis$authorsArgs<ExtArgs> = {}>(args?: Subset<T, Thesis$authorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    action<T extends Thesis$actionArgs<ExtArgs> = {}>(args?: Subset<T, Thesis$actionArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Thesis model
   */
  interface ThesisFieldRefs {
    readonly thesisId: FieldRef<"Thesis", 'Int'>
    readonly title: FieldRef<"Thesis", 'String'>
    readonly abstract: FieldRef<"Thesis", 'String'>
    readonly primaryAuthor: FieldRef<"Thesis", 'String'>
    readonly file: FieldRef<"Thesis", 'String'>
    readonly status: FieldRef<"Thesis", 'Status'>
    readonly volumeId: FieldRef<"Thesis", 'Int'>
    readonly actionDate: FieldRef<"Thesis", 'DateTime'>
    readonly uploadedBy: FieldRef<"Thesis", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Thesis findUnique
   */
  export type ThesisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thesis
     */
    select?: ThesisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thesis
     */
    omit?: ThesisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThesisInclude<ExtArgs> | null
    /**
     * Filter, which Thesis to fetch.
     */
    where: ThesisWhereUniqueInput
  }

  /**
   * Thesis findUniqueOrThrow
   */
  export type ThesisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thesis
     */
    select?: ThesisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thesis
     */
    omit?: ThesisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThesisInclude<ExtArgs> | null
    /**
     * Filter, which Thesis to fetch.
     */
    where: ThesisWhereUniqueInput
  }

  /**
   * Thesis findFirst
   */
  export type ThesisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thesis
     */
    select?: ThesisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thesis
     */
    omit?: ThesisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThesisInclude<ExtArgs> | null
    /**
     * Filter, which Thesis to fetch.
     */
    where?: ThesisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Theses to fetch.
     */
    orderBy?: ThesisOrderByWithRelationInput | ThesisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Theses.
     */
    cursor?: ThesisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Theses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Theses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Theses.
     */
    distinct?: ThesisScalarFieldEnum | ThesisScalarFieldEnum[]
  }

  /**
   * Thesis findFirstOrThrow
   */
  export type ThesisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thesis
     */
    select?: ThesisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thesis
     */
    omit?: ThesisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThesisInclude<ExtArgs> | null
    /**
     * Filter, which Thesis to fetch.
     */
    where?: ThesisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Theses to fetch.
     */
    orderBy?: ThesisOrderByWithRelationInput | ThesisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Theses.
     */
    cursor?: ThesisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Theses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Theses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Theses.
     */
    distinct?: ThesisScalarFieldEnum | ThesisScalarFieldEnum[]
  }

  /**
   * Thesis findMany
   */
  export type ThesisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thesis
     */
    select?: ThesisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thesis
     */
    omit?: ThesisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThesisInclude<ExtArgs> | null
    /**
     * Filter, which Theses to fetch.
     */
    where?: ThesisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Theses to fetch.
     */
    orderBy?: ThesisOrderByWithRelationInput | ThesisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Theses.
     */
    cursor?: ThesisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Theses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Theses.
     */
    skip?: number
    distinct?: ThesisScalarFieldEnum | ThesisScalarFieldEnum[]
  }

  /**
   * Thesis create
   */
  export type ThesisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thesis
     */
    select?: ThesisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thesis
     */
    omit?: ThesisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThesisInclude<ExtArgs> | null
    /**
     * The data needed to create a Thesis.
     */
    data: XOR<ThesisCreateInput, ThesisUncheckedCreateInput>
  }

  /**
   * Thesis createMany
   */
  export type ThesisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Theses.
     */
    data: ThesisCreateManyInput | ThesisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Thesis createManyAndReturn
   */
  export type ThesisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thesis
     */
    select?: ThesisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Thesis
     */
    omit?: ThesisOmit<ExtArgs> | null
    /**
     * The data used to create many Theses.
     */
    data: ThesisCreateManyInput | ThesisCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThesisIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Thesis update
   */
  export type ThesisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thesis
     */
    select?: ThesisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thesis
     */
    omit?: ThesisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThesisInclude<ExtArgs> | null
    /**
     * The data needed to update a Thesis.
     */
    data: XOR<ThesisUpdateInput, ThesisUncheckedUpdateInput>
    /**
     * Choose, which Thesis to update.
     */
    where: ThesisWhereUniqueInput
  }

  /**
   * Thesis updateMany
   */
  export type ThesisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Theses.
     */
    data: XOR<ThesisUpdateManyMutationInput, ThesisUncheckedUpdateManyInput>
    /**
     * Filter which Theses to update
     */
    where?: ThesisWhereInput
    /**
     * Limit how many Theses to update.
     */
    limit?: number
  }

  /**
   * Thesis updateManyAndReturn
   */
  export type ThesisUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thesis
     */
    select?: ThesisSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Thesis
     */
    omit?: ThesisOmit<ExtArgs> | null
    /**
     * The data used to update Theses.
     */
    data: XOR<ThesisUpdateManyMutationInput, ThesisUncheckedUpdateManyInput>
    /**
     * Filter which Theses to update
     */
    where?: ThesisWhereInput
    /**
     * Limit how many Theses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThesisIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Thesis upsert
   */
  export type ThesisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thesis
     */
    select?: ThesisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thesis
     */
    omit?: ThesisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThesisInclude<ExtArgs> | null
    /**
     * The filter to search for the Thesis to update in case it exists.
     */
    where: ThesisWhereUniqueInput
    /**
     * In case the Thesis found by the `where` argument doesn't exist, create a new Thesis with this data.
     */
    create: XOR<ThesisCreateInput, ThesisUncheckedCreateInput>
    /**
     * In case the Thesis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ThesisUpdateInput, ThesisUncheckedUpdateInput>
  }

  /**
   * Thesis delete
   */
  export type ThesisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thesis
     */
    select?: ThesisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thesis
     */
    omit?: ThesisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThesisInclude<ExtArgs> | null
    /**
     * Filter which Thesis to delete.
     */
    where: ThesisWhereUniqueInput
  }

  /**
   * Thesis deleteMany
   */
  export type ThesisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Theses to delete
     */
    where?: ThesisWhereInput
    /**
     * Limit how many Theses to delete.
     */
    limit?: number
  }

  /**
   * Thesis.authors
   */
  export type Thesis$authorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    where?: AuthorWhereInput
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    cursor?: AuthorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * Thesis.action
   */
  export type Thesis$actionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    where?: ActionWhereInput
  }

  /**
   * Thesis without action
   */
  export type ThesisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thesis
     */
    select?: ThesisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thesis
     */
    omit?: ThesisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThesisInclude<ExtArgs> | null
  }


  /**
   * Model Volume
   */

  export type AggregateVolume = {
    _count: VolumeCountAggregateOutputType | null
    _avg: VolumeAvgAggregateOutputType | null
    _sum: VolumeSumAggregateOutputType | null
    _min: VolumeMinAggregateOutputType | null
    _max: VolumeMaxAggregateOutputType | null
  }

  export type VolumeAvgAggregateOutputType = {
    volumeId: number | null
  }

  export type VolumeSumAggregateOutputType = {
    volumeId: number | null
  }

  export type VolumeMinAggregateOutputType = {
    volumeId: number | null
    volName: string | null
  }

  export type VolumeMaxAggregateOutputType = {
    volumeId: number | null
    volName: string | null
  }

  export type VolumeCountAggregateOutputType = {
    volumeId: number
    volName: number
    _all: number
  }


  export type VolumeAvgAggregateInputType = {
    volumeId?: true
  }

  export type VolumeSumAggregateInputType = {
    volumeId?: true
  }

  export type VolumeMinAggregateInputType = {
    volumeId?: true
    volName?: true
  }

  export type VolumeMaxAggregateInputType = {
    volumeId?: true
    volName?: true
  }

  export type VolumeCountAggregateInputType = {
    volumeId?: true
    volName?: true
    _all?: true
  }

  export type VolumeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Volume to aggregate.
     */
    where?: VolumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Volumes to fetch.
     */
    orderBy?: VolumeOrderByWithRelationInput | VolumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VolumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Volumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Volumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Volumes
    **/
    _count?: true | VolumeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VolumeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VolumeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VolumeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VolumeMaxAggregateInputType
  }

  export type GetVolumeAggregateType<T extends VolumeAggregateArgs> = {
        [P in keyof T & keyof AggregateVolume]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVolume[P]>
      : GetScalarType<T[P], AggregateVolume[P]>
  }




  export type VolumeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VolumeWhereInput
    orderBy?: VolumeOrderByWithAggregationInput | VolumeOrderByWithAggregationInput[]
    by: VolumeScalarFieldEnum[] | VolumeScalarFieldEnum
    having?: VolumeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VolumeCountAggregateInputType | true
    _avg?: VolumeAvgAggregateInputType
    _sum?: VolumeSumAggregateInputType
    _min?: VolumeMinAggregateInputType
    _max?: VolumeMaxAggregateInputType
  }

  export type VolumeGroupByOutputType = {
    volumeId: number
    volName: string
    _count: VolumeCountAggregateOutputType | null
    _avg: VolumeAvgAggregateOutputType | null
    _sum: VolumeSumAggregateOutputType | null
    _min: VolumeMinAggregateOutputType | null
    _max: VolumeMaxAggregateOutputType | null
  }

  type GetVolumeGroupByPayload<T extends VolumeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VolumeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VolumeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VolumeGroupByOutputType[P]>
            : GetScalarType<T[P], VolumeGroupByOutputType[P]>
        }
      >
    >


  export type VolumeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    volumeId?: boolean
    volName?: boolean
    issues?: boolean | Volume$issuesArgs<ExtArgs>
    Thesis?: boolean | Volume$ThesisArgs<ExtArgs>
    _count?: boolean | VolumeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["volume"]>

  export type VolumeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    volumeId?: boolean
    volName?: boolean
  }, ExtArgs["result"]["volume"]>

  export type VolumeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    volumeId?: boolean
    volName?: boolean
  }, ExtArgs["result"]["volume"]>

  export type VolumeSelectScalar = {
    volumeId?: boolean
    volName?: boolean
  }

  export type VolumeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"volumeId" | "volName", ExtArgs["result"]["volume"]>
  export type VolumeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issues?: boolean | Volume$issuesArgs<ExtArgs>
    Thesis?: boolean | Volume$ThesisArgs<ExtArgs>
    _count?: boolean | VolumeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VolumeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VolumeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VolumePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Volume"
    objects: {
      issues: Prisma.$IssuesPayload<ExtArgs>[]
      Thesis: Prisma.$ThesisPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      volumeId: number
      volName: string
    }, ExtArgs["result"]["volume"]>
    composites: {}
  }

  type VolumeGetPayload<S extends boolean | null | undefined | VolumeDefaultArgs> = $Result.GetResult<Prisma.$VolumePayload, S>

  type VolumeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VolumeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VolumeCountAggregateInputType | true
    }

  export interface VolumeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Volume'], meta: { name: 'Volume' } }
    /**
     * Find zero or one Volume that matches the filter.
     * @param {VolumeFindUniqueArgs} args - Arguments to find a Volume
     * @example
     * // Get one Volume
     * const volume = await prisma.volume.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VolumeFindUniqueArgs>(args: SelectSubset<T, VolumeFindUniqueArgs<ExtArgs>>): Prisma__VolumeClient<$Result.GetResult<Prisma.$VolumePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Volume that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VolumeFindUniqueOrThrowArgs} args - Arguments to find a Volume
     * @example
     * // Get one Volume
     * const volume = await prisma.volume.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VolumeFindUniqueOrThrowArgs>(args: SelectSubset<T, VolumeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VolumeClient<$Result.GetResult<Prisma.$VolumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Volume that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolumeFindFirstArgs} args - Arguments to find a Volume
     * @example
     * // Get one Volume
     * const volume = await prisma.volume.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VolumeFindFirstArgs>(args?: SelectSubset<T, VolumeFindFirstArgs<ExtArgs>>): Prisma__VolumeClient<$Result.GetResult<Prisma.$VolumePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Volume that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolumeFindFirstOrThrowArgs} args - Arguments to find a Volume
     * @example
     * // Get one Volume
     * const volume = await prisma.volume.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VolumeFindFirstOrThrowArgs>(args?: SelectSubset<T, VolumeFindFirstOrThrowArgs<ExtArgs>>): Prisma__VolumeClient<$Result.GetResult<Prisma.$VolumePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Volumes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolumeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Volumes
     * const volumes = await prisma.volume.findMany()
     * 
     * // Get first 10 Volumes
     * const volumes = await prisma.volume.findMany({ take: 10 })
     * 
     * // Only select the `volumeId`
     * const volumeWithVolumeIdOnly = await prisma.volume.findMany({ select: { volumeId: true } })
     * 
     */
    findMany<T extends VolumeFindManyArgs>(args?: SelectSubset<T, VolumeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VolumePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Volume.
     * @param {VolumeCreateArgs} args - Arguments to create a Volume.
     * @example
     * // Create one Volume
     * const Volume = await prisma.volume.create({
     *   data: {
     *     // ... data to create a Volume
     *   }
     * })
     * 
     */
    create<T extends VolumeCreateArgs>(args: SelectSubset<T, VolumeCreateArgs<ExtArgs>>): Prisma__VolumeClient<$Result.GetResult<Prisma.$VolumePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Volumes.
     * @param {VolumeCreateManyArgs} args - Arguments to create many Volumes.
     * @example
     * // Create many Volumes
     * const volume = await prisma.volume.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VolumeCreateManyArgs>(args?: SelectSubset<T, VolumeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Volumes and returns the data saved in the database.
     * @param {VolumeCreateManyAndReturnArgs} args - Arguments to create many Volumes.
     * @example
     * // Create many Volumes
     * const volume = await prisma.volume.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Volumes and only return the `volumeId`
     * const volumeWithVolumeIdOnly = await prisma.volume.createManyAndReturn({
     *   select: { volumeId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VolumeCreateManyAndReturnArgs>(args?: SelectSubset<T, VolumeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VolumePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Volume.
     * @param {VolumeDeleteArgs} args - Arguments to delete one Volume.
     * @example
     * // Delete one Volume
     * const Volume = await prisma.volume.delete({
     *   where: {
     *     // ... filter to delete one Volume
     *   }
     * })
     * 
     */
    delete<T extends VolumeDeleteArgs>(args: SelectSubset<T, VolumeDeleteArgs<ExtArgs>>): Prisma__VolumeClient<$Result.GetResult<Prisma.$VolumePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Volume.
     * @param {VolumeUpdateArgs} args - Arguments to update one Volume.
     * @example
     * // Update one Volume
     * const volume = await prisma.volume.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VolumeUpdateArgs>(args: SelectSubset<T, VolumeUpdateArgs<ExtArgs>>): Prisma__VolumeClient<$Result.GetResult<Prisma.$VolumePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Volumes.
     * @param {VolumeDeleteManyArgs} args - Arguments to filter Volumes to delete.
     * @example
     * // Delete a few Volumes
     * const { count } = await prisma.volume.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VolumeDeleteManyArgs>(args?: SelectSubset<T, VolumeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Volumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolumeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Volumes
     * const volume = await prisma.volume.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VolumeUpdateManyArgs>(args: SelectSubset<T, VolumeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Volumes and returns the data updated in the database.
     * @param {VolumeUpdateManyAndReturnArgs} args - Arguments to update many Volumes.
     * @example
     * // Update many Volumes
     * const volume = await prisma.volume.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Volumes and only return the `volumeId`
     * const volumeWithVolumeIdOnly = await prisma.volume.updateManyAndReturn({
     *   select: { volumeId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VolumeUpdateManyAndReturnArgs>(args: SelectSubset<T, VolumeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VolumePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Volume.
     * @param {VolumeUpsertArgs} args - Arguments to update or create a Volume.
     * @example
     * // Update or create a Volume
     * const volume = await prisma.volume.upsert({
     *   create: {
     *     // ... data to create a Volume
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Volume we want to update
     *   }
     * })
     */
    upsert<T extends VolumeUpsertArgs>(args: SelectSubset<T, VolumeUpsertArgs<ExtArgs>>): Prisma__VolumeClient<$Result.GetResult<Prisma.$VolumePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Volumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolumeCountArgs} args - Arguments to filter Volumes to count.
     * @example
     * // Count the number of Volumes
     * const count = await prisma.volume.count({
     *   where: {
     *     // ... the filter for the Volumes we want to count
     *   }
     * })
    **/
    count<T extends VolumeCountArgs>(
      args?: Subset<T, VolumeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VolumeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Volume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolumeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VolumeAggregateArgs>(args: Subset<T, VolumeAggregateArgs>): Prisma.PrismaPromise<GetVolumeAggregateType<T>>

    /**
     * Group by Volume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolumeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VolumeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VolumeGroupByArgs['orderBy'] }
        : { orderBy?: VolumeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VolumeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVolumeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Volume model
   */
  readonly fields: VolumeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Volume.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VolumeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    issues<T extends Volume$issuesArgs<ExtArgs> = {}>(args?: Subset<T, Volume$issuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Thesis<T extends Volume$ThesisArgs<ExtArgs> = {}>(args?: Subset<T, Volume$ThesisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThesisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Volume model
   */
  interface VolumeFieldRefs {
    readonly volumeId: FieldRef<"Volume", 'Int'>
    readonly volName: FieldRef<"Volume", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Volume findUnique
   */
  export type VolumeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volume
     */
    select?: VolumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volume
     */
    omit?: VolumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolumeInclude<ExtArgs> | null
    /**
     * Filter, which Volume to fetch.
     */
    where: VolumeWhereUniqueInput
  }

  /**
   * Volume findUniqueOrThrow
   */
  export type VolumeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volume
     */
    select?: VolumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volume
     */
    omit?: VolumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolumeInclude<ExtArgs> | null
    /**
     * Filter, which Volume to fetch.
     */
    where: VolumeWhereUniqueInput
  }

  /**
   * Volume findFirst
   */
  export type VolumeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volume
     */
    select?: VolumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volume
     */
    omit?: VolumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolumeInclude<ExtArgs> | null
    /**
     * Filter, which Volume to fetch.
     */
    where?: VolumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Volumes to fetch.
     */
    orderBy?: VolumeOrderByWithRelationInput | VolumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Volumes.
     */
    cursor?: VolumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Volumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Volumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Volumes.
     */
    distinct?: VolumeScalarFieldEnum | VolumeScalarFieldEnum[]
  }

  /**
   * Volume findFirstOrThrow
   */
  export type VolumeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volume
     */
    select?: VolumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volume
     */
    omit?: VolumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolumeInclude<ExtArgs> | null
    /**
     * Filter, which Volume to fetch.
     */
    where?: VolumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Volumes to fetch.
     */
    orderBy?: VolumeOrderByWithRelationInput | VolumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Volumes.
     */
    cursor?: VolumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Volumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Volumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Volumes.
     */
    distinct?: VolumeScalarFieldEnum | VolumeScalarFieldEnum[]
  }

  /**
   * Volume findMany
   */
  export type VolumeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volume
     */
    select?: VolumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volume
     */
    omit?: VolumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolumeInclude<ExtArgs> | null
    /**
     * Filter, which Volumes to fetch.
     */
    where?: VolumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Volumes to fetch.
     */
    orderBy?: VolumeOrderByWithRelationInput | VolumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Volumes.
     */
    cursor?: VolumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Volumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Volumes.
     */
    skip?: number
    distinct?: VolumeScalarFieldEnum | VolumeScalarFieldEnum[]
  }

  /**
   * Volume create
   */
  export type VolumeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volume
     */
    select?: VolumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volume
     */
    omit?: VolumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolumeInclude<ExtArgs> | null
    /**
     * The data needed to create a Volume.
     */
    data: XOR<VolumeCreateInput, VolumeUncheckedCreateInput>
  }

  /**
   * Volume createMany
   */
  export type VolumeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Volumes.
     */
    data: VolumeCreateManyInput | VolumeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Volume createManyAndReturn
   */
  export type VolumeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volume
     */
    select?: VolumeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Volume
     */
    omit?: VolumeOmit<ExtArgs> | null
    /**
     * The data used to create many Volumes.
     */
    data: VolumeCreateManyInput | VolumeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Volume update
   */
  export type VolumeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volume
     */
    select?: VolumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volume
     */
    omit?: VolumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolumeInclude<ExtArgs> | null
    /**
     * The data needed to update a Volume.
     */
    data: XOR<VolumeUpdateInput, VolumeUncheckedUpdateInput>
    /**
     * Choose, which Volume to update.
     */
    where: VolumeWhereUniqueInput
  }

  /**
   * Volume updateMany
   */
  export type VolumeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Volumes.
     */
    data: XOR<VolumeUpdateManyMutationInput, VolumeUncheckedUpdateManyInput>
    /**
     * Filter which Volumes to update
     */
    where?: VolumeWhereInput
    /**
     * Limit how many Volumes to update.
     */
    limit?: number
  }

  /**
   * Volume updateManyAndReturn
   */
  export type VolumeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volume
     */
    select?: VolumeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Volume
     */
    omit?: VolumeOmit<ExtArgs> | null
    /**
     * The data used to update Volumes.
     */
    data: XOR<VolumeUpdateManyMutationInput, VolumeUncheckedUpdateManyInput>
    /**
     * Filter which Volumes to update
     */
    where?: VolumeWhereInput
    /**
     * Limit how many Volumes to update.
     */
    limit?: number
  }

  /**
   * Volume upsert
   */
  export type VolumeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volume
     */
    select?: VolumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volume
     */
    omit?: VolumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolumeInclude<ExtArgs> | null
    /**
     * The filter to search for the Volume to update in case it exists.
     */
    where: VolumeWhereUniqueInput
    /**
     * In case the Volume found by the `where` argument doesn't exist, create a new Volume with this data.
     */
    create: XOR<VolumeCreateInput, VolumeUncheckedCreateInput>
    /**
     * In case the Volume was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VolumeUpdateInput, VolumeUncheckedUpdateInput>
  }

  /**
   * Volume delete
   */
  export type VolumeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volume
     */
    select?: VolumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volume
     */
    omit?: VolumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolumeInclude<ExtArgs> | null
    /**
     * Filter which Volume to delete.
     */
    where: VolumeWhereUniqueInput
  }

  /**
   * Volume deleteMany
   */
  export type VolumeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Volumes to delete
     */
    where?: VolumeWhereInput
    /**
     * Limit how many Volumes to delete.
     */
    limit?: number
  }

  /**
   * Volume.issues
   */
  export type Volume$issuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issues
     */
    select?: IssuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issues
     */
    omit?: IssuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuesInclude<ExtArgs> | null
    where?: IssuesWhereInput
    orderBy?: IssuesOrderByWithRelationInput | IssuesOrderByWithRelationInput[]
    cursor?: IssuesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IssuesScalarFieldEnum | IssuesScalarFieldEnum[]
  }

  /**
   * Volume.Thesis
   */
  export type Volume$ThesisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thesis
     */
    select?: ThesisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thesis
     */
    omit?: ThesisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThesisInclude<ExtArgs> | null
    where?: ThesisWhereInput
    orderBy?: ThesisOrderByWithRelationInput | ThesisOrderByWithRelationInput[]
    cursor?: ThesisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ThesisScalarFieldEnum | ThesisScalarFieldEnum[]
  }

  /**
   * Volume without action
   */
  export type VolumeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volume
     */
    select?: VolumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volume
     */
    omit?: VolumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolumeInclude<ExtArgs> | null
  }


  /**
   * Model Issues
   */

  export type AggregateIssues = {
    _count: IssuesCountAggregateOutputType | null
    _avg: IssuesAvgAggregateOutputType | null
    _sum: IssuesSumAggregateOutputType | null
    _min: IssuesMinAggregateOutputType | null
    _max: IssuesMaxAggregateOutputType | null
  }

  export type IssuesAvgAggregateOutputType = {
    issueId: number | null
    volumeId: number | null
  }

  export type IssuesSumAggregateOutputType = {
    issueId: number | null
    volumeId: number | null
  }

  export type IssuesMinAggregateOutputType = {
    issueId: number | null
    volumeId: number | null
    startDate: Date | null
    endDate: Date | null
  }

  export type IssuesMaxAggregateOutputType = {
    issueId: number | null
    volumeId: number | null
    startDate: Date | null
    endDate: Date | null
  }

  export type IssuesCountAggregateOutputType = {
    issueId: number
    volumeId: number
    startDate: number
    endDate: number
    _all: number
  }


  export type IssuesAvgAggregateInputType = {
    issueId?: true
    volumeId?: true
  }

  export type IssuesSumAggregateInputType = {
    issueId?: true
    volumeId?: true
  }

  export type IssuesMinAggregateInputType = {
    issueId?: true
    volumeId?: true
    startDate?: true
    endDate?: true
  }

  export type IssuesMaxAggregateInputType = {
    issueId?: true
    volumeId?: true
    startDate?: true
    endDate?: true
  }

  export type IssuesCountAggregateInputType = {
    issueId?: true
    volumeId?: true
    startDate?: true
    endDate?: true
    _all?: true
  }

  export type IssuesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Issues to aggregate.
     */
    where?: IssuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issues to fetch.
     */
    orderBy?: IssuesOrderByWithRelationInput | IssuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IssuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Issues
    **/
    _count?: true | IssuesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IssuesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IssuesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IssuesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IssuesMaxAggregateInputType
  }

  export type GetIssuesAggregateType<T extends IssuesAggregateArgs> = {
        [P in keyof T & keyof AggregateIssues]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIssues[P]>
      : GetScalarType<T[P], AggregateIssues[P]>
  }




  export type IssuesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IssuesWhereInput
    orderBy?: IssuesOrderByWithAggregationInput | IssuesOrderByWithAggregationInput[]
    by: IssuesScalarFieldEnum[] | IssuesScalarFieldEnum
    having?: IssuesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IssuesCountAggregateInputType | true
    _avg?: IssuesAvgAggregateInputType
    _sum?: IssuesSumAggregateInputType
    _min?: IssuesMinAggregateInputType
    _max?: IssuesMaxAggregateInputType
  }

  export type IssuesGroupByOutputType = {
    issueId: number
    volumeId: number
    startDate: Date
    endDate: Date | null
    _count: IssuesCountAggregateOutputType | null
    _avg: IssuesAvgAggregateOutputType | null
    _sum: IssuesSumAggregateOutputType | null
    _min: IssuesMinAggregateOutputType | null
    _max: IssuesMaxAggregateOutputType | null
  }

  type GetIssuesGroupByPayload<T extends IssuesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IssuesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IssuesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IssuesGroupByOutputType[P]>
            : GetScalarType<T[P], IssuesGroupByOutputType[P]>
        }
      >
    >


  export type IssuesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    issueId?: boolean
    volumeId?: boolean
    startDate?: boolean
    endDate?: boolean
    volume?: boolean | VolumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["issues"]>

  export type IssuesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    issueId?: boolean
    volumeId?: boolean
    startDate?: boolean
    endDate?: boolean
    volume?: boolean | VolumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["issues"]>

  export type IssuesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    issueId?: boolean
    volumeId?: boolean
    startDate?: boolean
    endDate?: boolean
    volume?: boolean | VolumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["issues"]>

  export type IssuesSelectScalar = {
    issueId?: boolean
    volumeId?: boolean
    startDate?: boolean
    endDate?: boolean
  }

  export type IssuesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"issueId" | "volumeId" | "startDate" | "endDate", ExtArgs["result"]["issues"]>
  export type IssuesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    volume?: boolean | VolumeDefaultArgs<ExtArgs>
  }
  export type IssuesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    volume?: boolean | VolumeDefaultArgs<ExtArgs>
  }
  export type IssuesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    volume?: boolean | VolumeDefaultArgs<ExtArgs>
  }

  export type $IssuesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Issues"
    objects: {
      volume: Prisma.$VolumePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      issueId: number
      volumeId: number
      startDate: Date
      endDate: Date | null
    }, ExtArgs["result"]["issues"]>
    composites: {}
  }

  type IssuesGetPayload<S extends boolean | null | undefined | IssuesDefaultArgs> = $Result.GetResult<Prisma.$IssuesPayload, S>

  type IssuesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IssuesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IssuesCountAggregateInputType | true
    }

  export interface IssuesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Issues'], meta: { name: 'Issues' } }
    /**
     * Find zero or one Issues that matches the filter.
     * @param {IssuesFindUniqueArgs} args - Arguments to find a Issues
     * @example
     * // Get one Issues
     * const issues = await prisma.issues.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IssuesFindUniqueArgs>(args: SelectSubset<T, IssuesFindUniqueArgs<ExtArgs>>): Prisma__IssuesClient<$Result.GetResult<Prisma.$IssuesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Issues that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IssuesFindUniqueOrThrowArgs} args - Arguments to find a Issues
     * @example
     * // Get one Issues
     * const issues = await prisma.issues.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IssuesFindUniqueOrThrowArgs>(args: SelectSubset<T, IssuesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IssuesClient<$Result.GetResult<Prisma.$IssuesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Issues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssuesFindFirstArgs} args - Arguments to find a Issues
     * @example
     * // Get one Issues
     * const issues = await prisma.issues.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IssuesFindFirstArgs>(args?: SelectSubset<T, IssuesFindFirstArgs<ExtArgs>>): Prisma__IssuesClient<$Result.GetResult<Prisma.$IssuesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Issues that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssuesFindFirstOrThrowArgs} args - Arguments to find a Issues
     * @example
     * // Get one Issues
     * const issues = await prisma.issues.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IssuesFindFirstOrThrowArgs>(args?: SelectSubset<T, IssuesFindFirstOrThrowArgs<ExtArgs>>): Prisma__IssuesClient<$Result.GetResult<Prisma.$IssuesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Issues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssuesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Issues
     * const issues = await prisma.issues.findMany()
     * 
     * // Get first 10 Issues
     * const issues = await prisma.issues.findMany({ take: 10 })
     * 
     * // Only select the `issueId`
     * const issuesWithIssueIdOnly = await prisma.issues.findMany({ select: { issueId: true } })
     * 
     */
    findMany<T extends IssuesFindManyArgs>(args?: SelectSubset<T, IssuesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Issues.
     * @param {IssuesCreateArgs} args - Arguments to create a Issues.
     * @example
     * // Create one Issues
     * const Issues = await prisma.issues.create({
     *   data: {
     *     // ... data to create a Issues
     *   }
     * })
     * 
     */
    create<T extends IssuesCreateArgs>(args: SelectSubset<T, IssuesCreateArgs<ExtArgs>>): Prisma__IssuesClient<$Result.GetResult<Prisma.$IssuesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Issues.
     * @param {IssuesCreateManyArgs} args - Arguments to create many Issues.
     * @example
     * // Create many Issues
     * const issues = await prisma.issues.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IssuesCreateManyArgs>(args?: SelectSubset<T, IssuesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Issues and returns the data saved in the database.
     * @param {IssuesCreateManyAndReturnArgs} args - Arguments to create many Issues.
     * @example
     * // Create many Issues
     * const issues = await prisma.issues.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Issues and only return the `issueId`
     * const issuesWithIssueIdOnly = await prisma.issues.createManyAndReturn({
     *   select: { issueId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IssuesCreateManyAndReturnArgs>(args?: SelectSubset<T, IssuesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Issues.
     * @param {IssuesDeleteArgs} args - Arguments to delete one Issues.
     * @example
     * // Delete one Issues
     * const Issues = await prisma.issues.delete({
     *   where: {
     *     // ... filter to delete one Issues
     *   }
     * })
     * 
     */
    delete<T extends IssuesDeleteArgs>(args: SelectSubset<T, IssuesDeleteArgs<ExtArgs>>): Prisma__IssuesClient<$Result.GetResult<Prisma.$IssuesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Issues.
     * @param {IssuesUpdateArgs} args - Arguments to update one Issues.
     * @example
     * // Update one Issues
     * const issues = await prisma.issues.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IssuesUpdateArgs>(args: SelectSubset<T, IssuesUpdateArgs<ExtArgs>>): Prisma__IssuesClient<$Result.GetResult<Prisma.$IssuesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Issues.
     * @param {IssuesDeleteManyArgs} args - Arguments to filter Issues to delete.
     * @example
     * // Delete a few Issues
     * const { count } = await prisma.issues.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IssuesDeleteManyArgs>(args?: SelectSubset<T, IssuesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssuesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Issues
     * const issues = await prisma.issues.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IssuesUpdateManyArgs>(args: SelectSubset<T, IssuesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Issues and returns the data updated in the database.
     * @param {IssuesUpdateManyAndReturnArgs} args - Arguments to update many Issues.
     * @example
     * // Update many Issues
     * const issues = await prisma.issues.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Issues and only return the `issueId`
     * const issuesWithIssueIdOnly = await prisma.issues.updateManyAndReturn({
     *   select: { issueId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IssuesUpdateManyAndReturnArgs>(args: SelectSubset<T, IssuesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Issues.
     * @param {IssuesUpsertArgs} args - Arguments to update or create a Issues.
     * @example
     * // Update or create a Issues
     * const issues = await prisma.issues.upsert({
     *   create: {
     *     // ... data to create a Issues
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Issues we want to update
     *   }
     * })
     */
    upsert<T extends IssuesUpsertArgs>(args: SelectSubset<T, IssuesUpsertArgs<ExtArgs>>): Prisma__IssuesClient<$Result.GetResult<Prisma.$IssuesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssuesCountArgs} args - Arguments to filter Issues to count.
     * @example
     * // Count the number of Issues
     * const count = await prisma.issues.count({
     *   where: {
     *     // ... the filter for the Issues we want to count
     *   }
     * })
    **/
    count<T extends IssuesCountArgs>(
      args?: Subset<T, IssuesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IssuesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssuesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IssuesAggregateArgs>(args: Subset<T, IssuesAggregateArgs>): Prisma.PrismaPromise<GetIssuesAggregateType<T>>

    /**
     * Group by Issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssuesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IssuesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IssuesGroupByArgs['orderBy'] }
        : { orderBy?: IssuesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IssuesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIssuesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Issues model
   */
  readonly fields: IssuesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Issues.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IssuesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    volume<T extends VolumeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VolumeDefaultArgs<ExtArgs>>): Prisma__VolumeClient<$Result.GetResult<Prisma.$VolumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Issues model
   */
  interface IssuesFieldRefs {
    readonly issueId: FieldRef<"Issues", 'Int'>
    readonly volumeId: FieldRef<"Issues", 'Int'>
    readonly startDate: FieldRef<"Issues", 'DateTime'>
    readonly endDate: FieldRef<"Issues", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Issues findUnique
   */
  export type IssuesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issues
     */
    select?: IssuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issues
     */
    omit?: IssuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuesInclude<ExtArgs> | null
    /**
     * Filter, which Issues to fetch.
     */
    where: IssuesWhereUniqueInput
  }

  /**
   * Issues findUniqueOrThrow
   */
  export type IssuesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issues
     */
    select?: IssuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issues
     */
    omit?: IssuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuesInclude<ExtArgs> | null
    /**
     * Filter, which Issues to fetch.
     */
    where: IssuesWhereUniqueInput
  }

  /**
   * Issues findFirst
   */
  export type IssuesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issues
     */
    select?: IssuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issues
     */
    omit?: IssuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuesInclude<ExtArgs> | null
    /**
     * Filter, which Issues to fetch.
     */
    where?: IssuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issues to fetch.
     */
    orderBy?: IssuesOrderByWithRelationInput | IssuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Issues.
     */
    cursor?: IssuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Issues.
     */
    distinct?: IssuesScalarFieldEnum | IssuesScalarFieldEnum[]
  }

  /**
   * Issues findFirstOrThrow
   */
  export type IssuesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issues
     */
    select?: IssuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issues
     */
    omit?: IssuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuesInclude<ExtArgs> | null
    /**
     * Filter, which Issues to fetch.
     */
    where?: IssuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issues to fetch.
     */
    orderBy?: IssuesOrderByWithRelationInput | IssuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Issues.
     */
    cursor?: IssuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Issues.
     */
    distinct?: IssuesScalarFieldEnum | IssuesScalarFieldEnum[]
  }

  /**
   * Issues findMany
   */
  export type IssuesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issues
     */
    select?: IssuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issues
     */
    omit?: IssuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuesInclude<ExtArgs> | null
    /**
     * Filter, which Issues to fetch.
     */
    where?: IssuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issues to fetch.
     */
    orderBy?: IssuesOrderByWithRelationInput | IssuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Issues.
     */
    cursor?: IssuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issues.
     */
    skip?: number
    distinct?: IssuesScalarFieldEnum | IssuesScalarFieldEnum[]
  }

  /**
   * Issues create
   */
  export type IssuesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issues
     */
    select?: IssuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issues
     */
    omit?: IssuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuesInclude<ExtArgs> | null
    /**
     * The data needed to create a Issues.
     */
    data: XOR<IssuesCreateInput, IssuesUncheckedCreateInput>
  }

  /**
   * Issues createMany
   */
  export type IssuesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Issues.
     */
    data: IssuesCreateManyInput | IssuesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Issues createManyAndReturn
   */
  export type IssuesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issues
     */
    select?: IssuesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Issues
     */
    omit?: IssuesOmit<ExtArgs> | null
    /**
     * The data used to create many Issues.
     */
    data: IssuesCreateManyInput | IssuesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Issues update
   */
  export type IssuesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issues
     */
    select?: IssuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issues
     */
    omit?: IssuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuesInclude<ExtArgs> | null
    /**
     * The data needed to update a Issues.
     */
    data: XOR<IssuesUpdateInput, IssuesUncheckedUpdateInput>
    /**
     * Choose, which Issues to update.
     */
    where: IssuesWhereUniqueInput
  }

  /**
   * Issues updateMany
   */
  export type IssuesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Issues.
     */
    data: XOR<IssuesUpdateManyMutationInput, IssuesUncheckedUpdateManyInput>
    /**
     * Filter which Issues to update
     */
    where?: IssuesWhereInput
    /**
     * Limit how many Issues to update.
     */
    limit?: number
  }

  /**
   * Issues updateManyAndReturn
   */
  export type IssuesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issues
     */
    select?: IssuesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Issues
     */
    omit?: IssuesOmit<ExtArgs> | null
    /**
     * The data used to update Issues.
     */
    data: XOR<IssuesUpdateManyMutationInput, IssuesUncheckedUpdateManyInput>
    /**
     * Filter which Issues to update
     */
    where?: IssuesWhereInput
    /**
     * Limit how many Issues to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Issues upsert
   */
  export type IssuesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issues
     */
    select?: IssuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issues
     */
    omit?: IssuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuesInclude<ExtArgs> | null
    /**
     * The filter to search for the Issues to update in case it exists.
     */
    where: IssuesWhereUniqueInput
    /**
     * In case the Issues found by the `where` argument doesn't exist, create a new Issues with this data.
     */
    create: XOR<IssuesCreateInput, IssuesUncheckedCreateInput>
    /**
     * In case the Issues was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IssuesUpdateInput, IssuesUncheckedUpdateInput>
  }

  /**
   * Issues delete
   */
  export type IssuesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issues
     */
    select?: IssuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issues
     */
    omit?: IssuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuesInclude<ExtArgs> | null
    /**
     * Filter which Issues to delete.
     */
    where: IssuesWhereUniqueInput
  }

  /**
   * Issues deleteMany
   */
  export type IssuesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Issues to delete
     */
    where?: IssuesWhereInput
    /**
     * Limit how many Issues to delete.
     */
    limit?: number
  }

  /**
   * Issues without action
   */
  export type IssuesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issues
     */
    select?: IssuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issues
     */
    omit?: IssuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuesInclude<ExtArgs> | null
  }


  /**
   * Model Author
   */

  export type AggregateAuthor = {
    _count: AuthorCountAggregateOutputType | null
    _avg: AuthorAvgAggregateOutputType | null
    _sum: AuthorSumAggregateOutputType | null
    _min: AuthorMinAggregateOutputType | null
    _max: AuthorMaxAggregateOutputType | null
  }

  export type AuthorAvgAggregateOutputType = {
    authorId: number | null
    thesisId: number | null
  }

  export type AuthorSumAggregateOutputType = {
    authorId: number | null
    thesisId: number | null
  }

  export type AuthorMinAggregateOutputType = {
    authorId: number | null
    name: string | null
    thesisId: number | null
  }

  export type AuthorMaxAggregateOutputType = {
    authorId: number | null
    name: string | null
    thesisId: number | null
  }

  export type AuthorCountAggregateOutputType = {
    authorId: number
    name: number
    thesisId: number
    _all: number
  }


  export type AuthorAvgAggregateInputType = {
    authorId?: true
    thesisId?: true
  }

  export type AuthorSumAggregateInputType = {
    authorId?: true
    thesisId?: true
  }

  export type AuthorMinAggregateInputType = {
    authorId?: true
    name?: true
    thesisId?: true
  }

  export type AuthorMaxAggregateInputType = {
    authorId?: true
    name?: true
    thesisId?: true
  }

  export type AuthorCountAggregateInputType = {
    authorId?: true
    name?: true
    thesisId?: true
    _all?: true
  }

  export type AuthorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Author to aggregate.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Authors
    **/
    _count?: true | AuthorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuthorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuthorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthorMaxAggregateInputType
  }

  export type GetAuthorAggregateType<T extends AuthorAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthor[P]>
      : GetScalarType<T[P], AggregateAuthor[P]>
  }




  export type AuthorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthorWhereInput
    orderBy?: AuthorOrderByWithAggregationInput | AuthorOrderByWithAggregationInput[]
    by: AuthorScalarFieldEnum[] | AuthorScalarFieldEnum
    having?: AuthorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthorCountAggregateInputType | true
    _avg?: AuthorAvgAggregateInputType
    _sum?: AuthorSumAggregateInputType
    _min?: AuthorMinAggregateInputType
    _max?: AuthorMaxAggregateInputType
  }

  export type AuthorGroupByOutputType = {
    authorId: number
    name: string
    thesisId: number
    _count: AuthorCountAggregateOutputType | null
    _avg: AuthorAvgAggregateOutputType | null
    _sum: AuthorSumAggregateOutputType | null
    _min: AuthorMinAggregateOutputType | null
    _max: AuthorMaxAggregateOutputType | null
  }

  type GetAuthorGroupByPayload<T extends AuthorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthorGroupByOutputType[P]>
            : GetScalarType<T[P], AuthorGroupByOutputType[P]>
        }
      >
    >


  export type AuthorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    authorId?: boolean
    name?: boolean
    thesisId?: boolean
    thesis?: boolean | ThesisDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["author"]>

  export type AuthorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    authorId?: boolean
    name?: boolean
    thesisId?: boolean
    thesis?: boolean | ThesisDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["author"]>

  export type AuthorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    authorId?: boolean
    name?: boolean
    thesisId?: boolean
    thesis?: boolean | ThesisDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["author"]>

  export type AuthorSelectScalar = {
    authorId?: boolean
    name?: boolean
    thesisId?: boolean
  }

  export type AuthorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"authorId" | "name" | "thesisId", ExtArgs["result"]["author"]>
  export type AuthorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    thesis?: boolean | ThesisDefaultArgs<ExtArgs>
  }
  export type AuthorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    thesis?: boolean | ThesisDefaultArgs<ExtArgs>
  }
  export type AuthorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    thesis?: boolean | ThesisDefaultArgs<ExtArgs>
  }

  export type $AuthorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Author"
    objects: {
      thesis: Prisma.$ThesisPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      authorId: number
      name: string
      thesisId: number
    }, ExtArgs["result"]["author"]>
    composites: {}
  }

  type AuthorGetPayload<S extends boolean | null | undefined | AuthorDefaultArgs> = $Result.GetResult<Prisma.$AuthorPayload, S>

  type AuthorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthorCountAggregateInputType | true
    }

  export interface AuthorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Author'], meta: { name: 'Author' } }
    /**
     * Find zero or one Author that matches the filter.
     * @param {AuthorFindUniqueArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthorFindUniqueArgs>(args: SelectSubset<T, AuthorFindUniqueArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Author that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthorFindUniqueOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthorFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Author that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindFirstArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthorFindFirstArgs>(args?: SelectSubset<T, AuthorFindFirstArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Author that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindFirstOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthorFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthorFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Authors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authors
     * const authors = await prisma.author.findMany()
     * 
     * // Get first 10 Authors
     * const authors = await prisma.author.findMany({ take: 10 })
     * 
     * // Only select the `authorId`
     * const authorWithAuthorIdOnly = await prisma.author.findMany({ select: { authorId: true } })
     * 
     */
    findMany<T extends AuthorFindManyArgs>(args?: SelectSubset<T, AuthorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Author.
     * @param {AuthorCreateArgs} args - Arguments to create a Author.
     * @example
     * // Create one Author
     * const Author = await prisma.author.create({
     *   data: {
     *     // ... data to create a Author
     *   }
     * })
     * 
     */
    create<T extends AuthorCreateArgs>(args: SelectSubset<T, AuthorCreateArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Authors.
     * @param {AuthorCreateManyArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const author = await prisma.author.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthorCreateManyArgs>(args?: SelectSubset<T, AuthorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Authors and returns the data saved in the database.
     * @param {AuthorCreateManyAndReturnArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const author = await prisma.author.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Authors and only return the `authorId`
     * const authorWithAuthorIdOnly = await prisma.author.createManyAndReturn({
     *   select: { authorId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthorCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Author.
     * @param {AuthorDeleteArgs} args - Arguments to delete one Author.
     * @example
     * // Delete one Author
     * const Author = await prisma.author.delete({
     *   where: {
     *     // ... filter to delete one Author
     *   }
     * })
     * 
     */
    delete<T extends AuthorDeleteArgs>(args: SelectSubset<T, AuthorDeleteArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Author.
     * @param {AuthorUpdateArgs} args - Arguments to update one Author.
     * @example
     * // Update one Author
     * const author = await prisma.author.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthorUpdateArgs>(args: SelectSubset<T, AuthorUpdateArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Authors.
     * @param {AuthorDeleteManyArgs} args - Arguments to filter Authors to delete.
     * @example
     * // Delete a few Authors
     * const { count } = await prisma.author.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthorDeleteManyArgs>(args?: SelectSubset<T, AuthorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authors
     * const author = await prisma.author.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthorUpdateManyArgs>(args: SelectSubset<T, AuthorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors and returns the data updated in the database.
     * @param {AuthorUpdateManyAndReturnArgs} args - Arguments to update many Authors.
     * @example
     * // Update many Authors
     * const author = await prisma.author.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Authors and only return the `authorId`
     * const authorWithAuthorIdOnly = await prisma.author.updateManyAndReturn({
     *   select: { authorId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuthorUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Author.
     * @param {AuthorUpsertArgs} args - Arguments to update or create a Author.
     * @example
     * // Update or create a Author
     * const author = await prisma.author.upsert({
     *   create: {
     *     // ... data to create a Author
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Author we want to update
     *   }
     * })
     */
    upsert<T extends AuthorUpsertArgs>(args: SelectSubset<T, AuthorUpsertArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorCountArgs} args - Arguments to filter Authors to count.
     * @example
     * // Count the number of Authors
     * const count = await prisma.author.count({
     *   where: {
     *     // ... the filter for the Authors we want to count
     *   }
     * })
    **/
    count<T extends AuthorCountArgs>(
      args?: Subset<T, AuthorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthorAggregateArgs>(args: Subset<T, AuthorAggregateArgs>): Prisma.PrismaPromise<GetAuthorAggregateType<T>>

    /**
     * Group by Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuthorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthorGroupByArgs['orderBy'] }
        : { orderBy?: AuthorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuthorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Author model
   */
  readonly fields: AuthorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Author.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    thesis<T extends ThesisDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ThesisDefaultArgs<ExtArgs>>): Prisma__ThesisClient<$Result.GetResult<Prisma.$ThesisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Author model
   */
  interface AuthorFieldRefs {
    readonly authorId: FieldRef<"Author", 'Int'>
    readonly name: FieldRef<"Author", 'String'>
    readonly thesisId: FieldRef<"Author", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Author findUnique
   */
  export type AuthorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author findUniqueOrThrow
   */
  export type AuthorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author findFirst
   */
  export type AuthorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authors.
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authors.
     */
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * Author findFirstOrThrow
   */
  export type AuthorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authors.
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authors.
     */
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * Author findMany
   */
  export type AuthorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Authors to fetch.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Authors.
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * Author create
   */
  export type AuthorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * The data needed to create a Author.
     */
    data: XOR<AuthorCreateInput, AuthorUncheckedCreateInput>
  }

  /**
   * Author createMany
   */
  export type AuthorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Authors.
     */
    data: AuthorCreateManyInput | AuthorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Author createManyAndReturn
   */
  export type AuthorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * The data used to create many Authors.
     */
    data: AuthorCreateManyInput | AuthorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Author update
   */
  export type AuthorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * The data needed to update a Author.
     */
    data: XOR<AuthorUpdateInput, AuthorUncheckedUpdateInput>
    /**
     * Choose, which Author to update.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author updateMany
   */
  export type AuthorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Authors.
     */
    data: XOR<AuthorUpdateManyMutationInput, AuthorUncheckedUpdateManyInput>
    /**
     * Filter which Authors to update
     */
    where?: AuthorWhereInput
    /**
     * Limit how many Authors to update.
     */
    limit?: number
  }

  /**
   * Author updateManyAndReturn
   */
  export type AuthorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * The data used to update Authors.
     */
    data: XOR<AuthorUpdateManyMutationInput, AuthorUncheckedUpdateManyInput>
    /**
     * Filter which Authors to update
     */
    where?: AuthorWhereInput
    /**
     * Limit how many Authors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Author upsert
   */
  export type AuthorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * The filter to search for the Author to update in case it exists.
     */
    where: AuthorWhereUniqueInput
    /**
     * In case the Author found by the `where` argument doesn't exist, create a new Author with this data.
     */
    create: XOR<AuthorCreateInput, AuthorUncheckedCreateInput>
    /**
     * In case the Author was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthorUpdateInput, AuthorUncheckedUpdateInput>
  }

  /**
   * Author delete
   */
  export type AuthorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter which Author to delete.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author deleteMany
   */
  export type AuthorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Authors to delete
     */
    where?: AuthorWhereInput
    /**
     * Limit how many Authors to delete.
     */
    limit?: number
  }

  /**
   * Author without action
   */
  export type AuthorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
  }


  /**
   * Model Action
   */

  export type AggregateAction = {
    _count: ActionCountAggregateOutputType | null
    _avg: ActionAvgAggregateOutputType | null
    _sum: ActionSumAggregateOutputType | null
    _min: ActionMinAggregateOutputType | null
    _max: ActionMaxAggregateOutputType | null
  }

  export type ActionAvgAggregateOutputType = {
    id: number | null
    thesisId: number | null
  }

  export type ActionSumAggregateOutputType = {
    id: number | null
    thesisId: number | null
  }

  export type ActionMinAggregateOutputType = {
    id: number | null
    thesisId: number | null
    remarks: string | null
  }

  export type ActionMaxAggregateOutputType = {
    id: number | null
    thesisId: number | null
    remarks: string | null
  }

  export type ActionCountAggregateOutputType = {
    id: number
    thesisId: number
    remarks: number
    _all: number
  }


  export type ActionAvgAggregateInputType = {
    id?: true
    thesisId?: true
  }

  export type ActionSumAggregateInputType = {
    id?: true
    thesisId?: true
  }

  export type ActionMinAggregateInputType = {
    id?: true
    thesisId?: true
    remarks?: true
  }

  export type ActionMaxAggregateInputType = {
    id?: true
    thesisId?: true
    remarks?: true
  }

  export type ActionCountAggregateInputType = {
    id?: true
    thesisId?: true
    remarks?: true
    _all?: true
  }

  export type ActionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Action to aggregate.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Actions
    **/
    _count?: true | ActionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActionMaxAggregateInputType
  }

  export type GetActionAggregateType<T extends ActionAggregateArgs> = {
        [P in keyof T & keyof AggregateAction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAction[P]>
      : GetScalarType<T[P], AggregateAction[P]>
  }




  export type ActionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionWhereInput
    orderBy?: ActionOrderByWithAggregationInput | ActionOrderByWithAggregationInput[]
    by: ActionScalarFieldEnum[] | ActionScalarFieldEnum
    having?: ActionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActionCountAggregateInputType | true
    _avg?: ActionAvgAggregateInputType
    _sum?: ActionSumAggregateInputType
    _min?: ActionMinAggregateInputType
    _max?: ActionMaxAggregateInputType
  }

  export type ActionGroupByOutputType = {
    id: number
    thesisId: number
    remarks: string
    _count: ActionCountAggregateOutputType | null
    _avg: ActionAvgAggregateOutputType | null
    _sum: ActionSumAggregateOutputType | null
    _min: ActionMinAggregateOutputType | null
    _max: ActionMaxAggregateOutputType | null
  }

  type GetActionGroupByPayload<T extends ActionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActionGroupByOutputType[P]>
            : GetScalarType<T[P], ActionGroupByOutputType[P]>
        }
      >
    >


  export type ActionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    thesisId?: boolean
    remarks?: boolean
    thesis?: boolean | ThesisDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["action"]>

  export type ActionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    thesisId?: boolean
    remarks?: boolean
    thesis?: boolean | ThesisDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["action"]>

  export type ActionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    thesisId?: boolean
    remarks?: boolean
    thesis?: boolean | ThesisDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["action"]>

  export type ActionSelectScalar = {
    id?: boolean
    thesisId?: boolean
    remarks?: boolean
  }

  export type ActionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "thesisId" | "remarks", ExtArgs["result"]["action"]>
  export type ActionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    thesis?: boolean | ThesisDefaultArgs<ExtArgs>
  }
  export type ActionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    thesis?: boolean | ThesisDefaultArgs<ExtArgs>
  }
  export type ActionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    thesis?: boolean | ThesisDefaultArgs<ExtArgs>
  }

  export type $ActionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Action"
    objects: {
      thesis: Prisma.$ThesisPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      thesisId: number
      remarks: string
    }, ExtArgs["result"]["action"]>
    composites: {}
  }

  type ActionGetPayload<S extends boolean | null | undefined | ActionDefaultArgs> = $Result.GetResult<Prisma.$ActionPayload, S>

  type ActionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActionCountAggregateInputType | true
    }

  export interface ActionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Action'], meta: { name: 'Action' } }
    /**
     * Find zero or one Action that matches the filter.
     * @param {ActionFindUniqueArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActionFindUniqueArgs>(args: SelectSubset<T, ActionFindUniqueArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Action that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActionFindUniqueOrThrowArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActionFindUniqueOrThrowArgs>(args: SelectSubset<T, ActionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Action that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFindFirstArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActionFindFirstArgs>(args?: SelectSubset<T, ActionFindFirstArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Action that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFindFirstOrThrowArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActionFindFirstOrThrowArgs>(args?: SelectSubset<T, ActionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Actions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Actions
     * const actions = await prisma.action.findMany()
     * 
     * // Get first 10 Actions
     * const actions = await prisma.action.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const actionWithIdOnly = await prisma.action.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActionFindManyArgs>(args?: SelectSubset<T, ActionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Action.
     * @param {ActionCreateArgs} args - Arguments to create a Action.
     * @example
     * // Create one Action
     * const Action = await prisma.action.create({
     *   data: {
     *     // ... data to create a Action
     *   }
     * })
     * 
     */
    create<T extends ActionCreateArgs>(args: SelectSubset<T, ActionCreateArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Actions.
     * @param {ActionCreateManyArgs} args - Arguments to create many Actions.
     * @example
     * // Create many Actions
     * const action = await prisma.action.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActionCreateManyArgs>(args?: SelectSubset<T, ActionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Actions and returns the data saved in the database.
     * @param {ActionCreateManyAndReturnArgs} args - Arguments to create many Actions.
     * @example
     * // Create many Actions
     * const action = await prisma.action.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Actions and only return the `id`
     * const actionWithIdOnly = await prisma.action.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActionCreateManyAndReturnArgs>(args?: SelectSubset<T, ActionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Action.
     * @param {ActionDeleteArgs} args - Arguments to delete one Action.
     * @example
     * // Delete one Action
     * const Action = await prisma.action.delete({
     *   where: {
     *     // ... filter to delete one Action
     *   }
     * })
     * 
     */
    delete<T extends ActionDeleteArgs>(args: SelectSubset<T, ActionDeleteArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Action.
     * @param {ActionUpdateArgs} args - Arguments to update one Action.
     * @example
     * // Update one Action
     * const action = await prisma.action.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActionUpdateArgs>(args: SelectSubset<T, ActionUpdateArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Actions.
     * @param {ActionDeleteManyArgs} args - Arguments to filter Actions to delete.
     * @example
     * // Delete a few Actions
     * const { count } = await prisma.action.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActionDeleteManyArgs>(args?: SelectSubset<T, ActionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Actions
     * const action = await prisma.action.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActionUpdateManyArgs>(args: SelectSubset<T, ActionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actions and returns the data updated in the database.
     * @param {ActionUpdateManyAndReturnArgs} args - Arguments to update many Actions.
     * @example
     * // Update many Actions
     * const action = await prisma.action.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Actions and only return the `id`
     * const actionWithIdOnly = await prisma.action.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActionUpdateManyAndReturnArgs>(args: SelectSubset<T, ActionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Action.
     * @param {ActionUpsertArgs} args - Arguments to update or create a Action.
     * @example
     * // Update or create a Action
     * const action = await prisma.action.upsert({
     *   create: {
     *     // ... data to create a Action
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Action we want to update
     *   }
     * })
     */
    upsert<T extends ActionUpsertArgs>(args: SelectSubset<T, ActionUpsertArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Actions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionCountArgs} args - Arguments to filter Actions to count.
     * @example
     * // Count the number of Actions
     * const count = await prisma.action.count({
     *   where: {
     *     // ... the filter for the Actions we want to count
     *   }
     * })
    **/
    count<T extends ActionCountArgs>(
      args?: Subset<T, ActionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Action.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActionAggregateArgs>(args: Subset<T, ActionAggregateArgs>): Prisma.PrismaPromise<GetActionAggregateType<T>>

    /**
     * Group by Action.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActionGroupByArgs['orderBy'] }
        : { orderBy?: ActionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Action model
   */
  readonly fields: ActionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Action.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    thesis<T extends ThesisDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ThesisDefaultArgs<ExtArgs>>): Prisma__ThesisClient<$Result.GetResult<Prisma.$ThesisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Action model
   */
  interface ActionFieldRefs {
    readonly id: FieldRef<"Action", 'Int'>
    readonly thesisId: FieldRef<"Action", 'Int'>
    readonly remarks: FieldRef<"Action", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Action findUnique
   */
  export type ActionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action findUniqueOrThrow
   */
  export type ActionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action findFirst
   */
  export type ActionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actions.
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actions.
     */
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * Action findFirstOrThrow
   */
  export type ActionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actions.
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actions.
     */
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * Action findMany
   */
  export type ActionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Actions to fetch.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Actions.
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * Action create
   */
  export type ActionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * The data needed to create a Action.
     */
    data: XOR<ActionCreateInput, ActionUncheckedCreateInput>
  }

  /**
   * Action createMany
   */
  export type ActionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Actions.
     */
    data: ActionCreateManyInput | ActionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Action createManyAndReturn
   */
  export type ActionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * The data used to create many Actions.
     */
    data: ActionCreateManyInput | ActionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Action update
   */
  export type ActionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * The data needed to update a Action.
     */
    data: XOR<ActionUpdateInput, ActionUncheckedUpdateInput>
    /**
     * Choose, which Action to update.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action updateMany
   */
  export type ActionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Actions.
     */
    data: XOR<ActionUpdateManyMutationInput, ActionUncheckedUpdateManyInput>
    /**
     * Filter which Actions to update
     */
    where?: ActionWhereInput
    /**
     * Limit how many Actions to update.
     */
    limit?: number
  }

  /**
   * Action updateManyAndReturn
   */
  export type ActionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * The data used to update Actions.
     */
    data: XOR<ActionUpdateManyMutationInput, ActionUncheckedUpdateManyInput>
    /**
     * Filter which Actions to update
     */
    where?: ActionWhereInput
    /**
     * Limit how many Actions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Action upsert
   */
  export type ActionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * The filter to search for the Action to update in case it exists.
     */
    where: ActionWhereUniqueInput
    /**
     * In case the Action found by the `where` argument doesn't exist, create a new Action with this data.
     */
    create: XOR<ActionCreateInput, ActionUncheckedCreateInput>
    /**
     * In case the Action was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActionUpdateInput, ActionUncheckedUpdateInput>
  }

  /**
   * Action delete
   */
  export type ActionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter which Action to delete.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action deleteMany
   */
  export type ActionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Actions to delete
     */
    where?: ActionWhereInput
    /**
     * Limit how many Actions to delete.
     */
    limit?: number
  }

  /**
   * Action without action
   */
  export type ActionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    userId: 'userId',
    email: 'email',
    name: 'name',
    password: 'password',
    type: 'type'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ThesisScalarFieldEnum: {
    thesisId: 'thesisId',
    title: 'title',
    abstract: 'abstract',
    primaryAuthor: 'primaryAuthor',
    file: 'file',
    status: 'status',
    volumeId: 'volumeId',
    actionDate: 'actionDate',
    uploadedBy: 'uploadedBy'
  };

  export type ThesisScalarFieldEnum = (typeof ThesisScalarFieldEnum)[keyof typeof ThesisScalarFieldEnum]


  export const VolumeScalarFieldEnum: {
    volumeId: 'volumeId',
    volName: 'volName'
  };

  export type VolumeScalarFieldEnum = (typeof VolumeScalarFieldEnum)[keyof typeof VolumeScalarFieldEnum]


  export const IssuesScalarFieldEnum: {
    issueId: 'issueId',
    volumeId: 'volumeId',
    startDate: 'startDate',
    endDate: 'endDate'
  };

  export type IssuesScalarFieldEnum = (typeof IssuesScalarFieldEnum)[keyof typeof IssuesScalarFieldEnum]


  export const AuthorScalarFieldEnum: {
    authorId: 'authorId',
    name: 'name',
    thesisId: 'thesisId'
  };

  export type AuthorScalarFieldEnum = (typeof AuthorScalarFieldEnum)[keyof typeof AuthorScalarFieldEnum]


  export const ActionScalarFieldEnum: {
    id: 'id',
    thesisId: 'thesisId',
    remarks: 'remarks'
  };

  export type ActionScalarFieldEnum = (typeof ActionScalarFieldEnum)[keyof typeof ActionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserType'
   */
  export type EnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType'>
    


  /**
   * Reference to a field of type 'UserType[]'
   */
  export type ListEnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userId?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    type?: EnumUserTypeFilter<"User"> | $Enums.UserType
    thesis?: ThesisListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    userId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    type?: SortOrder
    thesis?: ThesisOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    userId?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    type?: EnumUserTypeFilter<"User"> | $Enums.UserType
    thesis?: ThesisListRelationFilter
  }, "userId" | "email">

  export type UserOrderByWithAggregationInput = {
    userId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    type?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    type?: EnumUserTypeWithAggregatesFilter<"User"> | $Enums.UserType
  }

  export type ThesisWhereInput = {
    AND?: ThesisWhereInput | ThesisWhereInput[]
    OR?: ThesisWhereInput[]
    NOT?: ThesisWhereInput | ThesisWhereInput[]
    thesisId?: IntFilter<"Thesis"> | number
    title?: StringFilter<"Thesis"> | string
    abstract?: StringFilter<"Thesis"> | string
    primaryAuthor?: StringFilter<"Thesis"> | string
    file?: StringFilter<"Thesis"> | string
    status?: EnumStatusFilter<"Thesis"> | $Enums.Status
    volumeId?: IntFilter<"Thesis"> | number
    actionDate?: DateTimeFilter<"Thesis"> | Date | string
    uploadedBy?: IntFilter<"Thesis"> | number
    volume?: XOR<VolumeScalarRelationFilter, VolumeWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    authors?: AuthorListRelationFilter
    action?: XOR<ActionNullableScalarRelationFilter, ActionWhereInput> | null
  }

  export type ThesisOrderByWithRelationInput = {
    thesisId?: SortOrder
    title?: SortOrder
    abstract?: SortOrder
    primaryAuthor?: SortOrder
    file?: SortOrder
    status?: SortOrder
    volumeId?: SortOrder
    actionDate?: SortOrder
    uploadedBy?: SortOrder
    volume?: VolumeOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    authors?: AuthorOrderByRelationAggregateInput
    action?: ActionOrderByWithRelationInput
  }

  export type ThesisWhereUniqueInput = Prisma.AtLeast<{
    thesisId?: number
    AND?: ThesisWhereInput | ThesisWhereInput[]
    OR?: ThesisWhereInput[]
    NOT?: ThesisWhereInput | ThesisWhereInput[]
    title?: StringFilter<"Thesis"> | string
    abstract?: StringFilter<"Thesis"> | string
    primaryAuthor?: StringFilter<"Thesis"> | string
    file?: StringFilter<"Thesis"> | string
    status?: EnumStatusFilter<"Thesis"> | $Enums.Status
    volumeId?: IntFilter<"Thesis"> | number
    actionDate?: DateTimeFilter<"Thesis"> | Date | string
    uploadedBy?: IntFilter<"Thesis"> | number
    volume?: XOR<VolumeScalarRelationFilter, VolumeWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    authors?: AuthorListRelationFilter
    action?: XOR<ActionNullableScalarRelationFilter, ActionWhereInput> | null
  }, "thesisId">

  export type ThesisOrderByWithAggregationInput = {
    thesisId?: SortOrder
    title?: SortOrder
    abstract?: SortOrder
    primaryAuthor?: SortOrder
    file?: SortOrder
    status?: SortOrder
    volumeId?: SortOrder
    actionDate?: SortOrder
    uploadedBy?: SortOrder
    _count?: ThesisCountOrderByAggregateInput
    _avg?: ThesisAvgOrderByAggregateInput
    _max?: ThesisMaxOrderByAggregateInput
    _min?: ThesisMinOrderByAggregateInput
    _sum?: ThesisSumOrderByAggregateInput
  }

  export type ThesisScalarWhereWithAggregatesInput = {
    AND?: ThesisScalarWhereWithAggregatesInput | ThesisScalarWhereWithAggregatesInput[]
    OR?: ThesisScalarWhereWithAggregatesInput[]
    NOT?: ThesisScalarWhereWithAggregatesInput | ThesisScalarWhereWithAggregatesInput[]
    thesisId?: IntWithAggregatesFilter<"Thesis"> | number
    title?: StringWithAggregatesFilter<"Thesis"> | string
    abstract?: StringWithAggregatesFilter<"Thesis"> | string
    primaryAuthor?: StringWithAggregatesFilter<"Thesis"> | string
    file?: StringWithAggregatesFilter<"Thesis"> | string
    status?: EnumStatusWithAggregatesFilter<"Thesis"> | $Enums.Status
    volumeId?: IntWithAggregatesFilter<"Thesis"> | number
    actionDate?: DateTimeWithAggregatesFilter<"Thesis"> | Date | string
    uploadedBy?: IntWithAggregatesFilter<"Thesis"> | number
  }

  export type VolumeWhereInput = {
    AND?: VolumeWhereInput | VolumeWhereInput[]
    OR?: VolumeWhereInput[]
    NOT?: VolumeWhereInput | VolumeWhereInput[]
    volumeId?: IntFilter<"Volume"> | number
    volName?: StringFilter<"Volume"> | string
    issues?: IssuesListRelationFilter
    Thesis?: ThesisListRelationFilter
  }

  export type VolumeOrderByWithRelationInput = {
    volumeId?: SortOrder
    volName?: SortOrder
    issues?: IssuesOrderByRelationAggregateInput
    Thesis?: ThesisOrderByRelationAggregateInput
  }

  export type VolumeWhereUniqueInput = Prisma.AtLeast<{
    volumeId?: number
    AND?: VolumeWhereInput | VolumeWhereInput[]
    OR?: VolumeWhereInput[]
    NOT?: VolumeWhereInput | VolumeWhereInput[]
    volName?: StringFilter<"Volume"> | string
    issues?: IssuesListRelationFilter
    Thesis?: ThesisListRelationFilter
  }, "volumeId">

  export type VolumeOrderByWithAggregationInput = {
    volumeId?: SortOrder
    volName?: SortOrder
    _count?: VolumeCountOrderByAggregateInput
    _avg?: VolumeAvgOrderByAggregateInput
    _max?: VolumeMaxOrderByAggregateInput
    _min?: VolumeMinOrderByAggregateInput
    _sum?: VolumeSumOrderByAggregateInput
  }

  export type VolumeScalarWhereWithAggregatesInput = {
    AND?: VolumeScalarWhereWithAggregatesInput | VolumeScalarWhereWithAggregatesInput[]
    OR?: VolumeScalarWhereWithAggregatesInput[]
    NOT?: VolumeScalarWhereWithAggregatesInput | VolumeScalarWhereWithAggregatesInput[]
    volumeId?: IntWithAggregatesFilter<"Volume"> | number
    volName?: StringWithAggregatesFilter<"Volume"> | string
  }

  export type IssuesWhereInput = {
    AND?: IssuesWhereInput | IssuesWhereInput[]
    OR?: IssuesWhereInput[]
    NOT?: IssuesWhereInput | IssuesWhereInput[]
    issueId?: IntFilter<"Issues"> | number
    volumeId?: IntFilter<"Issues"> | number
    startDate?: DateTimeFilter<"Issues"> | Date | string
    endDate?: DateTimeNullableFilter<"Issues"> | Date | string | null
    volume?: XOR<VolumeScalarRelationFilter, VolumeWhereInput>
  }

  export type IssuesOrderByWithRelationInput = {
    issueId?: SortOrder
    volumeId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    volume?: VolumeOrderByWithRelationInput
  }

  export type IssuesWhereUniqueInput = Prisma.AtLeast<{
    issueId?: number
    AND?: IssuesWhereInput | IssuesWhereInput[]
    OR?: IssuesWhereInput[]
    NOT?: IssuesWhereInput | IssuesWhereInput[]
    volumeId?: IntFilter<"Issues"> | number
    startDate?: DateTimeFilter<"Issues"> | Date | string
    endDate?: DateTimeNullableFilter<"Issues"> | Date | string | null
    volume?: XOR<VolumeScalarRelationFilter, VolumeWhereInput>
  }, "issueId">

  export type IssuesOrderByWithAggregationInput = {
    issueId?: SortOrder
    volumeId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    _count?: IssuesCountOrderByAggregateInput
    _avg?: IssuesAvgOrderByAggregateInput
    _max?: IssuesMaxOrderByAggregateInput
    _min?: IssuesMinOrderByAggregateInput
    _sum?: IssuesSumOrderByAggregateInput
  }

  export type IssuesScalarWhereWithAggregatesInput = {
    AND?: IssuesScalarWhereWithAggregatesInput | IssuesScalarWhereWithAggregatesInput[]
    OR?: IssuesScalarWhereWithAggregatesInput[]
    NOT?: IssuesScalarWhereWithAggregatesInput | IssuesScalarWhereWithAggregatesInput[]
    issueId?: IntWithAggregatesFilter<"Issues"> | number
    volumeId?: IntWithAggregatesFilter<"Issues"> | number
    startDate?: DateTimeWithAggregatesFilter<"Issues"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Issues"> | Date | string | null
  }

  export type AuthorWhereInput = {
    AND?: AuthorWhereInput | AuthorWhereInput[]
    OR?: AuthorWhereInput[]
    NOT?: AuthorWhereInput | AuthorWhereInput[]
    authorId?: IntFilter<"Author"> | number
    name?: StringFilter<"Author"> | string
    thesisId?: IntFilter<"Author"> | number
    thesis?: XOR<ThesisScalarRelationFilter, ThesisWhereInput>
  }

  export type AuthorOrderByWithRelationInput = {
    authorId?: SortOrder
    name?: SortOrder
    thesisId?: SortOrder
    thesis?: ThesisOrderByWithRelationInput
  }

  export type AuthorWhereUniqueInput = Prisma.AtLeast<{
    authorId?: number
    AND?: AuthorWhereInput | AuthorWhereInput[]
    OR?: AuthorWhereInput[]
    NOT?: AuthorWhereInput | AuthorWhereInput[]
    name?: StringFilter<"Author"> | string
    thesisId?: IntFilter<"Author"> | number
    thesis?: XOR<ThesisScalarRelationFilter, ThesisWhereInput>
  }, "authorId">

  export type AuthorOrderByWithAggregationInput = {
    authorId?: SortOrder
    name?: SortOrder
    thesisId?: SortOrder
    _count?: AuthorCountOrderByAggregateInput
    _avg?: AuthorAvgOrderByAggregateInput
    _max?: AuthorMaxOrderByAggregateInput
    _min?: AuthorMinOrderByAggregateInput
    _sum?: AuthorSumOrderByAggregateInput
  }

  export type AuthorScalarWhereWithAggregatesInput = {
    AND?: AuthorScalarWhereWithAggregatesInput | AuthorScalarWhereWithAggregatesInput[]
    OR?: AuthorScalarWhereWithAggregatesInput[]
    NOT?: AuthorScalarWhereWithAggregatesInput | AuthorScalarWhereWithAggregatesInput[]
    authorId?: IntWithAggregatesFilter<"Author"> | number
    name?: StringWithAggregatesFilter<"Author"> | string
    thesisId?: IntWithAggregatesFilter<"Author"> | number
  }

  export type ActionWhereInput = {
    AND?: ActionWhereInput | ActionWhereInput[]
    OR?: ActionWhereInput[]
    NOT?: ActionWhereInput | ActionWhereInput[]
    id?: IntFilter<"Action"> | number
    thesisId?: IntFilter<"Action"> | number
    remarks?: StringFilter<"Action"> | string
    thesis?: XOR<ThesisScalarRelationFilter, ThesisWhereInput>
  }

  export type ActionOrderByWithRelationInput = {
    id?: SortOrder
    thesisId?: SortOrder
    remarks?: SortOrder
    thesis?: ThesisOrderByWithRelationInput
  }

  export type ActionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    thesisId?: number
    AND?: ActionWhereInput | ActionWhereInput[]
    OR?: ActionWhereInput[]
    NOT?: ActionWhereInput | ActionWhereInput[]
    remarks?: StringFilter<"Action"> | string
    thesis?: XOR<ThesisScalarRelationFilter, ThesisWhereInput>
  }, "id" | "thesisId">

  export type ActionOrderByWithAggregationInput = {
    id?: SortOrder
    thesisId?: SortOrder
    remarks?: SortOrder
    _count?: ActionCountOrderByAggregateInput
    _avg?: ActionAvgOrderByAggregateInput
    _max?: ActionMaxOrderByAggregateInput
    _min?: ActionMinOrderByAggregateInput
    _sum?: ActionSumOrderByAggregateInput
  }

  export type ActionScalarWhereWithAggregatesInput = {
    AND?: ActionScalarWhereWithAggregatesInput | ActionScalarWhereWithAggregatesInput[]
    OR?: ActionScalarWhereWithAggregatesInput[]
    NOT?: ActionScalarWhereWithAggregatesInput | ActionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Action"> | number
    thesisId?: IntWithAggregatesFilter<"Action"> | number
    remarks?: StringWithAggregatesFilter<"Action"> | string
  }

  export type UserCreateInput = {
    email: string
    name: string
    password: string
    type?: $Enums.UserType
    thesis?: ThesisCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    userId?: number
    email: string
    name: string
    password: string
    type?: $Enums.UserType
    thesis?: ThesisUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    thesis?: ThesisUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    thesis?: ThesisUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    userId?: number
    email: string
    name: string
    password: string
    type?: $Enums.UserType
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
  }

  export type UserUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
  }

  export type ThesisCreateInput = {
    title: string
    abstract: string
    primaryAuthor: string
    file: string
    status?: $Enums.Status
    actionDate: Date | string
    volume: VolumeCreateNestedOneWithoutThesisInput
    user: UserCreateNestedOneWithoutThesisInput
    authors?: AuthorCreateNestedManyWithoutThesisInput
    action?: ActionCreateNestedOneWithoutThesisInput
  }

  export type ThesisUncheckedCreateInput = {
    thesisId?: number
    title: string
    abstract: string
    primaryAuthor: string
    file: string
    status?: $Enums.Status
    volumeId: number
    actionDate: Date | string
    uploadedBy: number
    authors?: AuthorUncheckedCreateNestedManyWithoutThesisInput
    action?: ActionUncheckedCreateNestedOneWithoutThesisInput
  }

  export type ThesisUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    primaryAuthor?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    actionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    volume?: VolumeUpdateOneRequiredWithoutThesisNestedInput
    user?: UserUpdateOneRequiredWithoutThesisNestedInput
    authors?: AuthorUpdateManyWithoutThesisNestedInput
    action?: ActionUpdateOneWithoutThesisNestedInput
  }

  export type ThesisUncheckedUpdateInput = {
    thesisId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    primaryAuthor?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    volumeId?: IntFieldUpdateOperationsInput | number
    actionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedBy?: IntFieldUpdateOperationsInput | number
    authors?: AuthorUncheckedUpdateManyWithoutThesisNestedInput
    action?: ActionUncheckedUpdateOneWithoutThesisNestedInput
  }

  export type ThesisCreateManyInput = {
    thesisId?: number
    title: string
    abstract: string
    primaryAuthor: string
    file: string
    status?: $Enums.Status
    volumeId: number
    actionDate: Date | string
    uploadedBy: number
  }

  export type ThesisUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    primaryAuthor?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    actionDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThesisUncheckedUpdateManyInput = {
    thesisId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    primaryAuthor?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    volumeId?: IntFieldUpdateOperationsInput | number
    actionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedBy?: IntFieldUpdateOperationsInput | number
  }

  export type VolumeCreateInput = {
    volName: string
    issues?: IssuesCreateNestedManyWithoutVolumeInput
    Thesis?: ThesisCreateNestedManyWithoutVolumeInput
  }

  export type VolumeUncheckedCreateInput = {
    volumeId?: number
    volName: string
    issues?: IssuesUncheckedCreateNestedManyWithoutVolumeInput
    Thesis?: ThesisUncheckedCreateNestedManyWithoutVolumeInput
  }

  export type VolumeUpdateInput = {
    volName?: StringFieldUpdateOperationsInput | string
    issues?: IssuesUpdateManyWithoutVolumeNestedInput
    Thesis?: ThesisUpdateManyWithoutVolumeNestedInput
  }

  export type VolumeUncheckedUpdateInput = {
    volumeId?: IntFieldUpdateOperationsInput | number
    volName?: StringFieldUpdateOperationsInput | string
    issues?: IssuesUncheckedUpdateManyWithoutVolumeNestedInput
    Thesis?: ThesisUncheckedUpdateManyWithoutVolumeNestedInput
  }

  export type VolumeCreateManyInput = {
    volumeId?: number
    volName: string
  }

  export type VolumeUpdateManyMutationInput = {
    volName?: StringFieldUpdateOperationsInput | string
  }

  export type VolumeUncheckedUpdateManyInput = {
    volumeId?: IntFieldUpdateOperationsInput | number
    volName?: StringFieldUpdateOperationsInput | string
  }

  export type IssuesCreateInput = {
    startDate?: Date | string
    endDate?: Date | string | null
    volume: VolumeCreateNestedOneWithoutIssuesInput
  }

  export type IssuesUncheckedCreateInput = {
    issueId?: number
    volumeId: number
    startDate?: Date | string
    endDate?: Date | string | null
  }

  export type IssuesUpdateInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    volume?: VolumeUpdateOneRequiredWithoutIssuesNestedInput
  }

  export type IssuesUncheckedUpdateInput = {
    issueId?: IntFieldUpdateOperationsInput | number
    volumeId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IssuesCreateManyInput = {
    issueId?: number
    volumeId: number
    startDate?: Date | string
    endDate?: Date | string | null
  }

  export type IssuesUpdateManyMutationInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IssuesUncheckedUpdateManyInput = {
    issueId?: IntFieldUpdateOperationsInput | number
    volumeId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AuthorCreateInput = {
    name: string
    thesis: ThesisCreateNestedOneWithoutAuthorsInput
  }

  export type AuthorUncheckedCreateInput = {
    authorId?: number
    name: string
    thesisId: number
  }

  export type AuthorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    thesis?: ThesisUpdateOneRequiredWithoutAuthorsNestedInput
  }

  export type AuthorUncheckedUpdateInput = {
    authorId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    thesisId?: IntFieldUpdateOperationsInput | number
  }

  export type AuthorCreateManyInput = {
    authorId?: number
    name: string
    thesisId: number
  }

  export type AuthorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AuthorUncheckedUpdateManyInput = {
    authorId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    thesisId?: IntFieldUpdateOperationsInput | number
  }

  export type ActionCreateInput = {
    remarks: string
    thesis: ThesisCreateNestedOneWithoutActionInput
  }

  export type ActionUncheckedCreateInput = {
    id?: number
    thesisId: number
    remarks: string
  }

  export type ActionUpdateInput = {
    remarks?: StringFieldUpdateOperationsInput | string
    thesis?: ThesisUpdateOneRequiredWithoutActionNestedInput
  }

  export type ActionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    thesisId?: IntFieldUpdateOperationsInput | number
    remarks?: StringFieldUpdateOperationsInput | string
  }

  export type ActionCreateManyInput = {
    id?: number
    thesisId: number
    remarks: string
  }

  export type ActionUpdateManyMutationInput = {
    remarks?: StringFieldUpdateOperationsInput | string
  }

  export type ActionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    thesisId?: IntFieldUpdateOperationsInput | number
    remarks?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type ThesisListRelationFilter = {
    every?: ThesisWhereInput
    some?: ThesisWhereInput
    none?: ThesisWhereInput
  }

  export type ThesisOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    userId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    type?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    userId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    type?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    userId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    type?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type VolumeScalarRelationFilter = {
    is?: VolumeWhereInput
    isNot?: VolumeWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AuthorListRelationFilter = {
    every?: AuthorWhereInput
    some?: AuthorWhereInput
    none?: AuthorWhereInput
  }

  export type ActionNullableScalarRelationFilter = {
    is?: ActionWhereInput | null
    isNot?: ActionWhereInput | null
  }

  export type AuthorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ThesisCountOrderByAggregateInput = {
    thesisId?: SortOrder
    title?: SortOrder
    abstract?: SortOrder
    primaryAuthor?: SortOrder
    file?: SortOrder
    status?: SortOrder
    volumeId?: SortOrder
    actionDate?: SortOrder
    uploadedBy?: SortOrder
  }

  export type ThesisAvgOrderByAggregateInput = {
    thesisId?: SortOrder
    volumeId?: SortOrder
    uploadedBy?: SortOrder
  }

  export type ThesisMaxOrderByAggregateInput = {
    thesisId?: SortOrder
    title?: SortOrder
    abstract?: SortOrder
    primaryAuthor?: SortOrder
    file?: SortOrder
    status?: SortOrder
    volumeId?: SortOrder
    actionDate?: SortOrder
    uploadedBy?: SortOrder
  }

  export type ThesisMinOrderByAggregateInput = {
    thesisId?: SortOrder
    title?: SortOrder
    abstract?: SortOrder
    primaryAuthor?: SortOrder
    file?: SortOrder
    status?: SortOrder
    volumeId?: SortOrder
    actionDate?: SortOrder
    uploadedBy?: SortOrder
  }

  export type ThesisSumOrderByAggregateInput = {
    thesisId?: SortOrder
    volumeId?: SortOrder
    uploadedBy?: SortOrder
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IssuesListRelationFilter = {
    every?: IssuesWhereInput
    some?: IssuesWhereInput
    none?: IssuesWhereInput
  }

  export type IssuesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VolumeCountOrderByAggregateInput = {
    volumeId?: SortOrder
    volName?: SortOrder
  }

  export type VolumeAvgOrderByAggregateInput = {
    volumeId?: SortOrder
  }

  export type VolumeMaxOrderByAggregateInput = {
    volumeId?: SortOrder
    volName?: SortOrder
  }

  export type VolumeMinOrderByAggregateInput = {
    volumeId?: SortOrder
    volName?: SortOrder
  }

  export type VolumeSumOrderByAggregateInput = {
    volumeId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type IssuesCountOrderByAggregateInput = {
    issueId?: SortOrder
    volumeId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type IssuesAvgOrderByAggregateInput = {
    issueId?: SortOrder
    volumeId?: SortOrder
  }

  export type IssuesMaxOrderByAggregateInput = {
    issueId?: SortOrder
    volumeId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type IssuesMinOrderByAggregateInput = {
    issueId?: SortOrder
    volumeId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type IssuesSumOrderByAggregateInput = {
    issueId?: SortOrder
    volumeId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ThesisScalarRelationFilter = {
    is?: ThesisWhereInput
    isNot?: ThesisWhereInput
  }

  export type AuthorCountOrderByAggregateInput = {
    authorId?: SortOrder
    name?: SortOrder
    thesisId?: SortOrder
  }

  export type AuthorAvgOrderByAggregateInput = {
    authorId?: SortOrder
    thesisId?: SortOrder
  }

  export type AuthorMaxOrderByAggregateInput = {
    authorId?: SortOrder
    name?: SortOrder
    thesisId?: SortOrder
  }

  export type AuthorMinOrderByAggregateInput = {
    authorId?: SortOrder
    name?: SortOrder
    thesisId?: SortOrder
  }

  export type AuthorSumOrderByAggregateInput = {
    authorId?: SortOrder
    thesisId?: SortOrder
  }

  export type ActionCountOrderByAggregateInput = {
    id?: SortOrder
    thesisId?: SortOrder
    remarks?: SortOrder
  }

  export type ActionAvgOrderByAggregateInput = {
    id?: SortOrder
    thesisId?: SortOrder
  }

  export type ActionMaxOrderByAggregateInput = {
    id?: SortOrder
    thesisId?: SortOrder
    remarks?: SortOrder
  }

  export type ActionMinOrderByAggregateInput = {
    id?: SortOrder
    thesisId?: SortOrder
    remarks?: SortOrder
  }

  export type ActionSumOrderByAggregateInput = {
    id?: SortOrder
    thesisId?: SortOrder
  }

  export type ThesisCreateNestedManyWithoutUserInput = {
    create?: XOR<ThesisCreateWithoutUserInput, ThesisUncheckedCreateWithoutUserInput> | ThesisCreateWithoutUserInput[] | ThesisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ThesisCreateOrConnectWithoutUserInput | ThesisCreateOrConnectWithoutUserInput[]
    createMany?: ThesisCreateManyUserInputEnvelope
    connect?: ThesisWhereUniqueInput | ThesisWhereUniqueInput[]
  }

  export type ThesisUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ThesisCreateWithoutUserInput, ThesisUncheckedCreateWithoutUserInput> | ThesisCreateWithoutUserInput[] | ThesisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ThesisCreateOrConnectWithoutUserInput | ThesisCreateOrConnectWithoutUserInput[]
    createMany?: ThesisCreateManyUserInputEnvelope
    connect?: ThesisWhereUniqueInput | ThesisWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserTypeFieldUpdateOperationsInput = {
    set?: $Enums.UserType
  }

  export type ThesisUpdateManyWithoutUserNestedInput = {
    create?: XOR<ThesisCreateWithoutUserInput, ThesisUncheckedCreateWithoutUserInput> | ThesisCreateWithoutUserInput[] | ThesisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ThesisCreateOrConnectWithoutUserInput | ThesisCreateOrConnectWithoutUserInput[]
    upsert?: ThesisUpsertWithWhereUniqueWithoutUserInput | ThesisUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ThesisCreateManyUserInputEnvelope
    set?: ThesisWhereUniqueInput | ThesisWhereUniqueInput[]
    disconnect?: ThesisWhereUniqueInput | ThesisWhereUniqueInput[]
    delete?: ThesisWhereUniqueInput | ThesisWhereUniqueInput[]
    connect?: ThesisWhereUniqueInput | ThesisWhereUniqueInput[]
    update?: ThesisUpdateWithWhereUniqueWithoutUserInput | ThesisUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ThesisUpdateManyWithWhereWithoutUserInput | ThesisUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ThesisScalarWhereInput | ThesisScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ThesisUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ThesisCreateWithoutUserInput, ThesisUncheckedCreateWithoutUserInput> | ThesisCreateWithoutUserInput[] | ThesisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ThesisCreateOrConnectWithoutUserInput | ThesisCreateOrConnectWithoutUserInput[]
    upsert?: ThesisUpsertWithWhereUniqueWithoutUserInput | ThesisUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ThesisCreateManyUserInputEnvelope
    set?: ThesisWhereUniqueInput | ThesisWhereUniqueInput[]
    disconnect?: ThesisWhereUniqueInput | ThesisWhereUniqueInput[]
    delete?: ThesisWhereUniqueInput | ThesisWhereUniqueInput[]
    connect?: ThesisWhereUniqueInput | ThesisWhereUniqueInput[]
    update?: ThesisUpdateWithWhereUniqueWithoutUserInput | ThesisUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ThesisUpdateManyWithWhereWithoutUserInput | ThesisUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ThesisScalarWhereInput | ThesisScalarWhereInput[]
  }

  export type VolumeCreateNestedOneWithoutThesisInput = {
    create?: XOR<VolumeCreateWithoutThesisInput, VolumeUncheckedCreateWithoutThesisInput>
    connectOrCreate?: VolumeCreateOrConnectWithoutThesisInput
    connect?: VolumeWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutThesisInput = {
    create?: XOR<UserCreateWithoutThesisInput, UserUncheckedCreateWithoutThesisInput>
    connectOrCreate?: UserCreateOrConnectWithoutThesisInput
    connect?: UserWhereUniqueInput
  }

  export type AuthorCreateNestedManyWithoutThesisInput = {
    create?: XOR<AuthorCreateWithoutThesisInput, AuthorUncheckedCreateWithoutThesisInput> | AuthorCreateWithoutThesisInput[] | AuthorUncheckedCreateWithoutThesisInput[]
    connectOrCreate?: AuthorCreateOrConnectWithoutThesisInput | AuthorCreateOrConnectWithoutThesisInput[]
    createMany?: AuthorCreateManyThesisInputEnvelope
    connect?: AuthorWhereUniqueInput | AuthorWhereUniqueInput[]
  }

  export type ActionCreateNestedOneWithoutThesisInput = {
    create?: XOR<ActionCreateWithoutThesisInput, ActionUncheckedCreateWithoutThesisInput>
    connectOrCreate?: ActionCreateOrConnectWithoutThesisInput
    connect?: ActionWhereUniqueInput
  }

  export type AuthorUncheckedCreateNestedManyWithoutThesisInput = {
    create?: XOR<AuthorCreateWithoutThesisInput, AuthorUncheckedCreateWithoutThesisInput> | AuthorCreateWithoutThesisInput[] | AuthorUncheckedCreateWithoutThesisInput[]
    connectOrCreate?: AuthorCreateOrConnectWithoutThesisInput | AuthorCreateOrConnectWithoutThesisInput[]
    createMany?: AuthorCreateManyThesisInputEnvelope
    connect?: AuthorWhereUniqueInput | AuthorWhereUniqueInput[]
  }

  export type ActionUncheckedCreateNestedOneWithoutThesisInput = {
    create?: XOR<ActionCreateWithoutThesisInput, ActionUncheckedCreateWithoutThesisInput>
    connectOrCreate?: ActionCreateOrConnectWithoutThesisInput
    connect?: ActionWhereUniqueInput
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VolumeUpdateOneRequiredWithoutThesisNestedInput = {
    create?: XOR<VolumeCreateWithoutThesisInput, VolumeUncheckedCreateWithoutThesisInput>
    connectOrCreate?: VolumeCreateOrConnectWithoutThesisInput
    upsert?: VolumeUpsertWithoutThesisInput
    connect?: VolumeWhereUniqueInput
    update?: XOR<XOR<VolumeUpdateToOneWithWhereWithoutThesisInput, VolumeUpdateWithoutThesisInput>, VolumeUncheckedUpdateWithoutThesisInput>
  }

  export type UserUpdateOneRequiredWithoutThesisNestedInput = {
    create?: XOR<UserCreateWithoutThesisInput, UserUncheckedCreateWithoutThesisInput>
    connectOrCreate?: UserCreateOrConnectWithoutThesisInput
    upsert?: UserUpsertWithoutThesisInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutThesisInput, UserUpdateWithoutThesisInput>, UserUncheckedUpdateWithoutThesisInput>
  }

  export type AuthorUpdateManyWithoutThesisNestedInput = {
    create?: XOR<AuthorCreateWithoutThesisInput, AuthorUncheckedCreateWithoutThesisInput> | AuthorCreateWithoutThesisInput[] | AuthorUncheckedCreateWithoutThesisInput[]
    connectOrCreate?: AuthorCreateOrConnectWithoutThesisInput | AuthorCreateOrConnectWithoutThesisInput[]
    upsert?: AuthorUpsertWithWhereUniqueWithoutThesisInput | AuthorUpsertWithWhereUniqueWithoutThesisInput[]
    createMany?: AuthorCreateManyThesisInputEnvelope
    set?: AuthorWhereUniqueInput | AuthorWhereUniqueInput[]
    disconnect?: AuthorWhereUniqueInput | AuthorWhereUniqueInput[]
    delete?: AuthorWhereUniqueInput | AuthorWhereUniqueInput[]
    connect?: AuthorWhereUniqueInput | AuthorWhereUniqueInput[]
    update?: AuthorUpdateWithWhereUniqueWithoutThesisInput | AuthorUpdateWithWhereUniqueWithoutThesisInput[]
    updateMany?: AuthorUpdateManyWithWhereWithoutThesisInput | AuthorUpdateManyWithWhereWithoutThesisInput[]
    deleteMany?: AuthorScalarWhereInput | AuthorScalarWhereInput[]
  }

  export type ActionUpdateOneWithoutThesisNestedInput = {
    create?: XOR<ActionCreateWithoutThesisInput, ActionUncheckedCreateWithoutThesisInput>
    connectOrCreate?: ActionCreateOrConnectWithoutThesisInput
    upsert?: ActionUpsertWithoutThesisInput
    disconnect?: ActionWhereInput | boolean
    delete?: ActionWhereInput | boolean
    connect?: ActionWhereUniqueInput
    update?: XOR<XOR<ActionUpdateToOneWithWhereWithoutThesisInput, ActionUpdateWithoutThesisInput>, ActionUncheckedUpdateWithoutThesisInput>
  }

  export type AuthorUncheckedUpdateManyWithoutThesisNestedInput = {
    create?: XOR<AuthorCreateWithoutThesisInput, AuthorUncheckedCreateWithoutThesisInput> | AuthorCreateWithoutThesisInput[] | AuthorUncheckedCreateWithoutThesisInput[]
    connectOrCreate?: AuthorCreateOrConnectWithoutThesisInput | AuthorCreateOrConnectWithoutThesisInput[]
    upsert?: AuthorUpsertWithWhereUniqueWithoutThesisInput | AuthorUpsertWithWhereUniqueWithoutThesisInput[]
    createMany?: AuthorCreateManyThesisInputEnvelope
    set?: AuthorWhereUniqueInput | AuthorWhereUniqueInput[]
    disconnect?: AuthorWhereUniqueInput | AuthorWhereUniqueInput[]
    delete?: AuthorWhereUniqueInput | AuthorWhereUniqueInput[]
    connect?: AuthorWhereUniqueInput | AuthorWhereUniqueInput[]
    update?: AuthorUpdateWithWhereUniqueWithoutThesisInput | AuthorUpdateWithWhereUniqueWithoutThesisInput[]
    updateMany?: AuthorUpdateManyWithWhereWithoutThesisInput | AuthorUpdateManyWithWhereWithoutThesisInput[]
    deleteMany?: AuthorScalarWhereInput | AuthorScalarWhereInput[]
  }

  export type ActionUncheckedUpdateOneWithoutThesisNestedInput = {
    create?: XOR<ActionCreateWithoutThesisInput, ActionUncheckedCreateWithoutThesisInput>
    connectOrCreate?: ActionCreateOrConnectWithoutThesisInput
    upsert?: ActionUpsertWithoutThesisInput
    disconnect?: ActionWhereInput | boolean
    delete?: ActionWhereInput | boolean
    connect?: ActionWhereUniqueInput
    update?: XOR<XOR<ActionUpdateToOneWithWhereWithoutThesisInput, ActionUpdateWithoutThesisInput>, ActionUncheckedUpdateWithoutThesisInput>
  }

  export type IssuesCreateNestedManyWithoutVolumeInput = {
    create?: XOR<IssuesCreateWithoutVolumeInput, IssuesUncheckedCreateWithoutVolumeInput> | IssuesCreateWithoutVolumeInput[] | IssuesUncheckedCreateWithoutVolumeInput[]
    connectOrCreate?: IssuesCreateOrConnectWithoutVolumeInput | IssuesCreateOrConnectWithoutVolumeInput[]
    createMany?: IssuesCreateManyVolumeInputEnvelope
    connect?: IssuesWhereUniqueInput | IssuesWhereUniqueInput[]
  }

  export type ThesisCreateNestedManyWithoutVolumeInput = {
    create?: XOR<ThesisCreateWithoutVolumeInput, ThesisUncheckedCreateWithoutVolumeInput> | ThesisCreateWithoutVolumeInput[] | ThesisUncheckedCreateWithoutVolumeInput[]
    connectOrCreate?: ThesisCreateOrConnectWithoutVolumeInput | ThesisCreateOrConnectWithoutVolumeInput[]
    createMany?: ThesisCreateManyVolumeInputEnvelope
    connect?: ThesisWhereUniqueInput | ThesisWhereUniqueInput[]
  }

  export type IssuesUncheckedCreateNestedManyWithoutVolumeInput = {
    create?: XOR<IssuesCreateWithoutVolumeInput, IssuesUncheckedCreateWithoutVolumeInput> | IssuesCreateWithoutVolumeInput[] | IssuesUncheckedCreateWithoutVolumeInput[]
    connectOrCreate?: IssuesCreateOrConnectWithoutVolumeInput | IssuesCreateOrConnectWithoutVolumeInput[]
    createMany?: IssuesCreateManyVolumeInputEnvelope
    connect?: IssuesWhereUniqueInput | IssuesWhereUniqueInput[]
  }

  export type ThesisUncheckedCreateNestedManyWithoutVolumeInput = {
    create?: XOR<ThesisCreateWithoutVolumeInput, ThesisUncheckedCreateWithoutVolumeInput> | ThesisCreateWithoutVolumeInput[] | ThesisUncheckedCreateWithoutVolumeInput[]
    connectOrCreate?: ThesisCreateOrConnectWithoutVolumeInput | ThesisCreateOrConnectWithoutVolumeInput[]
    createMany?: ThesisCreateManyVolumeInputEnvelope
    connect?: ThesisWhereUniqueInput | ThesisWhereUniqueInput[]
  }

  export type IssuesUpdateManyWithoutVolumeNestedInput = {
    create?: XOR<IssuesCreateWithoutVolumeInput, IssuesUncheckedCreateWithoutVolumeInput> | IssuesCreateWithoutVolumeInput[] | IssuesUncheckedCreateWithoutVolumeInput[]
    connectOrCreate?: IssuesCreateOrConnectWithoutVolumeInput | IssuesCreateOrConnectWithoutVolumeInput[]
    upsert?: IssuesUpsertWithWhereUniqueWithoutVolumeInput | IssuesUpsertWithWhereUniqueWithoutVolumeInput[]
    createMany?: IssuesCreateManyVolumeInputEnvelope
    set?: IssuesWhereUniqueInput | IssuesWhereUniqueInput[]
    disconnect?: IssuesWhereUniqueInput | IssuesWhereUniqueInput[]
    delete?: IssuesWhereUniqueInput | IssuesWhereUniqueInput[]
    connect?: IssuesWhereUniqueInput | IssuesWhereUniqueInput[]
    update?: IssuesUpdateWithWhereUniqueWithoutVolumeInput | IssuesUpdateWithWhereUniqueWithoutVolumeInput[]
    updateMany?: IssuesUpdateManyWithWhereWithoutVolumeInput | IssuesUpdateManyWithWhereWithoutVolumeInput[]
    deleteMany?: IssuesScalarWhereInput | IssuesScalarWhereInput[]
  }

  export type ThesisUpdateManyWithoutVolumeNestedInput = {
    create?: XOR<ThesisCreateWithoutVolumeInput, ThesisUncheckedCreateWithoutVolumeInput> | ThesisCreateWithoutVolumeInput[] | ThesisUncheckedCreateWithoutVolumeInput[]
    connectOrCreate?: ThesisCreateOrConnectWithoutVolumeInput | ThesisCreateOrConnectWithoutVolumeInput[]
    upsert?: ThesisUpsertWithWhereUniqueWithoutVolumeInput | ThesisUpsertWithWhereUniqueWithoutVolumeInput[]
    createMany?: ThesisCreateManyVolumeInputEnvelope
    set?: ThesisWhereUniqueInput | ThesisWhereUniqueInput[]
    disconnect?: ThesisWhereUniqueInput | ThesisWhereUniqueInput[]
    delete?: ThesisWhereUniqueInput | ThesisWhereUniqueInput[]
    connect?: ThesisWhereUniqueInput | ThesisWhereUniqueInput[]
    update?: ThesisUpdateWithWhereUniqueWithoutVolumeInput | ThesisUpdateWithWhereUniqueWithoutVolumeInput[]
    updateMany?: ThesisUpdateManyWithWhereWithoutVolumeInput | ThesisUpdateManyWithWhereWithoutVolumeInput[]
    deleteMany?: ThesisScalarWhereInput | ThesisScalarWhereInput[]
  }

  export type IssuesUncheckedUpdateManyWithoutVolumeNestedInput = {
    create?: XOR<IssuesCreateWithoutVolumeInput, IssuesUncheckedCreateWithoutVolumeInput> | IssuesCreateWithoutVolumeInput[] | IssuesUncheckedCreateWithoutVolumeInput[]
    connectOrCreate?: IssuesCreateOrConnectWithoutVolumeInput | IssuesCreateOrConnectWithoutVolumeInput[]
    upsert?: IssuesUpsertWithWhereUniqueWithoutVolumeInput | IssuesUpsertWithWhereUniqueWithoutVolumeInput[]
    createMany?: IssuesCreateManyVolumeInputEnvelope
    set?: IssuesWhereUniqueInput | IssuesWhereUniqueInput[]
    disconnect?: IssuesWhereUniqueInput | IssuesWhereUniqueInput[]
    delete?: IssuesWhereUniqueInput | IssuesWhereUniqueInput[]
    connect?: IssuesWhereUniqueInput | IssuesWhereUniqueInput[]
    update?: IssuesUpdateWithWhereUniqueWithoutVolumeInput | IssuesUpdateWithWhereUniqueWithoutVolumeInput[]
    updateMany?: IssuesUpdateManyWithWhereWithoutVolumeInput | IssuesUpdateManyWithWhereWithoutVolumeInput[]
    deleteMany?: IssuesScalarWhereInput | IssuesScalarWhereInput[]
  }

  export type ThesisUncheckedUpdateManyWithoutVolumeNestedInput = {
    create?: XOR<ThesisCreateWithoutVolumeInput, ThesisUncheckedCreateWithoutVolumeInput> | ThesisCreateWithoutVolumeInput[] | ThesisUncheckedCreateWithoutVolumeInput[]
    connectOrCreate?: ThesisCreateOrConnectWithoutVolumeInput | ThesisCreateOrConnectWithoutVolumeInput[]
    upsert?: ThesisUpsertWithWhereUniqueWithoutVolumeInput | ThesisUpsertWithWhereUniqueWithoutVolumeInput[]
    createMany?: ThesisCreateManyVolumeInputEnvelope
    set?: ThesisWhereUniqueInput | ThesisWhereUniqueInput[]
    disconnect?: ThesisWhereUniqueInput | ThesisWhereUniqueInput[]
    delete?: ThesisWhereUniqueInput | ThesisWhereUniqueInput[]
    connect?: ThesisWhereUniqueInput | ThesisWhereUniqueInput[]
    update?: ThesisUpdateWithWhereUniqueWithoutVolumeInput | ThesisUpdateWithWhereUniqueWithoutVolumeInput[]
    updateMany?: ThesisUpdateManyWithWhereWithoutVolumeInput | ThesisUpdateManyWithWhereWithoutVolumeInput[]
    deleteMany?: ThesisScalarWhereInput | ThesisScalarWhereInput[]
  }

  export type VolumeCreateNestedOneWithoutIssuesInput = {
    create?: XOR<VolumeCreateWithoutIssuesInput, VolumeUncheckedCreateWithoutIssuesInput>
    connectOrCreate?: VolumeCreateOrConnectWithoutIssuesInput
    connect?: VolumeWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type VolumeUpdateOneRequiredWithoutIssuesNestedInput = {
    create?: XOR<VolumeCreateWithoutIssuesInput, VolumeUncheckedCreateWithoutIssuesInput>
    connectOrCreate?: VolumeCreateOrConnectWithoutIssuesInput
    upsert?: VolumeUpsertWithoutIssuesInput
    connect?: VolumeWhereUniqueInput
    update?: XOR<XOR<VolumeUpdateToOneWithWhereWithoutIssuesInput, VolumeUpdateWithoutIssuesInput>, VolumeUncheckedUpdateWithoutIssuesInput>
  }

  export type ThesisCreateNestedOneWithoutAuthorsInput = {
    create?: XOR<ThesisCreateWithoutAuthorsInput, ThesisUncheckedCreateWithoutAuthorsInput>
    connectOrCreate?: ThesisCreateOrConnectWithoutAuthorsInput
    connect?: ThesisWhereUniqueInput
  }

  export type ThesisUpdateOneRequiredWithoutAuthorsNestedInput = {
    create?: XOR<ThesisCreateWithoutAuthorsInput, ThesisUncheckedCreateWithoutAuthorsInput>
    connectOrCreate?: ThesisCreateOrConnectWithoutAuthorsInput
    upsert?: ThesisUpsertWithoutAuthorsInput
    connect?: ThesisWhereUniqueInput
    update?: XOR<XOR<ThesisUpdateToOneWithWhereWithoutAuthorsInput, ThesisUpdateWithoutAuthorsInput>, ThesisUncheckedUpdateWithoutAuthorsInput>
  }

  export type ThesisCreateNestedOneWithoutActionInput = {
    create?: XOR<ThesisCreateWithoutActionInput, ThesisUncheckedCreateWithoutActionInput>
    connectOrCreate?: ThesisCreateOrConnectWithoutActionInput
    connect?: ThesisWhereUniqueInput
  }

  export type ThesisUpdateOneRequiredWithoutActionNestedInput = {
    create?: XOR<ThesisCreateWithoutActionInput, ThesisUncheckedCreateWithoutActionInput>
    connectOrCreate?: ThesisCreateOrConnectWithoutActionInput
    upsert?: ThesisUpsertWithoutActionInput
    connect?: ThesisWhereUniqueInput
    update?: XOR<XOR<ThesisUpdateToOneWithWhereWithoutActionInput, ThesisUpdateWithoutActionInput>, ThesisUncheckedUpdateWithoutActionInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ThesisCreateWithoutUserInput = {
    title: string
    abstract: string
    primaryAuthor: string
    file: string
    status?: $Enums.Status
    actionDate: Date | string
    volume: VolumeCreateNestedOneWithoutThesisInput
    authors?: AuthorCreateNestedManyWithoutThesisInput
    action?: ActionCreateNestedOneWithoutThesisInput
  }

  export type ThesisUncheckedCreateWithoutUserInput = {
    thesisId?: number
    title: string
    abstract: string
    primaryAuthor: string
    file: string
    status?: $Enums.Status
    volumeId: number
    actionDate: Date | string
    authors?: AuthorUncheckedCreateNestedManyWithoutThesisInput
    action?: ActionUncheckedCreateNestedOneWithoutThesisInput
  }

  export type ThesisCreateOrConnectWithoutUserInput = {
    where: ThesisWhereUniqueInput
    create: XOR<ThesisCreateWithoutUserInput, ThesisUncheckedCreateWithoutUserInput>
  }

  export type ThesisCreateManyUserInputEnvelope = {
    data: ThesisCreateManyUserInput | ThesisCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ThesisUpsertWithWhereUniqueWithoutUserInput = {
    where: ThesisWhereUniqueInput
    update: XOR<ThesisUpdateWithoutUserInput, ThesisUncheckedUpdateWithoutUserInput>
    create: XOR<ThesisCreateWithoutUserInput, ThesisUncheckedCreateWithoutUserInput>
  }

  export type ThesisUpdateWithWhereUniqueWithoutUserInput = {
    where: ThesisWhereUniqueInput
    data: XOR<ThesisUpdateWithoutUserInput, ThesisUncheckedUpdateWithoutUserInput>
  }

  export type ThesisUpdateManyWithWhereWithoutUserInput = {
    where: ThesisScalarWhereInput
    data: XOR<ThesisUpdateManyMutationInput, ThesisUncheckedUpdateManyWithoutUserInput>
  }

  export type ThesisScalarWhereInput = {
    AND?: ThesisScalarWhereInput | ThesisScalarWhereInput[]
    OR?: ThesisScalarWhereInput[]
    NOT?: ThesisScalarWhereInput | ThesisScalarWhereInput[]
    thesisId?: IntFilter<"Thesis"> | number
    title?: StringFilter<"Thesis"> | string
    abstract?: StringFilter<"Thesis"> | string
    primaryAuthor?: StringFilter<"Thesis"> | string
    file?: StringFilter<"Thesis"> | string
    status?: EnumStatusFilter<"Thesis"> | $Enums.Status
    volumeId?: IntFilter<"Thesis"> | number
    actionDate?: DateTimeFilter<"Thesis"> | Date | string
    uploadedBy?: IntFilter<"Thesis"> | number
  }

  export type VolumeCreateWithoutThesisInput = {
    volName: string
    issues?: IssuesCreateNestedManyWithoutVolumeInput
  }

  export type VolumeUncheckedCreateWithoutThesisInput = {
    volumeId?: number
    volName: string
    issues?: IssuesUncheckedCreateNestedManyWithoutVolumeInput
  }

  export type VolumeCreateOrConnectWithoutThesisInput = {
    where: VolumeWhereUniqueInput
    create: XOR<VolumeCreateWithoutThesisInput, VolumeUncheckedCreateWithoutThesisInput>
  }

  export type UserCreateWithoutThesisInput = {
    email: string
    name: string
    password: string
    type?: $Enums.UserType
  }

  export type UserUncheckedCreateWithoutThesisInput = {
    userId?: number
    email: string
    name: string
    password: string
    type?: $Enums.UserType
  }

  export type UserCreateOrConnectWithoutThesisInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutThesisInput, UserUncheckedCreateWithoutThesisInput>
  }

  export type AuthorCreateWithoutThesisInput = {
    name: string
  }

  export type AuthorUncheckedCreateWithoutThesisInput = {
    authorId?: number
    name: string
  }

  export type AuthorCreateOrConnectWithoutThesisInput = {
    where: AuthorWhereUniqueInput
    create: XOR<AuthorCreateWithoutThesisInput, AuthorUncheckedCreateWithoutThesisInput>
  }

  export type AuthorCreateManyThesisInputEnvelope = {
    data: AuthorCreateManyThesisInput | AuthorCreateManyThesisInput[]
    skipDuplicates?: boolean
  }

  export type ActionCreateWithoutThesisInput = {
    remarks: string
  }

  export type ActionUncheckedCreateWithoutThesisInput = {
    id?: number
    remarks: string
  }

  export type ActionCreateOrConnectWithoutThesisInput = {
    where: ActionWhereUniqueInput
    create: XOR<ActionCreateWithoutThesisInput, ActionUncheckedCreateWithoutThesisInput>
  }

  export type VolumeUpsertWithoutThesisInput = {
    update: XOR<VolumeUpdateWithoutThesisInput, VolumeUncheckedUpdateWithoutThesisInput>
    create: XOR<VolumeCreateWithoutThesisInput, VolumeUncheckedCreateWithoutThesisInput>
    where?: VolumeWhereInput
  }

  export type VolumeUpdateToOneWithWhereWithoutThesisInput = {
    where?: VolumeWhereInput
    data: XOR<VolumeUpdateWithoutThesisInput, VolumeUncheckedUpdateWithoutThesisInput>
  }

  export type VolumeUpdateWithoutThesisInput = {
    volName?: StringFieldUpdateOperationsInput | string
    issues?: IssuesUpdateManyWithoutVolumeNestedInput
  }

  export type VolumeUncheckedUpdateWithoutThesisInput = {
    volumeId?: IntFieldUpdateOperationsInput | number
    volName?: StringFieldUpdateOperationsInput | string
    issues?: IssuesUncheckedUpdateManyWithoutVolumeNestedInput
  }

  export type UserUpsertWithoutThesisInput = {
    update: XOR<UserUpdateWithoutThesisInput, UserUncheckedUpdateWithoutThesisInput>
    create: XOR<UserCreateWithoutThesisInput, UserUncheckedCreateWithoutThesisInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutThesisInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutThesisInput, UserUncheckedUpdateWithoutThesisInput>
  }

  export type UserUpdateWithoutThesisInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
  }

  export type UserUncheckedUpdateWithoutThesisInput = {
    userId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
  }

  export type AuthorUpsertWithWhereUniqueWithoutThesisInput = {
    where: AuthorWhereUniqueInput
    update: XOR<AuthorUpdateWithoutThesisInput, AuthorUncheckedUpdateWithoutThesisInput>
    create: XOR<AuthorCreateWithoutThesisInput, AuthorUncheckedCreateWithoutThesisInput>
  }

  export type AuthorUpdateWithWhereUniqueWithoutThesisInput = {
    where: AuthorWhereUniqueInput
    data: XOR<AuthorUpdateWithoutThesisInput, AuthorUncheckedUpdateWithoutThesisInput>
  }

  export type AuthorUpdateManyWithWhereWithoutThesisInput = {
    where: AuthorScalarWhereInput
    data: XOR<AuthorUpdateManyMutationInput, AuthorUncheckedUpdateManyWithoutThesisInput>
  }

  export type AuthorScalarWhereInput = {
    AND?: AuthorScalarWhereInput | AuthorScalarWhereInput[]
    OR?: AuthorScalarWhereInput[]
    NOT?: AuthorScalarWhereInput | AuthorScalarWhereInput[]
    authorId?: IntFilter<"Author"> | number
    name?: StringFilter<"Author"> | string
    thesisId?: IntFilter<"Author"> | number
  }

  export type ActionUpsertWithoutThesisInput = {
    update: XOR<ActionUpdateWithoutThesisInput, ActionUncheckedUpdateWithoutThesisInput>
    create: XOR<ActionCreateWithoutThesisInput, ActionUncheckedCreateWithoutThesisInput>
    where?: ActionWhereInput
  }

  export type ActionUpdateToOneWithWhereWithoutThesisInput = {
    where?: ActionWhereInput
    data: XOR<ActionUpdateWithoutThesisInput, ActionUncheckedUpdateWithoutThesisInput>
  }

  export type ActionUpdateWithoutThesisInput = {
    remarks?: StringFieldUpdateOperationsInput | string
  }

  export type ActionUncheckedUpdateWithoutThesisInput = {
    id?: IntFieldUpdateOperationsInput | number
    remarks?: StringFieldUpdateOperationsInput | string
  }

  export type IssuesCreateWithoutVolumeInput = {
    startDate?: Date | string
    endDate?: Date | string | null
  }

  export type IssuesUncheckedCreateWithoutVolumeInput = {
    issueId?: number
    startDate?: Date | string
    endDate?: Date | string | null
  }

  export type IssuesCreateOrConnectWithoutVolumeInput = {
    where: IssuesWhereUniqueInput
    create: XOR<IssuesCreateWithoutVolumeInput, IssuesUncheckedCreateWithoutVolumeInput>
  }

  export type IssuesCreateManyVolumeInputEnvelope = {
    data: IssuesCreateManyVolumeInput | IssuesCreateManyVolumeInput[]
    skipDuplicates?: boolean
  }

  export type ThesisCreateWithoutVolumeInput = {
    title: string
    abstract: string
    primaryAuthor: string
    file: string
    status?: $Enums.Status
    actionDate: Date | string
    user: UserCreateNestedOneWithoutThesisInput
    authors?: AuthorCreateNestedManyWithoutThesisInput
    action?: ActionCreateNestedOneWithoutThesisInput
  }

  export type ThesisUncheckedCreateWithoutVolumeInput = {
    thesisId?: number
    title: string
    abstract: string
    primaryAuthor: string
    file: string
    status?: $Enums.Status
    actionDate: Date | string
    uploadedBy: number
    authors?: AuthorUncheckedCreateNestedManyWithoutThesisInput
    action?: ActionUncheckedCreateNestedOneWithoutThesisInput
  }

  export type ThesisCreateOrConnectWithoutVolumeInput = {
    where: ThesisWhereUniqueInput
    create: XOR<ThesisCreateWithoutVolumeInput, ThesisUncheckedCreateWithoutVolumeInput>
  }

  export type ThesisCreateManyVolumeInputEnvelope = {
    data: ThesisCreateManyVolumeInput | ThesisCreateManyVolumeInput[]
    skipDuplicates?: boolean
  }

  export type IssuesUpsertWithWhereUniqueWithoutVolumeInput = {
    where: IssuesWhereUniqueInput
    update: XOR<IssuesUpdateWithoutVolumeInput, IssuesUncheckedUpdateWithoutVolumeInput>
    create: XOR<IssuesCreateWithoutVolumeInput, IssuesUncheckedCreateWithoutVolumeInput>
  }

  export type IssuesUpdateWithWhereUniqueWithoutVolumeInput = {
    where: IssuesWhereUniqueInput
    data: XOR<IssuesUpdateWithoutVolumeInput, IssuesUncheckedUpdateWithoutVolumeInput>
  }

  export type IssuesUpdateManyWithWhereWithoutVolumeInput = {
    where: IssuesScalarWhereInput
    data: XOR<IssuesUpdateManyMutationInput, IssuesUncheckedUpdateManyWithoutVolumeInput>
  }

  export type IssuesScalarWhereInput = {
    AND?: IssuesScalarWhereInput | IssuesScalarWhereInput[]
    OR?: IssuesScalarWhereInput[]
    NOT?: IssuesScalarWhereInput | IssuesScalarWhereInput[]
    issueId?: IntFilter<"Issues"> | number
    volumeId?: IntFilter<"Issues"> | number
    startDate?: DateTimeFilter<"Issues"> | Date | string
    endDate?: DateTimeNullableFilter<"Issues"> | Date | string | null
  }

  export type ThesisUpsertWithWhereUniqueWithoutVolumeInput = {
    where: ThesisWhereUniqueInput
    update: XOR<ThesisUpdateWithoutVolumeInput, ThesisUncheckedUpdateWithoutVolumeInput>
    create: XOR<ThesisCreateWithoutVolumeInput, ThesisUncheckedCreateWithoutVolumeInput>
  }

  export type ThesisUpdateWithWhereUniqueWithoutVolumeInput = {
    where: ThesisWhereUniqueInput
    data: XOR<ThesisUpdateWithoutVolumeInput, ThesisUncheckedUpdateWithoutVolumeInput>
  }

  export type ThesisUpdateManyWithWhereWithoutVolumeInput = {
    where: ThesisScalarWhereInput
    data: XOR<ThesisUpdateManyMutationInput, ThesisUncheckedUpdateManyWithoutVolumeInput>
  }

  export type VolumeCreateWithoutIssuesInput = {
    volName: string
    Thesis?: ThesisCreateNestedManyWithoutVolumeInput
  }

  export type VolumeUncheckedCreateWithoutIssuesInput = {
    volumeId?: number
    volName: string
    Thesis?: ThesisUncheckedCreateNestedManyWithoutVolumeInput
  }

  export type VolumeCreateOrConnectWithoutIssuesInput = {
    where: VolumeWhereUniqueInput
    create: XOR<VolumeCreateWithoutIssuesInput, VolumeUncheckedCreateWithoutIssuesInput>
  }

  export type VolumeUpsertWithoutIssuesInput = {
    update: XOR<VolumeUpdateWithoutIssuesInput, VolumeUncheckedUpdateWithoutIssuesInput>
    create: XOR<VolumeCreateWithoutIssuesInput, VolumeUncheckedCreateWithoutIssuesInput>
    where?: VolumeWhereInput
  }

  export type VolumeUpdateToOneWithWhereWithoutIssuesInput = {
    where?: VolumeWhereInput
    data: XOR<VolumeUpdateWithoutIssuesInput, VolumeUncheckedUpdateWithoutIssuesInput>
  }

  export type VolumeUpdateWithoutIssuesInput = {
    volName?: StringFieldUpdateOperationsInput | string
    Thesis?: ThesisUpdateManyWithoutVolumeNestedInput
  }

  export type VolumeUncheckedUpdateWithoutIssuesInput = {
    volumeId?: IntFieldUpdateOperationsInput | number
    volName?: StringFieldUpdateOperationsInput | string
    Thesis?: ThesisUncheckedUpdateManyWithoutVolumeNestedInput
  }

  export type ThesisCreateWithoutAuthorsInput = {
    title: string
    abstract: string
    primaryAuthor: string
    file: string
    status?: $Enums.Status
    actionDate: Date | string
    volume: VolumeCreateNestedOneWithoutThesisInput
    user: UserCreateNestedOneWithoutThesisInput
    action?: ActionCreateNestedOneWithoutThesisInput
  }

  export type ThesisUncheckedCreateWithoutAuthorsInput = {
    thesisId?: number
    title: string
    abstract: string
    primaryAuthor: string
    file: string
    status?: $Enums.Status
    volumeId: number
    actionDate: Date | string
    uploadedBy: number
    action?: ActionUncheckedCreateNestedOneWithoutThesisInput
  }

  export type ThesisCreateOrConnectWithoutAuthorsInput = {
    where: ThesisWhereUniqueInput
    create: XOR<ThesisCreateWithoutAuthorsInput, ThesisUncheckedCreateWithoutAuthorsInput>
  }

  export type ThesisUpsertWithoutAuthorsInput = {
    update: XOR<ThesisUpdateWithoutAuthorsInput, ThesisUncheckedUpdateWithoutAuthorsInput>
    create: XOR<ThesisCreateWithoutAuthorsInput, ThesisUncheckedCreateWithoutAuthorsInput>
    where?: ThesisWhereInput
  }

  export type ThesisUpdateToOneWithWhereWithoutAuthorsInput = {
    where?: ThesisWhereInput
    data: XOR<ThesisUpdateWithoutAuthorsInput, ThesisUncheckedUpdateWithoutAuthorsInput>
  }

  export type ThesisUpdateWithoutAuthorsInput = {
    title?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    primaryAuthor?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    actionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    volume?: VolumeUpdateOneRequiredWithoutThesisNestedInput
    user?: UserUpdateOneRequiredWithoutThesisNestedInput
    action?: ActionUpdateOneWithoutThesisNestedInput
  }

  export type ThesisUncheckedUpdateWithoutAuthorsInput = {
    thesisId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    primaryAuthor?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    volumeId?: IntFieldUpdateOperationsInput | number
    actionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedBy?: IntFieldUpdateOperationsInput | number
    action?: ActionUncheckedUpdateOneWithoutThesisNestedInput
  }

  export type ThesisCreateWithoutActionInput = {
    title: string
    abstract: string
    primaryAuthor: string
    file: string
    status?: $Enums.Status
    actionDate: Date | string
    volume: VolumeCreateNestedOneWithoutThesisInput
    user: UserCreateNestedOneWithoutThesisInput
    authors?: AuthorCreateNestedManyWithoutThesisInput
  }

  export type ThesisUncheckedCreateWithoutActionInput = {
    thesisId?: number
    title: string
    abstract: string
    primaryAuthor: string
    file: string
    status?: $Enums.Status
    volumeId: number
    actionDate: Date | string
    uploadedBy: number
    authors?: AuthorUncheckedCreateNestedManyWithoutThesisInput
  }

  export type ThesisCreateOrConnectWithoutActionInput = {
    where: ThesisWhereUniqueInput
    create: XOR<ThesisCreateWithoutActionInput, ThesisUncheckedCreateWithoutActionInput>
  }

  export type ThesisUpsertWithoutActionInput = {
    update: XOR<ThesisUpdateWithoutActionInput, ThesisUncheckedUpdateWithoutActionInput>
    create: XOR<ThesisCreateWithoutActionInput, ThesisUncheckedCreateWithoutActionInput>
    where?: ThesisWhereInput
  }

  export type ThesisUpdateToOneWithWhereWithoutActionInput = {
    where?: ThesisWhereInput
    data: XOR<ThesisUpdateWithoutActionInput, ThesisUncheckedUpdateWithoutActionInput>
  }

  export type ThesisUpdateWithoutActionInput = {
    title?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    primaryAuthor?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    actionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    volume?: VolumeUpdateOneRequiredWithoutThesisNestedInput
    user?: UserUpdateOneRequiredWithoutThesisNestedInput
    authors?: AuthorUpdateManyWithoutThesisNestedInput
  }

  export type ThesisUncheckedUpdateWithoutActionInput = {
    thesisId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    primaryAuthor?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    volumeId?: IntFieldUpdateOperationsInput | number
    actionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedBy?: IntFieldUpdateOperationsInput | number
    authors?: AuthorUncheckedUpdateManyWithoutThesisNestedInput
  }

  export type ThesisCreateManyUserInput = {
    thesisId?: number
    title: string
    abstract: string
    primaryAuthor: string
    file: string
    status?: $Enums.Status
    volumeId: number
    actionDate: Date | string
  }

  export type ThesisUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    primaryAuthor?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    actionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    volume?: VolumeUpdateOneRequiredWithoutThesisNestedInput
    authors?: AuthorUpdateManyWithoutThesisNestedInput
    action?: ActionUpdateOneWithoutThesisNestedInput
  }

  export type ThesisUncheckedUpdateWithoutUserInput = {
    thesisId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    primaryAuthor?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    volumeId?: IntFieldUpdateOperationsInput | number
    actionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    authors?: AuthorUncheckedUpdateManyWithoutThesisNestedInput
    action?: ActionUncheckedUpdateOneWithoutThesisNestedInput
  }

  export type ThesisUncheckedUpdateManyWithoutUserInput = {
    thesisId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    primaryAuthor?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    volumeId?: IntFieldUpdateOperationsInput | number
    actionDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthorCreateManyThesisInput = {
    authorId?: number
    name: string
  }

  export type AuthorUpdateWithoutThesisInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AuthorUncheckedUpdateWithoutThesisInput = {
    authorId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AuthorUncheckedUpdateManyWithoutThesisInput = {
    authorId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type IssuesCreateManyVolumeInput = {
    issueId?: number
    startDate?: Date | string
    endDate?: Date | string | null
  }

  export type ThesisCreateManyVolumeInput = {
    thesisId?: number
    title: string
    abstract: string
    primaryAuthor: string
    file: string
    status?: $Enums.Status
    actionDate: Date | string
    uploadedBy: number
  }

  export type IssuesUpdateWithoutVolumeInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IssuesUncheckedUpdateWithoutVolumeInput = {
    issueId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IssuesUncheckedUpdateManyWithoutVolumeInput = {
    issueId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ThesisUpdateWithoutVolumeInput = {
    title?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    primaryAuthor?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    actionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutThesisNestedInput
    authors?: AuthorUpdateManyWithoutThesisNestedInput
    action?: ActionUpdateOneWithoutThesisNestedInput
  }

  export type ThesisUncheckedUpdateWithoutVolumeInput = {
    thesisId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    primaryAuthor?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    actionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedBy?: IntFieldUpdateOperationsInput | number
    authors?: AuthorUncheckedUpdateManyWithoutThesisNestedInput
    action?: ActionUncheckedUpdateOneWithoutThesisNestedInput
  }

  export type ThesisUncheckedUpdateManyWithoutVolumeInput = {
    thesisId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    abstract?: StringFieldUpdateOperationsInput | string
    primaryAuthor?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    actionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedBy?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}