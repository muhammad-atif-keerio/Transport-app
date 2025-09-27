
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
 * Model Driver
 * 
 */
export type Driver = $Result.DefaultSelection<Prisma.$DriverPayload>
/**
 * Model DriverWorkExperience
 * 
 */
export type DriverWorkExperience = $Result.DefaultSelection<Prisma.$DriverWorkExperiencePayload>
/**
 * Model DriverReference
 * 
 */
export type DriverReference = $Result.DefaultSelection<Prisma.$DriverReferencePayload>
/**
 * Model DriverDocument
 * 
 */
export type DriverDocument = $Result.DefaultSelection<Prisma.$DriverDocumentPayload>
/**
 * Model DriverViolation
 * 
 */
export type DriverViolation = $Result.DefaultSelection<Prisma.$DriverViolationPayload>
/**
 * Model DriverAssignment
 * 
 */
export type DriverAssignment = $Result.DefaultSelection<Prisma.$DriverAssignmentPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const MaritalStatus: {
  Single: 'Single',
  Married: 'Married',
  Divorced: 'Divorced',
  Widowed: 'Widowed'
};

export type MaritalStatus = (typeof MaritalStatus)[keyof typeof MaritalStatus]


export const CovidVaccinationStatus: {
  FirstDose: 'FirstDose',
  SecondDose: 'SecondDose',
  FullyVaccinated: 'FullyVaccinated',
  Booster: 'Booster'
};

export type CovidVaccinationStatus = (typeof CovidVaccinationStatus)[keyof typeof CovidVaccinationStatus]


export const YesNo: {
  Yes: 'Yes',
  No: 'No'
};

export type YesNo = (typeof YesNo)[keyof typeof YesNo]


export const BoosterStatus: {
  Done: 'Done',
  NotDone: 'NotDone'
};

export type BoosterStatus = (typeof BoosterStatus)[keyof typeof BoosterStatus]


export const DDCStatus: {
  Valid: 'Valid',
  Invalid: 'Invalid'
};

export type DDCStatus = (typeof DDCStatus)[keyof typeof DDCStatus]


export const DDCResult: {
  Pass: 'Pass',
  Fail: 'Fail',
  None: 'None'
};

export type DDCResult = (typeof DDCResult)[keyof typeof DDCResult]


export const MedicalStatus: {
  Valid: 'Valid',
  Invalid: 'Invalid'
};

export type MedicalStatus = (typeof MedicalStatus)[keyof typeof MedicalStatus]


export const DrugAlcoholStatus: {
  Done: 'Done',
  NotDone: 'NotDone'
};

export type DrugAlcoholStatus = (typeof DrugAlcoholStatus)[keyof typeof DrugAlcoholStatus]


export const JobStatus: {
  Active: 'Active',
  Inactive: 'Inactive',
  Suspended: 'Suspended',
  Terminated: 'Terminated'
};

export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus]


export const EducationLevel: {
  Primary: 'Primary',
  Matric: 'Matric',
  Inter: 'Inter',
  Bachelors: 'Bachelors',
  Masters: 'Masters',
  None: 'None'
};

export type EducationLevel = (typeof EducationLevel)[keyof typeof EducationLevel]


export const PreviousJob: {
  PSO: 'PSO',
  Shell: 'Shell',
  Aramco: 'Aramco',
  Other: 'Other',
  None: 'None'
};

export type PreviousJob = (typeof PreviousJob)[keyof typeof PreviousJob]


export const VehicleType: {
  Tanker: 'Tanker',
  Trailer: 'Trailer',
  Dumper: 'Dumper',
  Truck: 'Truck',
  Bus: 'Bus',
  None: 'None'
};

export type VehicleType = (typeof VehicleType)[keyof typeof VehicleType]


export const LicenseType: {
  LTV: 'LTV',
  HTV: 'HTV',
  PSV: 'PSV',
  International: 'International'
};

export type LicenseType = (typeof LicenseType)[keyof typeof LicenseType]


export const BloodGroup: {
  A_Positive: 'A_Positive',
  A_Negative: 'A_Negative',
  B_Positive: 'B_Positive',
  B_Negative: 'B_Negative',
  AB_Positive: 'AB_Positive',
  AB_Negative: 'AB_Negative',
  O_Positive: 'O_Positive',
  O_Negative: 'O_Negative'
};

export type BloodGroup = (typeof BloodGroup)[keyof typeof BloodGroup]


export const Gender: {
  Male: 'Male',
  Female: 'Female',
  Other: 'Other'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const UserRole: {
  Admin: 'Admin',
  Manager: 'Manager',
  Supervisor: 'Supervisor'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]

}

export type MaritalStatus = $Enums.MaritalStatus

export const MaritalStatus: typeof $Enums.MaritalStatus

export type CovidVaccinationStatus = $Enums.CovidVaccinationStatus

export const CovidVaccinationStatus: typeof $Enums.CovidVaccinationStatus

export type YesNo = $Enums.YesNo

export const YesNo: typeof $Enums.YesNo

export type BoosterStatus = $Enums.BoosterStatus

export const BoosterStatus: typeof $Enums.BoosterStatus

export type DDCStatus = $Enums.DDCStatus

export const DDCStatus: typeof $Enums.DDCStatus

export type DDCResult = $Enums.DDCResult

export const DDCResult: typeof $Enums.DDCResult

export type MedicalStatus = $Enums.MedicalStatus

export const MedicalStatus: typeof $Enums.MedicalStatus

export type DrugAlcoholStatus = $Enums.DrugAlcoholStatus

export const DrugAlcoholStatus: typeof $Enums.DrugAlcoholStatus

export type JobStatus = $Enums.JobStatus

export const JobStatus: typeof $Enums.JobStatus

export type EducationLevel = $Enums.EducationLevel

export const EducationLevel: typeof $Enums.EducationLevel

export type PreviousJob = $Enums.PreviousJob

export const PreviousJob: typeof $Enums.PreviousJob

export type VehicleType = $Enums.VehicleType

export const VehicleType: typeof $Enums.VehicleType

export type LicenseType = $Enums.LicenseType

export const LicenseType: typeof $Enums.LicenseType

export type BloodGroup = $Enums.BloodGroup

export const BloodGroup: typeof $Enums.BloodGroup

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Drivers
 * const drivers = await prisma.driver.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Drivers
   * const drivers = await prisma.driver.findMany()
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
   * `prisma.driver`: Exposes CRUD operations for the **Driver** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Drivers
    * const drivers = await prisma.driver.findMany()
    * ```
    */
  get driver(): Prisma.DriverDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.driverWorkExperience`: Exposes CRUD operations for the **DriverWorkExperience** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DriverWorkExperiences
    * const driverWorkExperiences = await prisma.driverWorkExperience.findMany()
    * ```
    */
  get driverWorkExperience(): Prisma.DriverWorkExperienceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.driverReference`: Exposes CRUD operations for the **DriverReference** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DriverReferences
    * const driverReferences = await prisma.driverReference.findMany()
    * ```
    */
  get driverReference(): Prisma.DriverReferenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.driverDocument`: Exposes CRUD operations for the **DriverDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DriverDocuments
    * const driverDocuments = await prisma.driverDocument.findMany()
    * ```
    */
  get driverDocument(): Prisma.DriverDocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.driverViolation`: Exposes CRUD operations for the **DriverViolation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DriverViolations
    * const driverViolations = await prisma.driverViolation.findMany()
    * ```
    */
  get driverViolation(): Prisma.DriverViolationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.driverAssignment`: Exposes CRUD operations for the **DriverAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DriverAssignments
    * const driverAssignments = await prisma.driverAssignment.findMany()
    * ```
    */
  get driverAssignment(): Prisma.DriverAssignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
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
    Driver: 'Driver',
    DriverWorkExperience: 'DriverWorkExperience',
    DriverReference: 'DriverReference',
    DriverDocument: 'DriverDocument',
    DriverViolation: 'DriverViolation',
    DriverAssignment: 'DriverAssignment',
    User: 'User'
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
      modelProps: "driver" | "driverWorkExperience" | "driverReference" | "driverDocument" | "driverViolation" | "driverAssignment" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Driver: {
        payload: Prisma.$DriverPayload<ExtArgs>
        fields: Prisma.DriverFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DriverFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DriverFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          findFirst: {
            args: Prisma.DriverFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DriverFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          findMany: {
            args: Prisma.DriverFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>[]
          }
          create: {
            args: Prisma.DriverCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          createMany: {
            args: Prisma.DriverCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DriverCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>[]
          }
          delete: {
            args: Prisma.DriverDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          update: {
            args: Prisma.DriverUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          deleteMany: {
            args: Prisma.DriverDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DriverUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DriverUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>[]
          }
          upsert: {
            args: Prisma.DriverUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          aggregate: {
            args: Prisma.DriverAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDriver>
          }
          groupBy: {
            args: Prisma.DriverGroupByArgs<ExtArgs>
            result: $Utils.Optional<DriverGroupByOutputType>[]
          }
          count: {
            args: Prisma.DriverCountArgs<ExtArgs>
            result: $Utils.Optional<DriverCountAggregateOutputType> | number
          }
        }
      }
      DriverWorkExperience: {
        payload: Prisma.$DriverWorkExperiencePayload<ExtArgs>
        fields: Prisma.DriverWorkExperienceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DriverWorkExperienceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverWorkExperiencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DriverWorkExperienceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverWorkExperiencePayload>
          }
          findFirst: {
            args: Prisma.DriverWorkExperienceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverWorkExperiencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DriverWorkExperienceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverWorkExperiencePayload>
          }
          findMany: {
            args: Prisma.DriverWorkExperienceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverWorkExperiencePayload>[]
          }
          create: {
            args: Prisma.DriverWorkExperienceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverWorkExperiencePayload>
          }
          createMany: {
            args: Prisma.DriverWorkExperienceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DriverWorkExperienceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverWorkExperiencePayload>[]
          }
          delete: {
            args: Prisma.DriverWorkExperienceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverWorkExperiencePayload>
          }
          update: {
            args: Prisma.DriverWorkExperienceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverWorkExperiencePayload>
          }
          deleteMany: {
            args: Prisma.DriverWorkExperienceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DriverWorkExperienceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DriverWorkExperienceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverWorkExperiencePayload>[]
          }
          upsert: {
            args: Prisma.DriverWorkExperienceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverWorkExperiencePayload>
          }
          aggregate: {
            args: Prisma.DriverWorkExperienceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDriverWorkExperience>
          }
          groupBy: {
            args: Prisma.DriverWorkExperienceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DriverWorkExperienceGroupByOutputType>[]
          }
          count: {
            args: Prisma.DriverWorkExperienceCountArgs<ExtArgs>
            result: $Utils.Optional<DriverWorkExperienceCountAggregateOutputType> | number
          }
        }
      }
      DriverReference: {
        payload: Prisma.$DriverReferencePayload<ExtArgs>
        fields: Prisma.DriverReferenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DriverReferenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverReferencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DriverReferenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverReferencePayload>
          }
          findFirst: {
            args: Prisma.DriverReferenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverReferencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DriverReferenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverReferencePayload>
          }
          findMany: {
            args: Prisma.DriverReferenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverReferencePayload>[]
          }
          create: {
            args: Prisma.DriverReferenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverReferencePayload>
          }
          createMany: {
            args: Prisma.DriverReferenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DriverReferenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverReferencePayload>[]
          }
          delete: {
            args: Prisma.DriverReferenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverReferencePayload>
          }
          update: {
            args: Prisma.DriverReferenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverReferencePayload>
          }
          deleteMany: {
            args: Prisma.DriverReferenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DriverReferenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DriverReferenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverReferencePayload>[]
          }
          upsert: {
            args: Prisma.DriverReferenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverReferencePayload>
          }
          aggregate: {
            args: Prisma.DriverReferenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDriverReference>
          }
          groupBy: {
            args: Prisma.DriverReferenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DriverReferenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.DriverReferenceCountArgs<ExtArgs>
            result: $Utils.Optional<DriverReferenceCountAggregateOutputType> | number
          }
        }
      }
      DriverDocument: {
        payload: Prisma.$DriverDocumentPayload<ExtArgs>
        fields: Prisma.DriverDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DriverDocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DriverDocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverDocumentPayload>
          }
          findFirst: {
            args: Prisma.DriverDocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DriverDocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverDocumentPayload>
          }
          findMany: {
            args: Prisma.DriverDocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverDocumentPayload>[]
          }
          create: {
            args: Prisma.DriverDocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverDocumentPayload>
          }
          createMany: {
            args: Prisma.DriverDocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DriverDocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverDocumentPayload>[]
          }
          delete: {
            args: Prisma.DriverDocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverDocumentPayload>
          }
          update: {
            args: Prisma.DriverDocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverDocumentPayload>
          }
          deleteMany: {
            args: Prisma.DriverDocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DriverDocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DriverDocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverDocumentPayload>[]
          }
          upsert: {
            args: Prisma.DriverDocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverDocumentPayload>
          }
          aggregate: {
            args: Prisma.DriverDocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDriverDocument>
          }
          groupBy: {
            args: Prisma.DriverDocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DriverDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DriverDocumentCountArgs<ExtArgs>
            result: $Utils.Optional<DriverDocumentCountAggregateOutputType> | number
          }
        }
      }
      DriverViolation: {
        payload: Prisma.$DriverViolationPayload<ExtArgs>
        fields: Prisma.DriverViolationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DriverViolationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverViolationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DriverViolationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverViolationPayload>
          }
          findFirst: {
            args: Prisma.DriverViolationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverViolationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DriverViolationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverViolationPayload>
          }
          findMany: {
            args: Prisma.DriverViolationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverViolationPayload>[]
          }
          create: {
            args: Prisma.DriverViolationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverViolationPayload>
          }
          createMany: {
            args: Prisma.DriverViolationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DriverViolationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverViolationPayload>[]
          }
          delete: {
            args: Prisma.DriverViolationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverViolationPayload>
          }
          update: {
            args: Prisma.DriverViolationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverViolationPayload>
          }
          deleteMany: {
            args: Prisma.DriverViolationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DriverViolationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DriverViolationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverViolationPayload>[]
          }
          upsert: {
            args: Prisma.DriverViolationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverViolationPayload>
          }
          aggregate: {
            args: Prisma.DriverViolationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDriverViolation>
          }
          groupBy: {
            args: Prisma.DriverViolationGroupByArgs<ExtArgs>
            result: $Utils.Optional<DriverViolationGroupByOutputType>[]
          }
          count: {
            args: Prisma.DriverViolationCountArgs<ExtArgs>
            result: $Utils.Optional<DriverViolationCountAggregateOutputType> | number
          }
        }
      }
      DriverAssignment: {
        payload: Prisma.$DriverAssignmentPayload<ExtArgs>
        fields: Prisma.DriverAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DriverAssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DriverAssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverAssignmentPayload>
          }
          findFirst: {
            args: Prisma.DriverAssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DriverAssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverAssignmentPayload>
          }
          findMany: {
            args: Prisma.DriverAssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverAssignmentPayload>[]
          }
          create: {
            args: Prisma.DriverAssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverAssignmentPayload>
          }
          createMany: {
            args: Prisma.DriverAssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DriverAssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverAssignmentPayload>[]
          }
          delete: {
            args: Prisma.DriverAssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverAssignmentPayload>
          }
          update: {
            args: Prisma.DriverAssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.DriverAssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DriverAssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DriverAssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverAssignmentPayload>[]
          }
          upsert: {
            args: Prisma.DriverAssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverAssignmentPayload>
          }
          aggregate: {
            args: Prisma.DriverAssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDriverAssignment>
          }
          groupBy: {
            args: Prisma.DriverAssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DriverAssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DriverAssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<DriverAssignmentCountAggregateOutputType> | number
          }
        }
      }
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    driver?: DriverOmit
    driverWorkExperience?: DriverWorkExperienceOmit
    driverReference?: DriverReferenceOmit
    driverDocument?: DriverDocumentOmit
    driverViolation?: DriverViolationOmit
    driverAssignment?: DriverAssignmentOmit
    user?: UserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type DriverCountOutputType
   */

  export type DriverCountOutputType = {
    workExperiences: number
    references: number
    documents: number
    violations: number
    assignments: number
  }

  export type DriverCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workExperiences?: boolean | DriverCountOutputTypeCountWorkExperiencesArgs
    references?: boolean | DriverCountOutputTypeCountReferencesArgs
    documents?: boolean | DriverCountOutputTypeCountDocumentsArgs
    violations?: boolean | DriverCountOutputTypeCountViolationsArgs
    assignments?: boolean | DriverCountOutputTypeCountAssignmentsArgs
  }

  // Custom InputTypes
  /**
   * DriverCountOutputType without action
   */
  export type DriverCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverCountOutputType
     */
    select?: DriverCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DriverCountOutputType without action
   */
  export type DriverCountOutputTypeCountWorkExperiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DriverWorkExperienceWhereInput
  }

  /**
   * DriverCountOutputType without action
   */
  export type DriverCountOutputTypeCountReferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DriverReferenceWhereInput
  }

  /**
   * DriverCountOutputType without action
   */
  export type DriverCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DriverDocumentWhereInput
  }

  /**
   * DriverCountOutputType without action
   */
  export type DriverCountOutputTypeCountViolationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DriverViolationWhereInput
  }

  /**
   * DriverCountOutputType without action
   */
  export type DriverCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DriverAssignmentWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    createdDrivers: number
    updatedDrivers: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdDrivers?: boolean | UserCountOutputTypeCountCreatedDriversArgs
    updatedDrivers?: boolean | UserCountOutputTypeCountUpdatedDriversArgs
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
  export type UserCountOutputTypeCountCreatedDriversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DriverWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUpdatedDriversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DriverWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Driver
   */

  export type AggregateDriver = {
    _count: DriverCountAggregateOutputType | null
    _avg: DriverAvgAggregateOutputType | null
    _sum: DriverSumAggregateOutputType | null
    _min: DriverMinAggregateOutputType | null
    _max: DriverMaxAggregateOutputType | null
  }

  export type DriverAvgAggregateOutputType = {
    age: number | null
    driverId: number | null
    experienceYear: number | null
    experienceMonth: number | null
    salary: number | null
    drivingSince: number | null
    randomDrugAlcoholCount: number | null
  }

  export type DriverSumAggregateOutputType = {
    age: number | null
    driverId: number | null
    experienceYear: number | null
    experienceMonth: number | null
    salary: number | null
    drivingSince: number | null
    randomDrugAlcoholCount: number | null
  }

  export type DriverMinAggregateOutputType = {
    id: string | null
    driverImage: string | null
    driverName: string | null
    fatherName: string | null
    dateOfBirth: Date | null
    age: number | null
    gender: $Enums.Gender | null
    placeOfBirth: string | null
    address: string | null
    maritalStatus: $Enums.MaritalStatus | null
    bloodGroup: $Enums.BloodGroup | null
    contactNo: string | null
    emergencyContact: string | null
    emergencyContactName: string | null
    driverId: number | null
    pkCode: string | null
    vehicleNo: string | null
    inductionDate: Date | null
    jobStatus: $Enums.JobStatus | null
    education: $Enums.EducationLevel | null
    previousJob: $Enums.PreviousJob | null
    typeOfVehicle: $Enums.VehicleType | null
    experienceYear: number | null
    experienceMonth: number | null
    currentJob: string | null
    salary: number | null
    cnicNo: string | null
    cnicFront: string | null
    cnicBack: string | null
    cnicIssueDate: Date | null
    cnicExpiryDate: Date | null
    cnicVerified: $Enums.YesNo | null
    licenseNo: string | null
    licenseIssueDate: Date | null
    licenseExpiryDate: Date | null
    licenseStatus: string | null
    typeOfLicense: $Enums.LicenseType | null
    drivingSince: number | null
    licenseOnlineVerification: $Enums.YesNo | null
    covid19Vaccination: $Enums.CovidVaccinationStatus | null
    firstDoseExpiry: Date | null
    secondDoseExpiry: Date | null
    boosterDose: Date | null
    boosterStatus: $Enums.BoosterStatus | null
    medicalCheck: $Enums.YesNo | null
    medicalIssueDate: Date | null
    medicalExpiryDate: Date | null
    medicalStatus: $Enums.MedicalStatus | null
    medicalCertificate: string | null
    ddcNHMP: $Enums.YesNo | null
    ddcNHMPIssueDate: Date | null
    ddcNHMPExpiryDate: Date | null
    ddcNHMPStatus: $Enums.DDCStatus | null
    ddcNHMPResult: $Enums.DDCResult | null
    ddcCertificate: string | null
    randomDrugAlcoholDate: Date | null
    randomDrugAlcoholCount: number | null
    randomDrugAlcoholStatus: $Enums.DrugAlcoholStatus | null
    drugTestCertificate: string | null
    policeVF: $Enums.YesNo | null
    policeVFCertificate: string | null
    tpplPolicy: $Enums.YesNo | null
    securityClearance: $Enums.YesNo | null
    notes: string | null
    isActive: boolean | null
    lastLogin: Date | null
    passwordHash: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
    updatedById: string | null
  }

  export type DriverMaxAggregateOutputType = {
    id: string | null
    driverImage: string | null
    driverName: string | null
    fatherName: string | null
    dateOfBirth: Date | null
    age: number | null
    gender: $Enums.Gender | null
    placeOfBirth: string | null
    address: string | null
    maritalStatus: $Enums.MaritalStatus | null
    bloodGroup: $Enums.BloodGroup | null
    contactNo: string | null
    emergencyContact: string | null
    emergencyContactName: string | null
    driverId: number | null
    pkCode: string | null
    vehicleNo: string | null
    inductionDate: Date | null
    jobStatus: $Enums.JobStatus | null
    education: $Enums.EducationLevel | null
    previousJob: $Enums.PreviousJob | null
    typeOfVehicle: $Enums.VehicleType | null
    experienceYear: number | null
    experienceMonth: number | null
    currentJob: string | null
    salary: number | null
    cnicNo: string | null
    cnicFront: string | null
    cnicBack: string | null
    cnicIssueDate: Date | null
    cnicExpiryDate: Date | null
    cnicVerified: $Enums.YesNo | null
    licenseNo: string | null
    licenseIssueDate: Date | null
    licenseExpiryDate: Date | null
    licenseStatus: string | null
    typeOfLicense: $Enums.LicenseType | null
    drivingSince: number | null
    licenseOnlineVerification: $Enums.YesNo | null
    covid19Vaccination: $Enums.CovidVaccinationStatus | null
    firstDoseExpiry: Date | null
    secondDoseExpiry: Date | null
    boosterDose: Date | null
    boosterStatus: $Enums.BoosterStatus | null
    medicalCheck: $Enums.YesNo | null
    medicalIssueDate: Date | null
    medicalExpiryDate: Date | null
    medicalStatus: $Enums.MedicalStatus | null
    medicalCertificate: string | null
    ddcNHMP: $Enums.YesNo | null
    ddcNHMPIssueDate: Date | null
    ddcNHMPExpiryDate: Date | null
    ddcNHMPStatus: $Enums.DDCStatus | null
    ddcNHMPResult: $Enums.DDCResult | null
    ddcCertificate: string | null
    randomDrugAlcoholDate: Date | null
    randomDrugAlcoholCount: number | null
    randomDrugAlcoholStatus: $Enums.DrugAlcoholStatus | null
    drugTestCertificate: string | null
    policeVF: $Enums.YesNo | null
    policeVFCertificate: string | null
    tpplPolicy: $Enums.YesNo | null
    securityClearance: $Enums.YesNo | null
    notes: string | null
    isActive: boolean | null
    lastLogin: Date | null
    passwordHash: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
    updatedById: string | null
  }

  export type DriverCountAggregateOutputType = {
    id: number
    driverImage: number
    driverName: number
    fatherName: number
    dateOfBirth: number
    age: number
    gender: number
    placeOfBirth: number
    address: number
    maritalStatus: number
    bloodGroup: number
    contactNo: number
    emergencyContact: number
    emergencyContactName: number
    driverId: number
    pkCode: number
    vehicleNo: number
    inductionDate: number
    jobStatus: number
    education: number
    previousJob: number
    typeOfVehicle: number
    experienceYear: number
    experienceMonth: number
    currentJob: number
    salary: number
    cnicNo: number
    cnicFront: number
    cnicBack: number
    cnicIssueDate: number
    cnicExpiryDate: number
    cnicVerified: number
    licenseNo: number
    licenseIssueDate: number
    licenseExpiryDate: number
    licenseStatus: number
    typeOfLicense: number
    drivingSince: number
    licenseOnlineVerification: number
    covid19Vaccination: number
    firstDoseExpiry: number
    secondDoseExpiry: number
    boosterDose: number
    boosterStatus: number
    medicalCheck: number
    medicalIssueDate: number
    medicalExpiryDate: number
    medicalStatus: number
    medicalCertificate: number
    ddcNHMP: number
    ddcNHMPIssueDate: number
    ddcNHMPExpiryDate: number
    ddcNHMPStatus: number
    ddcNHMPResult: number
    ddcCertificate: number
    randomDrugAlcoholDate: number
    randomDrugAlcoholCount: number
    randomDrugAlcoholStatus: number
    drugTestCertificate: number
    policeVF: number
    policeVFCertificate: number
    tpplPolicy: number
    securityClearance: number
    languages: number
    notes: number
    isActive: number
    lastLogin: number
    passwordHash: number
    email: number
    createdAt: number
    updatedAt: number
    createdById: number
    updatedById: number
    _all: number
  }


  export type DriverAvgAggregateInputType = {
    age?: true
    driverId?: true
    experienceYear?: true
    experienceMonth?: true
    salary?: true
    drivingSince?: true
    randomDrugAlcoholCount?: true
  }

  export type DriverSumAggregateInputType = {
    age?: true
    driverId?: true
    experienceYear?: true
    experienceMonth?: true
    salary?: true
    drivingSince?: true
    randomDrugAlcoholCount?: true
  }

  export type DriverMinAggregateInputType = {
    id?: true
    driverImage?: true
    driverName?: true
    fatherName?: true
    dateOfBirth?: true
    age?: true
    gender?: true
    placeOfBirth?: true
    address?: true
    maritalStatus?: true
    bloodGroup?: true
    contactNo?: true
    emergencyContact?: true
    emergencyContactName?: true
    driverId?: true
    pkCode?: true
    vehicleNo?: true
    inductionDate?: true
    jobStatus?: true
    education?: true
    previousJob?: true
    typeOfVehicle?: true
    experienceYear?: true
    experienceMonth?: true
    currentJob?: true
    salary?: true
    cnicNo?: true
    cnicFront?: true
    cnicBack?: true
    cnicIssueDate?: true
    cnicExpiryDate?: true
    cnicVerified?: true
    licenseNo?: true
    licenseIssueDate?: true
    licenseExpiryDate?: true
    licenseStatus?: true
    typeOfLicense?: true
    drivingSince?: true
    licenseOnlineVerification?: true
    covid19Vaccination?: true
    firstDoseExpiry?: true
    secondDoseExpiry?: true
    boosterDose?: true
    boosterStatus?: true
    medicalCheck?: true
    medicalIssueDate?: true
    medicalExpiryDate?: true
    medicalStatus?: true
    medicalCertificate?: true
    ddcNHMP?: true
    ddcNHMPIssueDate?: true
    ddcNHMPExpiryDate?: true
    ddcNHMPStatus?: true
    ddcNHMPResult?: true
    ddcCertificate?: true
    randomDrugAlcoholDate?: true
    randomDrugAlcoholCount?: true
    randomDrugAlcoholStatus?: true
    drugTestCertificate?: true
    policeVF?: true
    policeVFCertificate?: true
    tpplPolicy?: true
    securityClearance?: true
    notes?: true
    isActive?: true
    lastLogin?: true
    passwordHash?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    updatedById?: true
  }

  export type DriverMaxAggregateInputType = {
    id?: true
    driverImage?: true
    driverName?: true
    fatherName?: true
    dateOfBirth?: true
    age?: true
    gender?: true
    placeOfBirth?: true
    address?: true
    maritalStatus?: true
    bloodGroup?: true
    contactNo?: true
    emergencyContact?: true
    emergencyContactName?: true
    driverId?: true
    pkCode?: true
    vehicleNo?: true
    inductionDate?: true
    jobStatus?: true
    education?: true
    previousJob?: true
    typeOfVehicle?: true
    experienceYear?: true
    experienceMonth?: true
    currentJob?: true
    salary?: true
    cnicNo?: true
    cnicFront?: true
    cnicBack?: true
    cnicIssueDate?: true
    cnicExpiryDate?: true
    cnicVerified?: true
    licenseNo?: true
    licenseIssueDate?: true
    licenseExpiryDate?: true
    licenseStatus?: true
    typeOfLicense?: true
    drivingSince?: true
    licenseOnlineVerification?: true
    covid19Vaccination?: true
    firstDoseExpiry?: true
    secondDoseExpiry?: true
    boosterDose?: true
    boosterStatus?: true
    medicalCheck?: true
    medicalIssueDate?: true
    medicalExpiryDate?: true
    medicalStatus?: true
    medicalCertificate?: true
    ddcNHMP?: true
    ddcNHMPIssueDate?: true
    ddcNHMPExpiryDate?: true
    ddcNHMPStatus?: true
    ddcNHMPResult?: true
    ddcCertificate?: true
    randomDrugAlcoholDate?: true
    randomDrugAlcoholCount?: true
    randomDrugAlcoholStatus?: true
    drugTestCertificate?: true
    policeVF?: true
    policeVFCertificate?: true
    tpplPolicy?: true
    securityClearance?: true
    notes?: true
    isActive?: true
    lastLogin?: true
    passwordHash?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    updatedById?: true
  }

  export type DriverCountAggregateInputType = {
    id?: true
    driverImage?: true
    driverName?: true
    fatherName?: true
    dateOfBirth?: true
    age?: true
    gender?: true
    placeOfBirth?: true
    address?: true
    maritalStatus?: true
    bloodGroup?: true
    contactNo?: true
    emergencyContact?: true
    emergencyContactName?: true
    driverId?: true
    pkCode?: true
    vehicleNo?: true
    inductionDate?: true
    jobStatus?: true
    education?: true
    previousJob?: true
    typeOfVehicle?: true
    experienceYear?: true
    experienceMonth?: true
    currentJob?: true
    salary?: true
    cnicNo?: true
    cnicFront?: true
    cnicBack?: true
    cnicIssueDate?: true
    cnicExpiryDate?: true
    cnicVerified?: true
    licenseNo?: true
    licenseIssueDate?: true
    licenseExpiryDate?: true
    licenseStatus?: true
    typeOfLicense?: true
    drivingSince?: true
    licenseOnlineVerification?: true
    covid19Vaccination?: true
    firstDoseExpiry?: true
    secondDoseExpiry?: true
    boosterDose?: true
    boosterStatus?: true
    medicalCheck?: true
    medicalIssueDate?: true
    medicalExpiryDate?: true
    medicalStatus?: true
    medicalCertificate?: true
    ddcNHMP?: true
    ddcNHMPIssueDate?: true
    ddcNHMPExpiryDate?: true
    ddcNHMPStatus?: true
    ddcNHMPResult?: true
    ddcCertificate?: true
    randomDrugAlcoholDate?: true
    randomDrugAlcoholCount?: true
    randomDrugAlcoholStatus?: true
    drugTestCertificate?: true
    policeVF?: true
    policeVFCertificate?: true
    tpplPolicy?: true
    securityClearance?: true
    languages?: true
    notes?: true
    isActive?: true
    lastLogin?: true
    passwordHash?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    updatedById?: true
    _all?: true
  }

  export type DriverAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Driver to aggregate.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Drivers
    **/
    _count?: true | DriverCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DriverAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DriverSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DriverMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DriverMaxAggregateInputType
  }

  export type GetDriverAggregateType<T extends DriverAggregateArgs> = {
        [P in keyof T & keyof AggregateDriver]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDriver[P]>
      : GetScalarType<T[P], AggregateDriver[P]>
  }




  export type DriverGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DriverWhereInput
    orderBy?: DriverOrderByWithAggregationInput | DriverOrderByWithAggregationInput[]
    by: DriverScalarFieldEnum[] | DriverScalarFieldEnum
    having?: DriverScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DriverCountAggregateInputType | true
    _avg?: DriverAvgAggregateInputType
    _sum?: DriverSumAggregateInputType
    _min?: DriverMinAggregateInputType
    _max?: DriverMaxAggregateInputType
  }

  export type DriverGroupByOutputType = {
    id: string
    driverImage: string | null
    driverName: string
    fatherName: string
    dateOfBirth: Date
    age: number
    gender: $Enums.Gender
    placeOfBirth: string
    address: string
    maritalStatus: $Enums.MaritalStatus
    bloodGroup: $Enums.BloodGroup
    contactNo: string
    emergencyContact: string | null
    emergencyContactName: string | null
    driverId: number
    pkCode: string
    vehicleNo: string
    inductionDate: Date
    jobStatus: $Enums.JobStatus
    education: $Enums.EducationLevel
    previousJob: $Enums.PreviousJob
    typeOfVehicle: $Enums.VehicleType
    experienceYear: number | null
    experienceMonth: number | null
    currentJob: string
    salary: number | null
    cnicNo: string
    cnicFront: string
    cnicBack: string
    cnicIssueDate: Date
    cnicExpiryDate: Date
    cnicVerified: $Enums.YesNo
    licenseNo: string
    licenseIssueDate: Date
    licenseExpiryDate: Date
    licenseStatus: string
    typeOfLicense: $Enums.LicenseType
    drivingSince: number
    licenseOnlineVerification: $Enums.YesNo
    covid19Vaccination: $Enums.CovidVaccinationStatus
    firstDoseExpiry: Date | null
    secondDoseExpiry: Date | null
    boosterDose: Date | null
    boosterStatus: $Enums.BoosterStatus | null
    medicalCheck: $Enums.YesNo
    medicalIssueDate: Date | null
    medicalExpiryDate: Date | null
    medicalStatus: $Enums.MedicalStatus | null
    medicalCertificate: string | null
    ddcNHMP: $Enums.YesNo
    ddcNHMPIssueDate: Date | null
    ddcNHMPExpiryDate: Date | null
    ddcNHMPStatus: $Enums.DDCStatus | null
    ddcNHMPResult: $Enums.DDCResult | null
    ddcCertificate: string | null
    randomDrugAlcoholDate: Date | null
    randomDrugAlcoholCount: number | null
    randomDrugAlcoholStatus: $Enums.DrugAlcoholStatus | null
    drugTestCertificate: string | null
    policeVF: $Enums.YesNo
    policeVFCertificate: string | null
    tpplPolicy: $Enums.YesNo
    securityClearance: $Enums.YesNo
    languages: JsonValue
    notes: string | null
    isActive: boolean
    lastLogin: Date | null
    passwordHash: string | null
    email: string | null
    createdAt: Date
    updatedAt: Date
    createdById: string | null
    updatedById: string | null
    _count: DriverCountAggregateOutputType | null
    _avg: DriverAvgAggregateOutputType | null
    _sum: DriverSumAggregateOutputType | null
    _min: DriverMinAggregateOutputType | null
    _max: DriverMaxAggregateOutputType | null
  }

  type GetDriverGroupByPayload<T extends DriverGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DriverGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DriverGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DriverGroupByOutputType[P]>
            : GetScalarType<T[P], DriverGroupByOutputType[P]>
        }
      >
    >


  export type DriverSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    driverImage?: boolean
    driverName?: boolean
    fatherName?: boolean
    dateOfBirth?: boolean
    age?: boolean
    gender?: boolean
    placeOfBirth?: boolean
    address?: boolean
    maritalStatus?: boolean
    bloodGroup?: boolean
    contactNo?: boolean
    emergencyContact?: boolean
    emergencyContactName?: boolean
    driverId?: boolean
    pkCode?: boolean
    vehicleNo?: boolean
    inductionDate?: boolean
    jobStatus?: boolean
    education?: boolean
    previousJob?: boolean
    typeOfVehicle?: boolean
    experienceYear?: boolean
    experienceMonth?: boolean
    currentJob?: boolean
    salary?: boolean
    cnicNo?: boolean
    cnicFront?: boolean
    cnicBack?: boolean
    cnicIssueDate?: boolean
    cnicExpiryDate?: boolean
    cnicVerified?: boolean
    licenseNo?: boolean
    licenseIssueDate?: boolean
    licenseExpiryDate?: boolean
    licenseStatus?: boolean
    typeOfLicense?: boolean
    drivingSince?: boolean
    licenseOnlineVerification?: boolean
    covid19Vaccination?: boolean
    firstDoseExpiry?: boolean
    secondDoseExpiry?: boolean
    boosterDose?: boolean
    boosterStatus?: boolean
    medicalCheck?: boolean
    medicalIssueDate?: boolean
    medicalExpiryDate?: boolean
    medicalStatus?: boolean
    medicalCertificate?: boolean
    ddcNHMP?: boolean
    ddcNHMPIssueDate?: boolean
    ddcNHMPExpiryDate?: boolean
    ddcNHMPStatus?: boolean
    ddcNHMPResult?: boolean
    ddcCertificate?: boolean
    randomDrugAlcoholDate?: boolean
    randomDrugAlcoholCount?: boolean
    randomDrugAlcoholStatus?: boolean
    drugTestCertificate?: boolean
    policeVF?: boolean
    policeVFCertificate?: boolean
    tpplPolicy?: boolean
    securityClearance?: boolean
    languages?: boolean
    notes?: boolean
    isActive?: boolean
    lastLogin?: boolean
    passwordHash?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    updatedById?: boolean
    workExperiences?: boolean | Driver$workExperiencesArgs<ExtArgs>
    references?: boolean | Driver$referencesArgs<ExtArgs>
    documents?: boolean | Driver$documentsArgs<ExtArgs>
    violations?: boolean | Driver$violationsArgs<ExtArgs>
    assignments?: boolean | Driver$assignmentsArgs<ExtArgs>
    createdBy?: boolean | Driver$createdByArgs<ExtArgs>
    updatedBy?: boolean | Driver$updatedByArgs<ExtArgs>
    _count?: boolean | DriverCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["driver"]>

  export type DriverSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    driverImage?: boolean
    driverName?: boolean
    fatherName?: boolean
    dateOfBirth?: boolean
    age?: boolean
    gender?: boolean
    placeOfBirth?: boolean
    address?: boolean
    maritalStatus?: boolean
    bloodGroup?: boolean
    contactNo?: boolean
    emergencyContact?: boolean
    emergencyContactName?: boolean
    driverId?: boolean
    pkCode?: boolean
    vehicleNo?: boolean
    inductionDate?: boolean
    jobStatus?: boolean
    education?: boolean
    previousJob?: boolean
    typeOfVehicle?: boolean
    experienceYear?: boolean
    experienceMonth?: boolean
    currentJob?: boolean
    salary?: boolean
    cnicNo?: boolean
    cnicFront?: boolean
    cnicBack?: boolean
    cnicIssueDate?: boolean
    cnicExpiryDate?: boolean
    cnicVerified?: boolean
    licenseNo?: boolean
    licenseIssueDate?: boolean
    licenseExpiryDate?: boolean
    licenseStatus?: boolean
    typeOfLicense?: boolean
    drivingSince?: boolean
    licenseOnlineVerification?: boolean
    covid19Vaccination?: boolean
    firstDoseExpiry?: boolean
    secondDoseExpiry?: boolean
    boosterDose?: boolean
    boosterStatus?: boolean
    medicalCheck?: boolean
    medicalIssueDate?: boolean
    medicalExpiryDate?: boolean
    medicalStatus?: boolean
    medicalCertificate?: boolean
    ddcNHMP?: boolean
    ddcNHMPIssueDate?: boolean
    ddcNHMPExpiryDate?: boolean
    ddcNHMPStatus?: boolean
    ddcNHMPResult?: boolean
    ddcCertificate?: boolean
    randomDrugAlcoholDate?: boolean
    randomDrugAlcoholCount?: boolean
    randomDrugAlcoholStatus?: boolean
    drugTestCertificate?: boolean
    policeVF?: boolean
    policeVFCertificate?: boolean
    tpplPolicy?: boolean
    securityClearance?: boolean
    languages?: boolean
    notes?: boolean
    isActive?: boolean
    lastLogin?: boolean
    passwordHash?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    updatedById?: boolean
    createdBy?: boolean | Driver$createdByArgs<ExtArgs>
    updatedBy?: boolean | Driver$updatedByArgs<ExtArgs>
  }, ExtArgs["result"]["driver"]>

  export type DriverSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    driverImage?: boolean
    driverName?: boolean
    fatherName?: boolean
    dateOfBirth?: boolean
    age?: boolean
    gender?: boolean
    placeOfBirth?: boolean
    address?: boolean
    maritalStatus?: boolean
    bloodGroup?: boolean
    contactNo?: boolean
    emergencyContact?: boolean
    emergencyContactName?: boolean
    driverId?: boolean
    pkCode?: boolean
    vehicleNo?: boolean
    inductionDate?: boolean
    jobStatus?: boolean
    education?: boolean
    previousJob?: boolean
    typeOfVehicle?: boolean
    experienceYear?: boolean
    experienceMonth?: boolean
    currentJob?: boolean
    salary?: boolean
    cnicNo?: boolean
    cnicFront?: boolean
    cnicBack?: boolean
    cnicIssueDate?: boolean
    cnicExpiryDate?: boolean
    cnicVerified?: boolean
    licenseNo?: boolean
    licenseIssueDate?: boolean
    licenseExpiryDate?: boolean
    licenseStatus?: boolean
    typeOfLicense?: boolean
    drivingSince?: boolean
    licenseOnlineVerification?: boolean
    covid19Vaccination?: boolean
    firstDoseExpiry?: boolean
    secondDoseExpiry?: boolean
    boosterDose?: boolean
    boosterStatus?: boolean
    medicalCheck?: boolean
    medicalIssueDate?: boolean
    medicalExpiryDate?: boolean
    medicalStatus?: boolean
    medicalCertificate?: boolean
    ddcNHMP?: boolean
    ddcNHMPIssueDate?: boolean
    ddcNHMPExpiryDate?: boolean
    ddcNHMPStatus?: boolean
    ddcNHMPResult?: boolean
    ddcCertificate?: boolean
    randomDrugAlcoholDate?: boolean
    randomDrugAlcoholCount?: boolean
    randomDrugAlcoholStatus?: boolean
    drugTestCertificate?: boolean
    policeVF?: boolean
    policeVFCertificate?: boolean
    tpplPolicy?: boolean
    securityClearance?: boolean
    languages?: boolean
    notes?: boolean
    isActive?: boolean
    lastLogin?: boolean
    passwordHash?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    updatedById?: boolean
    createdBy?: boolean | Driver$createdByArgs<ExtArgs>
    updatedBy?: boolean | Driver$updatedByArgs<ExtArgs>
  }, ExtArgs["result"]["driver"]>

  export type DriverSelectScalar = {
    id?: boolean
    driverImage?: boolean
    driverName?: boolean
    fatherName?: boolean
    dateOfBirth?: boolean
    age?: boolean
    gender?: boolean
    placeOfBirth?: boolean
    address?: boolean
    maritalStatus?: boolean
    bloodGroup?: boolean
    contactNo?: boolean
    emergencyContact?: boolean
    emergencyContactName?: boolean
    driverId?: boolean
    pkCode?: boolean
    vehicleNo?: boolean
    inductionDate?: boolean
    jobStatus?: boolean
    education?: boolean
    previousJob?: boolean
    typeOfVehicle?: boolean
    experienceYear?: boolean
    experienceMonth?: boolean
    currentJob?: boolean
    salary?: boolean
    cnicNo?: boolean
    cnicFront?: boolean
    cnicBack?: boolean
    cnicIssueDate?: boolean
    cnicExpiryDate?: boolean
    cnicVerified?: boolean
    licenseNo?: boolean
    licenseIssueDate?: boolean
    licenseExpiryDate?: boolean
    licenseStatus?: boolean
    typeOfLicense?: boolean
    drivingSince?: boolean
    licenseOnlineVerification?: boolean
    covid19Vaccination?: boolean
    firstDoseExpiry?: boolean
    secondDoseExpiry?: boolean
    boosterDose?: boolean
    boosterStatus?: boolean
    medicalCheck?: boolean
    medicalIssueDate?: boolean
    medicalExpiryDate?: boolean
    medicalStatus?: boolean
    medicalCertificate?: boolean
    ddcNHMP?: boolean
    ddcNHMPIssueDate?: boolean
    ddcNHMPExpiryDate?: boolean
    ddcNHMPStatus?: boolean
    ddcNHMPResult?: boolean
    ddcCertificate?: boolean
    randomDrugAlcoholDate?: boolean
    randomDrugAlcoholCount?: boolean
    randomDrugAlcoholStatus?: boolean
    drugTestCertificate?: boolean
    policeVF?: boolean
    policeVFCertificate?: boolean
    tpplPolicy?: boolean
    securityClearance?: boolean
    languages?: boolean
    notes?: boolean
    isActive?: boolean
    lastLogin?: boolean
    passwordHash?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    updatedById?: boolean
  }

  export type DriverOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "driverImage" | "driverName" | "fatherName" | "dateOfBirth" | "age" | "gender" | "placeOfBirth" | "address" | "maritalStatus" | "bloodGroup" | "contactNo" | "emergencyContact" | "emergencyContactName" | "driverId" | "pkCode" | "vehicleNo" | "inductionDate" | "jobStatus" | "education" | "previousJob" | "typeOfVehicle" | "experienceYear" | "experienceMonth" | "currentJob" | "salary" | "cnicNo" | "cnicFront" | "cnicBack" | "cnicIssueDate" | "cnicExpiryDate" | "cnicVerified" | "licenseNo" | "licenseIssueDate" | "licenseExpiryDate" | "licenseStatus" | "typeOfLicense" | "drivingSince" | "licenseOnlineVerification" | "covid19Vaccination" | "firstDoseExpiry" | "secondDoseExpiry" | "boosterDose" | "boosterStatus" | "medicalCheck" | "medicalIssueDate" | "medicalExpiryDate" | "medicalStatus" | "medicalCertificate" | "ddcNHMP" | "ddcNHMPIssueDate" | "ddcNHMPExpiryDate" | "ddcNHMPStatus" | "ddcNHMPResult" | "ddcCertificate" | "randomDrugAlcoholDate" | "randomDrugAlcoholCount" | "randomDrugAlcoholStatus" | "drugTestCertificate" | "policeVF" | "policeVFCertificate" | "tpplPolicy" | "securityClearance" | "languages" | "notes" | "isActive" | "lastLogin" | "passwordHash" | "email" | "createdAt" | "updatedAt" | "createdById" | "updatedById", ExtArgs["result"]["driver"]>
  export type DriverInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workExperiences?: boolean | Driver$workExperiencesArgs<ExtArgs>
    references?: boolean | Driver$referencesArgs<ExtArgs>
    documents?: boolean | Driver$documentsArgs<ExtArgs>
    violations?: boolean | Driver$violationsArgs<ExtArgs>
    assignments?: boolean | Driver$assignmentsArgs<ExtArgs>
    createdBy?: boolean | Driver$createdByArgs<ExtArgs>
    updatedBy?: boolean | Driver$updatedByArgs<ExtArgs>
    _count?: boolean | DriverCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DriverIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | Driver$createdByArgs<ExtArgs>
    updatedBy?: boolean | Driver$updatedByArgs<ExtArgs>
  }
  export type DriverIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | Driver$createdByArgs<ExtArgs>
    updatedBy?: boolean | Driver$updatedByArgs<ExtArgs>
  }

  export type $DriverPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Driver"
    objects: {
      workExperiences: Prisma.$DriverWorkExperiencePayload<ExtArgs>[]
      references: Prisma.$DriverReferencePayload<ExtArgs>[]
      documents: Prisma.$DriverDocumentPayload<ExtArgs>[]
      violations: Prisma.$DriverViolationPayload<ExtArgs>[]
      assignments: Prisma.$DriverAssignmentPayload<ExtArgs>[]
      createdBy: Prisma.$UserPayload<ExtArgs> | null
      updatedBy: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      driverImage: string | null
      driverName: string
      fatherName: string
      dateOfBirth: Date
      age: number
      gender: $Enums.Gender
      placeOfBirth: string
      address: string
      maritalStatus: $Enums.MaritalStatus
      bloodGroup: $Enums.BloodGroup
      contactNo: string
      emergencyContact: string | null
      emergencyContactName: string | null
      driverId: number
      pkCode: string
      vehicleNo: string
      inductionDate: Date
      jobStatus: $Enums.JobStatus
      education: $Enums.EducationLevel
      previousJob: $Enums.PreviousJob
      typeOfVehicle: $Enums.VehicleType
      experienceYear: number | null
      experienceMonth: number | null
      currentJob: string
      salary: number | null
      cnicNo: string
      cnicFront: string
      cnicBack: string
      cnicIssueDate: Date
      cnicExpiryDate: Date
      cnicVerified: $Enums.YesNo
      licenseNo: string
      licenseIssueDate: Date
      licenseExpiryDate: Date
      licenseStatus: string
      typeOfLicense: $Enums.LicenseType
      drivingSince: number
      licenseOnlineVerification: $Enums.YesNo
      covid19Vaccination: $Enums.CovidVaccinationStatus
      firstDoseExpiry: Date | null
      secondDoseExpiry: Date | null
      boosterDose: Date | null
      boosterStatus: $Enums.BoosterStatus | null
      medicalCheck: $Enums.YesNo
      medicalIssueDate: Date | null
      medicalExpiryDate: Date | null
      medicalStatus: $Enums.MedicalStatus | null
      medicalCertificate: string | null
      ddcNHMP: $Enums.YesNo
      ddcNHMPIssueDate: Date | null
      ddcNHMPExpiryDate: Date | null
      ddcNHMPStatus: $Enums.DDCStatus | null
      ddcNHMPResult: $Enums.DDCResult | null
      ddcCertificate: string | null
      randomDrugAlcoholDate: Date | null
      randomDrugAlcoholCount: number | null
      randomDrugAlcoholStatus: $Enums.DrugAlcoholStatus | null
      drugTestCertificate: string | null
      policeVF: $Enums.YesNo
      policeVFCertificate: string | null
      tpplPolicy: $Enums.YesNo
      securityClearance: $Enums.YesNo
      languages: Prisma.JsonValue
      notes: string | null
      isActive: boolean
      lastLogin: Date | null
      passwordHash: string | null
      email: string | null
      createdAt: Date
      updatedAt: Date
      createdById: string | null
      updatedById: string | null
    }, ExtArgs["result"]["driver"]>
    composites: {}
  }

  type DriverGetPayload<S extends boolean | null | undefined | DriverDefaultArgs> = $Result.GetResult<Prisma.$DriverPayload, S>

  type DriverCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DriverFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DriverCountAggregateInputType | true
    }

  export interface DriverDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Driver'], meta: { name: 'Driver' } }
    /**
     * Find zero or one Driver that matches the filter.
     * @param {DriverFindUniqueArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DriverFindUniqueArgs>(args: SelectSubset<T, DriverFindUniqueArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Driver that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DriverFindUniqueOrThrowArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DriverFindUniqueOrThrowArgs>(args: SelectSubset<T, DriverFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Driver that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverFindFirstArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DriverFindFirstArgs>(args?: SelectSubset<T, DriverFindFirstArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Driver that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverFindFirstOrThrowArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DriverFindFirstOrThrowArgs>(args?: SelectSubset<T, DriverFindFirstOrThrowArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Drivers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Drivers
     * const drivers = await prisma.driver.findMany()
     * 
     * // Get first 10 Drivers
     * const drivers = await prisma.driver.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const driverWithIdOnly = await prisma.driver.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DriverFindManyArgs>(args?: SelectSubset<T, DriverFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Driver.
     * @param {DriverCreateArgs} args - Arguments to create a Driver.
     * @example
     * // Create one Driver
     * const Driver = await prisma.driver.create({
     *   data: {
     *     // ... data to create a Driver
     *   }
     * })
     * 
     */
    create<T extends DriverCreateArgs>(args: SelectSubset<T, DriverCreateArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Drivers.
     * @param {DriverCreateManyArgs} args - Arguments to create many Drivers.
     * @example
     * // Create many Drivers
     * const driver = await prisma.driver.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DriverCreateManyArgs>(args?: SelectSubset<T, DriverCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Drivers and returns the data saved in the database.
     * @param {DriverCreateManyAndReturnArgs} args - Arguments to create many Drivers.
     * @example
     * // Create many Drivers
     * const driver = await prisma.driver.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Drivers and only return the `id`
     * const driverWithIdOnly = await prisma.driver.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DriverCreateManyAndReturnArgs>(args?: SelectSubset<T, DriverCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Driver.
     * @param {DriverDeleteArgs} args - Arguments to delete one Driver.
     * @example
     * // Delete one Driver
     * const Driver = await prisma.driver.delete({
     *   where: {
     *     // ... filter to delete one Driver
     *   }
     * })
     * 
     */
    delete<T extends DriverDeleteArgs>(args: SelectSubset<T, DriverDeleteArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Driver.
     * @param {DriverUpdateArgs} args - Arguments to update one Driver.
     * @example
     * // Update one Driver
     * const driver = await prisma.driver.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DriverUpdateArgs>(args: SelectSubset<T, DriverUpdateArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Drivers.
     * @param {DriverDeleteManyArgs} args - Arguments to filter Drivers to delete.
     * @example
     * // Delete a few Drivers
     * const { count } = await prisma.driver.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DriverDeleteManyArgs>(args?: SelectSubset<T, DriverDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Drivers
     * const driver = await prisma.driver.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DriverUpdateManyArgs>(args: SelectSubset<T, DriverUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drivers and returns the data updated in the database.
     * @param {DriverUpdateManyAndReturnArgs} args - Arguments to update many Drivers.
     * @example
     * // Update many Drivers
     * const driver = await prisma.driver.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Drivers and only return the `id`
     * const driverWithIdOnly = await prisma.driver.updateManyAndReturn({
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
    updateManyAndReturn<T extends DriverUpdateManyAndReturnArgs>(args: SelectSubset<T, DriverUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Driver.
     * @param {DriverUpsertArgs} args - Arguments to update or create a Driver.
     * @example
     * // Update or create a Driver
     * const driver = await prisma.driver.upsert({
     *   create: {
     *     // ... data to create a Driver
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Driver we want to update
     *   }
     * })
     */
    upsert<T extends DriverUpsertArgs>(args: SelectSubset<T, DriverUpsertArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverCountArgs} args - Arguments to filter Drivers to count.
     * @example
     * // Count the number of Drivers
     * const count = await prisma.driver.count({
     *   where: {
     *     // ... the filter for the Drivers we want to count
     *   }
     * })
    **/
    count<T extends DriverCountArgs>(
      args?: Subset<T, DriverCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DriverCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Driver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DriverAggregateArgs>(args: Subset<T, DriverAggregateArgs>): Prisma.PrismaPromise<GetDriverAggregateType<T>>

    /**
     * Group by Driver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverGroupByArgs} args - Group by arguments.
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
      T extends DriverGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DriverGroupByArgs['orderBy'] }
        : { orderBy?: DriverGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DriverGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDriverGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Driver model
   */
  readonly fields: DriverFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Driver.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DriverClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workExperiences<T extends Driver$workExperiencesArgs<ExtArgs> = {}>(args?: Subset<T, Driver$workExperiencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverWorkExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    references<T extends Driver$referencesArgs<ExtArgs> = {}>(args?: Subset<T, Driver$referencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverReferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documents<T extends Driver$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Driver$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    violations<T extends Driver$violationsArgs<ExtArgs> = {}>(args?: Subset<T, Driver$violationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverViolationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignments<T extends Driver$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Driver$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdBy<T extends Driver$createdByArgs<ExtArgs> = {}>(args?: Subset<T, Driver$createdByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    updatedBy<T extends Driver$updatedByArgs<ExtArgs> = {}>(args?: Subset<T, Driver$updatedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Driver model
   */
  interface DriverFieldRefs {
    readonly id: FieldRef<"Driver", 'String'>
    readonly driverImage: FieldRef<"Driver", 'String'>
    readonly driverName: FieldRef<"Driver", 'String'>
    readonly fatherName: FieldRef<"Driver", 'String'>
    readonly dateOfBirth: FieldRef<"Driver", 'DateTime'>
    readonly age: FieldRef<"Driver", 'Int'>
    readonly gender: FieldRef<"Driver", 'Gender'>
    readonly placeOfBirth: FieldRef<"Driver", 'String'>
    readonly address: FieldRef<"Driver", 'String'>
    readonly maritalStatus: FieldRef<"Driver", 'MaritalStatus'>
    readonly bloodGroup: FieldRef<"Driver", 'BloodGroup'>
    readonly contactNo: FieldRef<"Driver", 'String'>
    readonly emergencyContact: FieldRef<"Driver", 'String'>
    readonly emergencyContactName: FieldRef<"Driver", 'String'>
    readonly driverId: FieldRef<"Driver", 'Int'>
    readonly pkCode: FieldRef<"Driver", 'String'>
    readonly vehicleNo: FieldRef<"Driver", 'String'>
    readonly inductionDate: FieldRef<"Driver", 'DateTime'>
    readonly jobStatus: FieldRef<"Driver", 'JobStatus'>
    readonly education: FieldRef<"Driver", 'EducationLevel'>
    readonly previousJob: FieldRef<"Driver", 'PreviousJob'>
    readonly typeOfVehicle: FieldRef<"Driver", 'VehicleType'>
    readonly experienceYear: FieldRef<"Driver", 'Int'>
    readonly experienceMonth: FieldRef<"Driver", 'Int'>
    readonly currentJob: FieldRef<"Driver", 'String'>
    readonly salary: FieldRef<"Driver", 'Float'>
    readonly cnicNo: FieldRef<"Driver", 'String'>
    readonly cnicFront: FieldRef<"Driver", 'String'>
    readonly cnicBack: FieldRef<"Driver", 'String'>
    readonly cnicIssueDate: FieldRef<"Driver", 'DateTime'>
    readonly cnicExpiryDate: FieldRef<"Driver", 'DateTime'>
    readonly cnicVerified: FieldRef<"Driver", 'YesNo'>
    readonly licenseNo: FieldRef<"Driver", 'String'>
    readonly licenseIssueDate: FieldRef<"Driver", 'DateTime'>
    readonly licenseExpiryDate: FieldRef<"Driver", 'DateTime'>
    readonly licenseStatus: FieldRef<"Driver", 'String'>
    readonly typeOfLicense: FieldRef<"Driver", 'LicenseType'>
    readonly drivingSince: FieldRef<"Driver", 'Int'>
    readonly licenseOnlineVerification: FieldRef<"Driver", 'YesNo'>
    readonly covid19Vaccination: FieldRef<"Driver", 'CovidVaccinationStatus'>
    readonly firstDoseExpiry: FieldRef<"Driver", 'DateTime'>
    readonly secondDoseExpiry: FieldRef<"Driver", 'DateTime'>
    readonly boosterDose: FieldRef<"Driver", 'DateTime'>
    readonly boosterStatus: FieldRef<"Driver", 'BoosterStatus'>
    readonly medicalCheck: FieldRef<"Driver", 'YesNo'>
    readonly medicalIssueDate: FieldRef<"Driver", 'DateTime'>
    readonly medicalExpiryDate: FieldRef<"Driver", 'DateTime'>
    readonly medicalStatus: FieldRef<"Driver", 'MedicalStatus'>
    readonly medicalCertificate: FieldRef<"Driver", 'String'>
    readonly ddcNHMP: FieldRef<"Driver", 'YesNo'>
    readonly ddcNHMPIssueDate: FieldRef<"Driver", 'DateTime'>
    readonly ddcNHMPExpiryDate: FieldRef<"Driver", 'DateTime'>
    readonly ddcNHMPStatus: FieldRef<"Driver", 'DDCStatus'>
    readonly ddcNHMPResult: FieldRef<"Driver", 'DDCResult'>
    readonly ddcCertificate: FieldRef<"Driver", 'String'>
    readonly randomDrugAlcoholDate: FieldRef<"Driver", 'DateTime'>
    readonly randomDrugAlcoholCount: FieldRef<"Driver", 'Int'>
    readonly randomDrugAlcoholStatus: FieldRef<"Driver", 'DrugAlcoholStatus'>
    readonly drugTestCertificate: FieldRef<"Driver", 'String'>
    readonly policeVF: FieldRef<"Driver", 'YesNo'>
    readonly policeVFCertificate: FieldRef<"Driver", 'String'>
    readonly tpplPolicy: FieldRef<"Driver", 'YesNo'>
    readonly securityClearance: FieldRef<"Driver", 'YesNo'>
    readonly languages: FieldRef<"Driver", 'Json'>
    readonly notes: FieldRef<"Driver", 'String'>
    readonly isActive: FieldRef<"Driver", 'Boolean'>
    readonly lastLogin: FieldRef<"Driver", 'DateTime'>
    readonly passwordHash: FieldRef<"Driver", 'String'>
    readonly email: FieldRef<"Driver", 'String'>
    readonly createdAt: FieldRef<"Driver", 'DateTime'>
    readonly updatedAt: FieldRef<"Driver", 'DateTime'>
    readonly createdById: FieldRef<"Driver", 'String'>
    readonly updatedById: FieldRef<"Driver", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Driver findUnique
   */
  export type DriverFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver findUniqueOrThrow
   */
  export type DriverFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver findFirst
   */
  export type DriverFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drivers.
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drivers.
     */
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Driver findFirstOrThrow
   */
  export type DriverFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drivers.
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drivers.
     */
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Driver findMany
   */
  export type DriverFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Drivers to fetch.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Drivers.
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Driver create
   */
  export type DriverCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * The data needed to create a Driver.
     */
    data: XOR<DriverCreateInput, DriverUncheckedCreateInput>
  }

  /**
   * Driver createMany
   */
  export type DriverCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Drivers.
     */
    data: DriverCreateManyInput | DriverCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Driver createManyAndReturn
   */
  export type DriverCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * The data used to create many Drivers.
     */
    data: DriverCreateManyInput | DriverCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Driver update
   */
  export type DriverUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * The data needed to update a Driver.
     */
    data: XOR<DriverUpdateInput, DriverUncheckedUpdateInput>
    /**
     * Choose, which Driver to update.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver updateMany
   */
  export type DriverUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Drivers.
     */
    data: XOR<DriverUpdateManyMutationInput, DriverUncheckedUpdateManyInput>
    /**
     * Filter which Drivers to update
     */
    where?: DriverWhereInput
    /**
     * Limit how many Drivers to update.
     */
    limit?: number
  }

  /**
   * Driver updateManyAndReturn
   */
  export type DriverUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * The data used to update Drivers.
     */
    data: XOR<DriverUpdateManyMutationInput, DriverUncheckedUpdateManyInput>
    /**
     * Filter which Drivers to update
     */
    where?: DriverWhereInput
    /**
     * Limit how many Drivers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Driver upsert
   */
  export type DriverUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * The filter to search for the Driver to update in case it exists.
     */
    where: DriverWhereUniqueInput
    /**
     * In case the Driver found by the `where` argument doesn't exist, create a new Driver with this data.
     */
    create: XOR<DriverCreateInput, DriverUncheckedCreateInput>
    /**
     * In case the Driver was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DriverUpdateInput, DriverUncheckedUpdateInput>
  }

  /**
   * Driver delete
   */
  export type DriverDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter which Driver to delete.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver deleteMany
   */
  export type DriverDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Drivers to delete
     */
    where?: DriverWhereInput
    /**
     * Limit how many Drivers to delete.
     */
    limit?: number
  }

  /**
   * Driver.workExperiences
   */
  export type Driver$workExperiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverWorkExperience
     */
    select?: DriverWorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverWorkExperience
     */
    omit?: DriverWorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverWorkExperienceInclude<ExtArgs> | null
    where?: DriverWorkExperienceWhereInput
    orderBy?: DriverWorkExperienceOrderByWithRelationInput | DriverWorkExperienceOrderByWithRelationInput[]
    cursor?: DriverWorkExperienceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DriverWorkExperienceScalarFieldEnum | DriverWorkExperienceScalarFieldEnum[]
  }

  /**
   * Driver.references
   */
  export type Driver$referencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverReference
     */
    select?: DriverReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverReference
     */
    omit?: DriverReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverReferenceInclude<ExtArgs> | null
    where?: DriverReferenceWhereInput
    orderBy?: DriverReferenceOrderByWithRelationInput | DriverReferenceOrderByWithRelationInput[]
    cursor?: DriverReferenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DriverReferenceScalarFieldEnum | DriverReferenceScalarFieldEnum[]
  }

  /**
   * Driver.documents
   */
  export type Driver$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverDocument
     */
    select?: DriverDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverDocument
     */
    omit?: DriverDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverDocumentInclude<ExtArgs> | null
    where?: DriverDocumentWhereInput
    orderBy?: DriverDocumentOrderByWithRelationInput | DriverDocumentOrderByWithRelationInput[]
    cursor?: DriverDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DriverDocumentScalarFieldEnum | DriverDocumentScalarFieldEnum[]
  }

  /**
   * Driver.violations
   */
  export type Driver$violationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverViolation
     */
    select?: DriverViolationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverViolation
     */
    omit?: DriverViolationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverViolationInclude<ExtArgs> | null
    where?: DriverViolationWhereInput
    orderBy?: DriverViolationOrderByWithRelationInput | DriverViolationOrderByWithRelationInput[]
    cursor?: DriverViolationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DriverViolationScalarFieldEnum | DriverViolationScalarFieldEnum[]
  }

  /**
   * Driver.assignments
   */
  export type Driver$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverAssignment
     */
    select?: DriverAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverAssignment
     */
    omit?: DriverAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverAssignmentInclude<ExtArgs> | null
    where?: DriverAssignmentWhereInput
    orderBy?: DriverAssignmentOrderByWithRelationInput | DriverAssignmentOrderByWithRelationInput[]
    cursor?: DriverAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DriverAssignmentScalarFieldEnum | DriverAssignmentScalarFieldEnum[]
  }

  /**
   * Driver.createdBy
   */
  export type Driver$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Driver.updatedBy
   */
  export type Driver$updatedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Driver without action
   */
  export type DriverDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
  }


  /**
   * Model DriverWorkExperience
   */

  export type AggregateDriverWorkExperience = {
    _count: DriverWorkExperienceCountAggregateOutputType | null
    _avg: DriverWorkExperienceAvgAggregateOutputType | null
    _sum: DriverWorkExperienceSumAggregateOutputType | null
    _min: DriverWorkExperienceMinAggregateOutputType | null
    _max: DriverWorkExperienceMaxAggregateOutputType | null
  }

  export type DriverWorkExperienceAvgAggregateOutputType = {
    salary: number | null
  }

  export type DriverWorkExperienceSumAggregateOutputType = {
    salary: number | null
  }

  export type DriverWorkExperienceMinAggregateOutputType = {
    id: string | null
    driverId: string | null
    companyName: string | null
    dateFrom: Date | null
    dateTo: Date | null
    jobTill: string | null
    responsibility: string | null
    salary: number | null
    reasonForLeaving: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DriverWorkExperienceMaxAggregateOutputType = {
    id: string | null
    driverId: string | null
    companyName: string | null
    dateFrom: Date | null
    dateTo: Date | null
    jobTill: string | null
    responsibility: string | null
    salary: number | null
    reasonForLeaving: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DriverWorkExperienceCountAggregateOutputType = {
    id: number
    driverId: number
    companyName: number
    dateFrom: number
    dateTo: number
    jobTill: number
    responsibility: number
    salary: number
    reasonForLeaving: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DriverWorkExperienceAvgAggregateInputType = {
    salary?: true
  }

  export type DriverWorkExperienceSumAggregateInputType = {
    salary?: true
  }

  export type DriverWorkExperienceMinAggregateInputType = {
    id?: true
    driverId?: true
    companyName?: true
    dateFrom?: true
    dateTo?: true
    jobTill?: true
    responsibility?: true
    salary?: true
    reasonForLeaving?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DriverWorkExperienceMaxAggregateInputType = {
    id?: true
    driverId?: true
    companyName?: true
    dateFrom?: true
    dateTo?: true
    jobTill?: true
    responsibility?: true
    salary?: true
    reasonForLeaving?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DriverWorkExperienceCountAggregateInputType = {
    id?: true
    driverId?: true
    companyName?: true
    dateFrom?: true
    dateTo?: true
    jobTill?: true
    responsibility?: true
    salary?: true
    reasonForLeaving?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DriverWorkExperienceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DriverWorkExperience to aggregate.
     */
    where?: DriverWorkExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DriverWorkExperiences to fetch.
     */
    orderBy?: DriverWorkExperienceOrderByWithRelationInput | DriverWorkExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DriverWorkExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DriverWorkExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DriverWorkExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DriverWorkExperiences
    **/
    _count?: true | DriverWorkExperienceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DriverWorkExperienceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DriverWorkExperienceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DriverWorkExperienceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DriverWorkExperienceMaxAggregateInputType
  }

  export type GetDriverWorkExperienceAggregateType<T extends DriverWorkExperienceAggregateArgs> = {
        [P in keyof T & keyof AggregateDriverWorkExperience]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDriverWorkExperience[P]>
      : GetScalarType<T[P], AggregateDriverWorkExperience[P]>
  }




  export type DriverWorkExperienceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DriverWorkExperienceWhereInput
    orderBy?: DriverWorkExperienceOrderByWithAggregationInput | DriverWorkExperienceOrderByWithAggregationInput[]
    by: DriverWorkExperienceScalarFieldEnum[] | DriverWorkExperienceScalarFieldEnum
    having?: DriverWorkExperienceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DriverWorkExperienceCountAggregateInputType | true
    _avg?: DriverWorkExperienceAvgAggregateInputType
    _sum?: DriverWorkExperienceSumAggregateInputType
    _min?: DriverWorkExperienceMinAggregateInputType
    _max?: DriverWorkExperienceMaxAggregateInputType
  }

  export type DriverWorkExperienceGroupByOutputType = {
    id: string
    driverId: string
    companyName: string
    dateFrom: Date
    dateTo: Date | null
    jobTill: string
    responsibility: string
    salary: number | null
    reasonForLeaving: string | null
    createdAt: Date
    updatedAt: Date
    _count: DriverWorkExperienceCountAggregateOutputType | null
    _avg: DriverWorkExperienceAvgAggregateOutputType | null
    _sum: DriverWorkExperienceSumAggregateOutputType | null
    _min: DriverWorkExperienceMinAggregateOutputType | null
    _max: DriverWorkExperienceMaxAggregateOutputType | null
  }

  type GetDriverWorkExperienceGroupByPayload<T extends DriverWorkExperienceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DriverWorkExperienceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DriverWorkExperienceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DriverWorkExperienceGroupByOutputType[P]>
            : GetScalarType<T[P], DriverWorkExperienceGroupByOutputType[P]>
        }
      >
    >


  export type DriverWorkExperienceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    driverId?: boolean
    companyName?: boolean
    dateFrom?: boolean
    dateTo?: boolean
    jobTill?: boolean
    responsibility?: boolean
    salary?: boolean
    reasonForLeaving?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["driverWorkExperience"]>

  export type DriverWorkExperienceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    driverId?: boolean
    companyName?: boolean
    dateFrom?: boolean
    dateTo?: boolean
    jobTill?: boolean
    responsibility?: boolean
    salary?: boolean
    reasonForLeaving?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["driverWorkExperience"]>

  export type DriverWorkExperienceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    driverId?: boolean
    companyName?: boolean
    dateFrom?: boolean
    dateTo?: boolean
    jobTill?: boolean
    responsibility?: boolean
    salary?: boolean
    reasonForLeaving?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["driverWorkExperience"]>

  export type DriverWorkExperienceSelectScalar = {
    id?: boolean
    driverId?: boolean
    companyName?: boolean
    dateFrom?: boolean
    dateTo?: boolean
    jobTill?: boolean
    responsibility?: boolean
    salary?: boolean
    reasonForLeaving?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DriverWorkExperienceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "driverId" | "companyName" | "dateFrom" | "dateTo" | "jobTill" | "responsibility" | "salary" | "reasonForLeaving" | "createdAt" | "updatedAt", ExtArgs["result"]["driverWorkExperience"]>
  export type DriverWorkExperienceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }
  export type DriverWorkExperienceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }
  export type DriverWorkExperienceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }

  export type $DriverWorkExperiencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DriverWorkExperience"
    objects: {
      driver: Prisma.$DriverPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      driverId: string
      companyName: string
      dateFrom: Date
      dateTo: Date | null
      jobTill: string
      responsibility: string
      salary: number | null
      reasonForLeaving: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["driverWorkExperience"]>
    composites: {}
  }

  type DriverWorkExperienceGetPayload<S extends boolean | null | undefined | DriverWorkExperienceDefaultArgs> = $Result.GetResult<Prisma.$DriverWorkExperiencePayload, S>

  type DriverWorkExperienceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DriverWorkExperienceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DriverWorkExperienceCountAggregateInputType | true
    }

  export interface DriverWorkExperienceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DriverWorkExperience'], meta: { name: 'DriverWorkExperience' } }
    /**
     * Find zero or one DriverWorkExperience that matches the filter.
     * @param {DriverWorkExperienceFindUniqueArgs} args - Arguments to find a DriverWorkExperience
     * @example
     * // Get one DriverWorkExperience
     * const driverWorkExperience = await prisma.driverWorkExperience.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DriverWorkExperienceFindUniqueArgs>(args: SelectSubset<T, DriverWorkExperienceFindUniqueArgs<ExtArgs>>): Prisma__DriverWorkExperienceClient<$Result.GetResult<Prisma.$DriverWorkExperiencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DriverWorkExperience that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DriverWorkExperienceFindUniqueOrThrowArgs} args - Arguments to find a DriverWorkExperience
     * @example
     * // Get one DriverWorkExperience
     * const driverWorkExperience = await prisma.driverWorkExperience.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DriverWorkExperienceFindUniqueOrThrowArgs>(args: SelectSubset<T, DriverWorkExperienceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DriverWorkExperienceClient<$Result.GetResult<Prisma.$DriverWorkExperiencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DriverWorkExperience that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverWorkExperienceFindFirstArgs} args - Arguments to find a DriverWorkExperience
     * @example
     * // Get one DriverWorkExperience
     * const driverWorkExperience = await prisma.driverWorkExperience.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DriverWorkExperienceFindFirstArgs>(args?: SelectSubset<T, DriverWorkExperienceFindFirstArgs<ExtArgs>>): Prisma__DriverWorkExperienceClient<$Result.GetResult<Prisma.$DriverWorkExperiencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DriverWorkExperience that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverWorkExperienceFindFirstOrThrowArgs} args - Arguments to find a DriverWorkExperience
     * @example
     * // Get one DriverWorkExperience
     * const driverWorkExperience = await prisma.driverWorkExperience.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DriverWorkExperienceFindFirstOrThrowArgs>(args?: SelectSubset<T, DriverWorkExperienceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DriverWorkExperienceClient<$Result.GetResult<Prisma.$DriverWorkExperiencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DriverWorkExperiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverWorkExperienceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DriverWorkExperiences
     * const driverWorkExperiences = await prisma.driverWorkExperience.findMany()
     * 
     * // Get first 10 DriverWorkExperiences
     * const driverWorkExperiences = await prisma.driverWorkExperience.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const driverWorkExperienceWithIdOnly = await prisma.driverWorkExperience.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DriverWorkExperienceFindManyArgs>(args?: SelectSubset<T, DriverWorkExperienceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverWorkExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DriverWorkExperience.
     * @param {DriverWorkExperienceCreateArgs} args - Arguments to create a DriverWorkExperience.
     * @example
     * // Create one DriverWorkExperience
     * const DriverWorkExperience = await prisma.driverWorkExperience.create({
     *   data: {
     *     // ... data to create a DriverWorkExperience
     *   }
     * })
     * 
     */
    create<T extends DriverWorkExperienceCreateArgs>(args: SelectSubset<T, DriverWorkExperienceCreateArgs<ExtArgs>>): Prisma__DriverWorkExperienceClient<$Result.GetResult<Prisma.$DriverWorkExperiencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DriverWorkExperiences.
     * @param {DriverWorkExperienceCreateManyArgs} args - Arguments to create many DriverWorkExperiences.
     * @example
     * // Create many DriverWorkExperiences
     * const driverWorkExperience = await prisma.driverWorkExperience.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DriverWorkExperienceCreateManyArgs>(args?: SelectSubset<T, DriverWorkExperienceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DriverWorkExperiences and returns the data saved in the database.
     * @param {DriverWorkExperienceCreateManyAndReturnArgs} args - Arguments to create many DriverWorkExperiences.
     * @example
     * // Create many DriverWorkExperiences
     * const driverWorkExperience = await prisma.driverWorkExperience.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DriverWorkExperiences and only return the `id`
     * const driverWorkExperienceWithIdOnly = await prisma.driverWorkExperience.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DriverWorkExperienceCreateManyAndReturnArgs>(args?: SelectSubset<T, DriverWorkExperienceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverWorkExperiencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DriverWorkExperience.
     * @param {DriverWorkExperienceDeleteArgs} args - Arguments to delete one DriverWorkExperience.
     * @example
     * // Delete one DriverWorkExperience
     * const DriverWorkExperience = await prisma.driverWorkExperience.delete({
     *   where: {
     *     // ... filter to delete one DriverWorkExperience
     *   }
     * })
     * 
     */
    delete<T extends DriverWorkExperienceDeleteArgs>(args: SelectSubset<T, DriverWorkExperienceDeleteArgs<ExtArgs>>): Prisma__DriverWorkExperienceClient<$Result.GetResult<Prisma.$DriverWorkExperiencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DriverWorkExperience.
     * @param {DriverWorkExperienceUpdateArgs} args - Arguments to update one DriverWorkExperience.
     * @example
     * // Update one DriverWorkExperience
     * const driverWorkExperience = await prisma.driverWorkExperience.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DriverWorkExperienceUpdateArgs>(args: SelectSubset<T, DriverWorkExperienceUpdateArgs<ExtArgs>>): Prisma__DriverWorkExperienceClient<$Result.GetResult<Prisma.$DriverWorkExperiencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DriverWorkExperiences.
     * @param {DriverWorkExperienceDeleteManyArgs} args - Arguments to filter DriverWorkExperiences to delete.
     * @example
     * // Delete a few DriverWorkExperiences
     * const { count } = await prisma.driverWorkExperience.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DriverWorkExperienceDeleteManyArgs>(args?: SelectSubset<T, DriverWorkExperienceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DriverWorkExperiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverWorkExperienceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DriverWorkExperiences
     * const driverWorkExperience = await prisma.driverWorkExperience.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DriverWorkExperienceUpdateManyArgs>(args: SelectSubset<T, DriverWorkExperienceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DriverWorkExperiences and returns the data updated in the database.
     * @param {DriverWorkExperienceUpdateManyAndReturnArgs} args - Arguments to update many DriverWorkExperiences.
     * @example
     * // Update many DriverWorkExperiences
     * const driverWorkExperience = await prisma.driverWorkExperience.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DriverWorkExperiences and only return the `id`
     * const driverWorkExperienceWithIdOnly = await prisma.driverWorkExperience.updateManyAndReturn({
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
    updateManyAndReturn<T extends DriverWorkExperienceUpdateManyAndReturnArgs>(args: SelectSubset<T, DriverWorkExperienceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverWorkExperiencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DriverWorkExperience.
     * @param {DriverWorkExperienceUpsertArgs} args - Arguments to update or create a DriverWorkExperience.
     * @example
     * // Update or create a DriverWorkExperience
     * const driverWorkExperience = await prisma.driverWorkExperience.upsert({
     *   create: {
     *     // ... data to create a DriverWorkExperience
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DriverWorkExperience we want to update
     *   }
     * })
     */
    upsert<T extends DriverWorkExperienceUpsertArgs>(args: SelectSubset<T, DriverWorkExperienceUpsertArgs<ExtArgs>>): Prisma__DriverWorkExperienceClient<$Result.GetResult<Prisma.$DriverWorkExperiencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DriverWorkExperiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverWorkExperienceCountArgs} args - Arguments to filter DriverWorkExperiences to count.
     * @example
     * // Count the number of DriverWorkExperiences
     * const count = await prisma.driverWorkExperience.count({
     *   where: {
     *     // ... the filter for the DriverWorkExperiences we want to count
     *   }
     * })
    **/
    count<T extends DriverWorkExperienceCountArgs>(
      args?: Subset<T, DriverWorkExperienceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DriverWorkExperienceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DriverWorkExperience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverWorkExperienceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DriverWorkExperienceAggregateArgs>(args: Subset<T, DriverWorkExperienceAggregateArgs>): Prisma.PrismaPromise<GetDriverWorkExperienceAggregateType<T>>

    /**
     * Group by DriverWorkExperience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverWorkExperienceGroupByArgs} args - Group by arguments.
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
      T extends DriverWorkExperienceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DriverWorkExperienceGroupByArgs['orderBy'] }
        : { orderBy?: DriverWorkExperienceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DriverWorkExperienceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDriverWorkExperienceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DriverWorkExperience model
   */
  readonly fields: DriverWorkExperienceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DriverWorkExperience.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DriverWorkExperienceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    driver<T extends DriverDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DriverDefaultArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DriverWorkExperience model
   */
  interface DriverWorkExperienceFieldRefs {
    readonly id: FieldRef<"DriverWorkExperience", 'String'>
    readonly driverId: FieldRef<"DriverWorkExperience", 'String'>
    readonly companyName: FieldRef<"DriverWorkExperience", 'String'>
    readonly dateFrom: FieldRef<"DriverWorkExperience", 'DateTime'>
    readonly dateTo: FieldRef<"DriverWorkExperience", 'DateTime'>
    readonly jobTill: FieldRef<"DriverWorkExperience", 'String'>
    readonly responsibility: FieldRef<"DriverWorkExperience", 'String'>
    readonly salary: FieldRef<"DriverWorkExperience", 'Float'>
    readonly reasonForLeaving: FieldRef<"DriverWorkExperience", 'String'>
    readonly createdAt: FieldRef<"DriverWorkExperience", 'DateTime'>
    readonly updatedAt: FieldRef<"DriverWorkExperience", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DriverWorkExperience findUnique
   */
  export type DriverWorkExperienceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverWorkExperience
     */
    select?: DriverWorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverWorkExperience
     */
    omit?: DriverWorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverWorkExperienceInclude<ExtArgs> | null
    /**
     * Filter, which DriverWorkExperience to fetch.
     */
    where: DriverWorkExperienceWhereUniqueInput
  }

  /**
   * DriverWorkExperience findUniqueOrThrow
   */
  export type DriverWorkExperienceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverWorkExperience
     */
    select?: DriverWorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverWorkExperience
     */
    omit?: DriverWorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverWorkExperienceInclude<ExtArgs> | null
    /**
     * Filter, which DriverWorkExperience to fetch.
     */
    where: DriverWorkExperienceWhereUniqueInput
  }

  /**
   * DriverWorkExperience findFirst
   */
  export type DriverWorkExperienceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverWorkExperience
     */
    select?: DriverWorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverWorkExperience
     */
    omit?: DriverWorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverWorkExperienceInclude<ExtArgs> | null
    /**
     * Filter, which DriverWorkExperience to fetch.
     */
    where?: DriverWorkExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DriverWorkExperiences to fetch.
     */
    orderBy?: DriverWorkExperienceOrderByWithRelationInput | DriverWorkExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DriverWorkExperiences.
     */
    cursor?: DriverWorkExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DriverWorkExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DriverWorkExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DriverWorkExperiences.
     */
    distinct?: DriverWorkExperienceScalarFieldEnum | DriverWorkExperienceScalarFieldEnum[]
  }

  /**
   * DriverWorkExperience findFirstOrThrow
   */
  export type DriverWorkExperienceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverWorkExperience
     */
    select?: DriverWorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverWorkExperience
     */
    omit?: DriverWorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverWorkExperienceInclude<ExtArgs> | null
    /**
     * Filter, which DriverWorkExperience to fetch.
     */
    where?: DriverWorkExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DriverWorkExperiences to fetch.
     */
    orderBy?: DriverWorkExperienceOrderByWithRelationInput | DriverWorkExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DriverWorkExperiences.
     */
    cursor?: DriverWorkExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DriverWorkExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DriverWorkExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DriverWorkExperiences.
     */
    distinct?: DriverWorkExperienceScalarFieldEnum | DriverWorkExperienceScalarFieldEnum[]
  }

  /**
   * DriverWorkExperience findMany
   */
  export type DriverWorkExperienceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverWorkExperience
     */
    select?: DriverWorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverWorkExperience
     */
    omit?: DriverWorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverWorkExperienceInclude<ExtArgs> | null
    /**
     * Filter, which DriverWorkExperiences to fetch.
     */
    where?: DriverWorkExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DriverWorkExperiences to fetch.
     */
    orderBy?: DriverWorkExperienceOrderByWithRelationInput | DriverWorkExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DriverWorkExperiences.
     */
    cursor?: DriverWorkExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DriverWorkExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DriverWorkExperiences.
     */
    skip?: number
    distinct?: DriverWorkExperienceScalarFieldEnum | DriverWorkExperienceScalarFieldEnum[]
  }

  /**
   * DriverWorkExperience create
   */
  export type DriverWorkExperienceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverWorkExperience
     */
    select?: DriverWorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverWorkExperience
     */
    omit?: DriverWorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverWorkExperienceInclude<ExtArgs> | null
    /**
     * The data needed to create a DriverWorkExperience.
     */
    data: XOR<DriverWorkExperienceCreateInput, DriverWorkExperienceUncheckedCreateInput>
  }

  /**
   * DriverWorkExperience createMany
   */
  export type DriverWorkExperienceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DriverWorkExperiences.
     */
    data: DriverWorkExperienceCreateManyInput | DriverWorkExperienceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DriverWorkExperience createManyAndReturn
   */
  export type DriverWorkExperienceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverWorkExperience
     */
    select?: DriverWorkExperienceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DriverWorkExperience
     */
    omit?: DriverWorkExperienceOmit<ExtArgs> | null
    /**
     * The data used to create many DriverWorkExperiences.
     */
    data: DriverWorkExperienceCreateManyInput | DriverWorkExperienceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverWorkExperienceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DriverWorkExperience update
   */
  export type DriverWorkExperienceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverWorkExperience
     */
    select?: DriverWorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverWorkExperience
     */
    omit?: DriverWorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverWorkExperienceInclude<ExtArgs> | null
    /**
     * The data needed to update a DriverWorkExperience.
     */
    data: XOR<DriverWorkExperienceUpdateInput, DriverWorkExperienceUncheckedUpdateInput>
    /**
     * Choose, which DriverWorkExperience to update.
     */
    where: DriverWorkExperienceWhereUniqueInput
  }

  /**
   * DriverWorkExperience updateMany
   */
  export type DriverWorkExperienceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DriverWorkExperiences.
     */
    data: XOR<DriverWorkExperienceUpdateManyMutationInput, DriverWorkExperienceUncheckedUpdateManyInput>
    /**
     * Filter which DriverWorkExperiences to update
     */
    where?: DriverWorkExperienceWhereInput
    /**
     * Limit how many DriverWorkExperiences to update.
     */
    limit?: number
  }

  /**
   * DriverWorkExperience updateManyAndReturn
   */
  export type DriverWorkExperienceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverWorkExperience
     */
    select?: DriverWorkExperienceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DriverWorkExperience
     */
    omit?: DriverWorkExperienceOmit<ExtArgs> | null
    /**
     * The data used to update DriverWorkExperiences.
     */
    data: XOR<DriverWorkExperienceUpdateManyMutationInput, DriverWorkExperienceUncheckedUpdateManyInput>
    /**
     * Filter which DriverWorkExperiences to update
     */
    where?: DriverWorkExperienceWhereInput
    /**
     * Limit how many DriverWorkExperiences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverWorkExperienceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DriverWorkExperience upsert
   */
  export type DriverWorkExperienceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverWorkExperience
     */
    select?: DriverWorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverWorkExperience
     */
    omit?: DriverWorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverWorkExperienceInclude<ExtArgs> | null
    /**
     * The filter to search for the DriverWorkExperience to update in case it exists.
     */
    where: DriverWorkExperienceWhereUniqueInput
    /**
     * In case the DriverWorkExperience found by the `where` argument doesn't exist, create a new DriverWorkExperience with this data.
     */
    create: XOR<DriverWorkExperienceCreateInput, DriverWorkExperienceUncheckedCreateInput>
    /**
     * In case the DriverWorkExperience was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DriverWorkExperienceUpdateInput, DriverWorkExperienceUncheckedUpdateInput>
  }

  /**
   * DriverWorkExperience delete
   */
  export type DriverWorkExperienceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverWorkExperience
     */
    select?: DriverWorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverWorkExperience
     */
    omit?: DriverWorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverWorkExperienceInclude<ExtArgs> | null
    /**
     * Filter which DriverWorkExperience to delete.
     */
    where: DriverWorkExperienceWhereUniqueInput
  }

  /**
   * DriverWorkExperience deleteMany
   */
  export type DriverWorkExperienceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DriverWorkExperiences to delete
     */
    where?: DriverWorkExperienceWhereInput
    /**
     * Limit how many DriverWorkExperiences to delete.
     */
    limit?: number
  }

  /**
   * DriverWorkExperience without action
   */
  export type DriverWorkExperienceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverWorkExperience
     */
    select?: DriverWorkExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverWorkExperience
     */
    omit?: DriverWorkExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverWorkExperienceInclude<ExtArgs> | null
  }


  /**
   * Model DriverReference
   */

  export type AggregateDriverReference = {
    _count: DriverReferenceCountAggregateOutputType | null
    _min: DriverReferenceMinAggregateOutputType | null
    _max: DriverReferenceMaxAggregateOutputType | null
  }

  export type DriverReferenceMinAggregateOutputType = {
    id: string | null
    driverId: string | null
    referenceName: string | null
    referenceAddress: string | null
    referencePhone: string | null
    referenceRelation: string | null
    referenceEmail: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DriverReferenceMaxAggregateOutputType = {
    id: string | null
    driverId: string | null
    referenceName: string | null
    referenceAddress: string | null
    referencePhone: string | null
    referenceRelation: string | null
    referenceEmail: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DriverReferenceCountAggregateOutputType = {
    id: number
    driverId: number
    referenceName: number
    referenceAddress: number
    referencePhone: number
    referenceRelation: number
    referenceEmail: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DriverReferenceMinAggregateInputType = {
    id?: true
    driverId?: true
    referenceName?: true
    referenceAddress?: true
    referencePhone?: true
    referenceRelation?: true
    referenceEmail?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DriverReferenceMaxAggregateInputType = {
    id?: true
    driverId?: true
    referenceName?: true
    referenceAddress?: true
    referencePhone?: true
    referenceRelation?: true
    referenceEmail?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DriverReferenceCountAggregateInputType = {
    id?: true
    driverId?: true
    referenceName?: true
    referenceAddress?: true
    referencePhone?: true
    referenceRelation?: true
    referenceEmail?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DriverReferenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DriverReference to aggregate.
     */
    where?: DriverReferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DriverReferences to fetch.
     */
    orderBy?: DriverReferenceOrderByWithRelationInput | DriverReferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DriverReferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DriverReferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DriverReferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DriverReferences
    **/
    _count?: true | DriverReferenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DriverReferenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DriverReferenceMaxAggregateInputType
  }

  export type GetDriverReferenceAggregateType<T extends DriverReferenceAggregateArgs> = {
        [P in keyof T & keyof AggregateDriverReference]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDriverReference[P]>
      : GetScalarType<T[P], AggregateDriverReference[P]>
  }




  export type DriverReferenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DriverReferenceWhereInput
    orderBy?: DriverReferenceOrderByWithAggregationInput | DriverReferenceOrderByWithAggregationInput[]
    by: DriverReferenceScalarFieldEnum[] | DriverReferenceScalarFieldEnum
    having?: DriverReferenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DriverReferenceCountAggregateInputType | true
    _min?: DriverReferenceMinAggregateInputType
    _max?: DriverReferenceMaxAggregateInputType
  }

  export type DriverReferenceGroupByOutputType = {
    id: string
    driverId: string
    referenceName: string
    referenceAddress: string
    referencePhone: string
    referenceRelation: string
    referenceEmail: string | null
    createdAt: Date
    updatedAt: Date
    _count: DriverReferenceCountAggregateOutputType | null
    _min: DriverReferenceMinAggregateOutputType | null
    _max: DriverReferenceMaxAggregateOutputType | null
  }

  type GetDriverReferenceGroupByPayload<T extends DriverReferenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DriverReferenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DriverReferenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DriverReferenceGroupByOutputType[P]>
            : GetScalarType<T[P], DriverReferenceGroupByOutputType[P]>
        }
      >
    >


  export type DriverReferenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    driverId?: boolean
    referenceName?: boolean
    referenceAddress?: boolean
    referencePhone?: boolean
    referenceRelation?: boolean
    referenceEmail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["driverReference"]>

  export type DriverReferenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    driverId?: boolean
    referenceName?: boolean
    referenceAddress?: boolean
    referencePhone?: boolean
    referenceRelation?: boolean
    referenceEmail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["driverReference"]>

  export type DriverReferenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    driverId?: boolean
    referenceName?: boolean
    referenceAddress?: boolean
    referencePhone?: boolean
    referenceRelation?: boolean
    referenceEmail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["driverReference"]>

  export type DriverReferenceSelectScalar = {
    id?: boolean
    driverId?: boolean
    referenceName?: boolean
    referenceAddress?: boolean
    referencePhone?: boolean
    referenceRelation?: boolean
    referenceEmail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DriverReferenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "driverId" | "referenceName" | "referenceAddress" | "referencePhone" | "referenceRelation" | "referenceEmail" | "createdAt" | "updatedAt", ExtArgs["result"]["driverReference"]>
  export type DriverReferenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }
  export type DriverReferenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }
  export type DriverReferenceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }

  export type $DriverReferencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DriverReference"
    objects: {
      driver: Prisma.$DriverPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      driverId: string
      referenceName: string
      referenceAddress: string
      referencePhone: string
      referenceRelation: string
      referenceEmail: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["driverReference"]>
    composites: {}
  }

  type DriverReferenceGetPayload<S extends boolean | null | undefined | DriverReferenceDefaultArgs> = $Result.GetResult<Prisma.$DriverReferencePayload, S>

  type DriverReferenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DriverReferenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DriverReferenceCountAggregateInputType | true
    }

  export interface DriverReferenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DriverReference'], meta: { name: 'DriverReference' } }
    /**
     * Find zero or one DriverReference that matches the filter.
     * @param {DriverReferenceFindUniqueArgs} args - Arguments to find a DriverReference
     * @example
     * // Get one DriverReference
     * const driverReference = await prisma.driverReference.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DriverReferenceFindUniqueArgs>(args: SelectSubset<T, DriverReferenceFindUniqueArgs<ExtArgs>>): Prisma__DriverReferenceClient<$Result.GetResult<Prisma.$DriverReferencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DriverReference that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DriverReferenceFindUniqueOrThrowArgs} args - Arguments to find a DriverReference
     * @example
     * // Get one DriverReference
     * const driverReference = await prisma.driverReference.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DriverReferenceFindUniqueOrThrowArgs>(args: SelectSubset<T, DriverReferenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DriverReferenceClient<$Result.GetResult<Prisma.$DriverReferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DriverReference that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverReferenceFindFirstArgs} args - Arguments to find a DriverReference
     * @example
     * // Get one DriverReference
     * const driverReference = await prisma.driverReference.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DriverReferenceFindFirstArgs>(args?: SelectSubset<T, DriverReferenceFindFirstArgs<ExtArgs>>): Prisma__DriverReferenceClient<$Result.GetResult<Prisma.$DriverReferencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DriverReference that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverReferenceFindFirstOrThrowArgs} args - Arguments to find a DriverReference
     * @example
     * // Get one DriverReference
     * const driverReference = await prisma.driverReference.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DriverReferenceFindFirstOrThrowArgs>(args?: SelectSubset<T, DriverReferenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DriverReferenceClient<$Result.GetResult<Prisma.$DriverReferencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DriverReferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverReferenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DriverReferences
     * const driverReferences = await prisma.driverReference.findMany()
     * 
     * // Get first 10 DriverReferences
     * const driverReferences = await prisma.driverReference.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const driverReferenceWithIdOnly = await prisma.driverReference.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DriverReferenceFindManyArgs>(args?: SelectSubset<T, DriverReferenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverReferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DriverReference.
     * @param {DriverReferenceCreateArgs} args - Arguments to create a DriverReference.
     * @example
     * // Create one DriverReference
     * const DriverReference = await prisma.driverReference.create({
     *   data: {
     *     // ... data to create a DriverReference
     *   }
     * })
     * 
     */
    create<T extends DriverReferenceCreateArgs>(args: SelectSubset<T, DriverReferenceCreateArgs<ExtArgs>>): Prisma__DriverReferenceClient<$Result.GetResult<Prisma.$DriverReferencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DriverReferences.
     * @param {DriverReferenceCreateManyArgs} args - Arguments to create many DriverReferences.
     * @example
     * // Create many DriverReferences
     * const driverReference = await prisma.driverReference.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DriverReferenceCreateManyArgs>(args?: SelectSubset<T, DriverReferenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DriverReferences and returns the data saved in the database.
     * @param {DriverReferenceCreateManyAndReturnArgs} args - Arguments to create many DriverReferences.
     * @example
     * // Create many DriverReferences
     * const driverReference = await prisma.driverReference.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DriverReferences and only return the `id`
     * const driverReferenceWithIdOnly = await prisma.driverReference.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DriverReferenceCreateManyAndReturnArgs>(args?: SelectSubset<T, DriverReferenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverReferencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DriverReference.
     * @param {DriverReferenceDeleteArgs} args - Arguments to delete one DriverReference.
     * @example
     * // Delete one DriverReference
     * const DriverReference = await prisma.driverReference.delete({
     *   where: {
     *     // ... filter to delete one DriverReference
     *   }
     * })
     * 
     */
    delete<T extends DriverReferenceDeleteArgs>(args: SelectSubset<T, DriverReferenceDeleteArgs<ExtArgs>>): Prisma__DriverReferenceClient<$Result.GetResult<Prisma.$DriverReferencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DriverReference.
     * @param {DriverReferenceUpdateArgs} args - Arguments to update one DriverReference.
     * @example
     * // Update one DriverReference
     * const driverReference = await prisma.driverReference.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DriverReferenceUpdateArgs>(args: SelectSubset<T, DriverReferenceUpdateArgs<ExtArgs>>): Prisma__DriverReferenceClient<$Result.GetResult<Prisma.$DriverReferencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DriverReferences.
     * @param {DriverReferenceDeleteManyArgs} args - Arguments to filter DriverReferences to delete.
     * @example
     * // Delete a few DriverReferences
     * const { count } = await prisma.driverReference.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DriverReferenceDeleteManyArgs>(args?: SelectSubset<T, DriverReferenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DriverReferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverReferenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DriverReferences
     * const driverReference = await prisma.driverReference.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DriverReferenceUpdateManyArgs>(args: SelectSubset<T, DriverReferenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DriverReferences and returns the data updated in the database.
     * @param {DriverReferenceUpdateManyAndReturnArgs} args - Arguments to update many DriverReferences.
     * @example
     * // Update many DriverReferences
     * const driverReference = await prisma.driverReference.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DriverReferences and only return the `id`
     * const driverReferenceWithIdOnly = await prisma.driverReference.updateManyAndReturn({
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
    updateManyAndReturn<T extends DriverReferenceUpdateManyAndReturnArgs>(args: SelectSubset<T, DriverReferenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverReferencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DriverReference.
     * @param {DriverReferenceUpsertArgs} args - Arguments to update or create a DriverReference.
     * @example
     * // Update or create a DriverReference
     * const driverReference = await prisma.driverReference.upsert({
     *   create: {
     *     // ... data to create a DriverReference
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DriverReference we want to update
     *   }
     * })
     */
    upsert<T extends DriverReferenceUpsertArgs>(args: SelectSubset<T, DriverReferenceUpsertArgs<ExtArgs>>): Prisma__DriverReferenceClient<$Result.GetResult<Prisma.$DriverReferencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DriverReferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverReferenceCountArgs} args - Arguments to filter DriverReferences to count.
     * @example
     * // Count the number of DriverReferences
     * const count = await prisma.driverReference.count({
     *   where: {
     *     // ... the filter for the DriverReferences we want to count
     *   }
     * })
    **/
    count<T extends DriverReferenceCountArgs>(
      args?: Subset<T, DriverReferenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DriverReferenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DriverReference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverReferenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DriverReferenceAggregateArgs>(args: Subset<T, DriverReferenceAggregateArgs>): Prisma.PrismaPromise<GetDriverReferenceAggregateType<T>>

    /**
     * Group by DriverReference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverReferenceGroupByArgs} args - Group by arguments.
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
      T extends DriverReferenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DriverReferenceGroupByArgs['orderBy'] }
        : { orderBy?: DriverReferenceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DriverReferenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDriverReferenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DriverReference model
   */
  readonly fields: DriverReferenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DriverReference.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DriverReferenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    driver<T extends DriverDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DriverDefaultArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DriverReference model
   */
  interface DriverReferenceFieldRefs {
    readonly id: FieldRef<"DriverReference", 'String'>
    readonly driverId: FieldRef<"DriverReference", 'String'>
    readonly referenceName: FieldRef<"DriverReference", 'String'>
    readonly referenceAddress: FieldRef<"DriverReference", 'String'>
    readonly referencePhone: FieldRef<"DriverReference", 'String'>
    readonly referenceRelation: FieldRef<"DriverReference", 'String'>
    readonly referenceEmail: FieldRef<"DriverReference", 'String'>
    readonly createdAt: FieldRef<"DriverReference", 'DateTime'>
    readonly updatedAt: FieldRef<"DriverReference", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DriverReference findUnique
   */
  export type DriverReferenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverReference
     */
    select?: DriverReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverReference
     */
    omit?: DriverReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverReferenceInclude<ExtArgs> | null
    /**
     * Filter, which DriverReference to fetch.
     */
    where: DriverReferenceWhereUniqueInput
  }

  /**
   * DriverReference findUniqueOrThrow
   */
  export type DriverReferenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverReference
     */
    select?: DriverReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverReference
     */
    omit?: DriverReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverReferenceInclude<ExtArgs> | null
    /**
     * Filter, which DriverReference to fetch.
     */
    where: DriverReferenceWhereUniqueInput
  }

  /**
   * DriverReference findFirst
   */
  export type DriverReferenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverReference
     */
    select?: DriverReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverReference
     */
    omit?: DriverReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverReferenceInclude<ExtArgs> | null
    /**
     * Filter, which DriverReference to fetch.
     */
    where?: DriverReferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DriverReferences to fetch.
     */
    orderBy?: DriverReferenceOrderByWithRelationInput | DriverReferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DriverReferences.
     */
    cursor?: DriverReferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DriverReferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DriverReferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DriverReferences.
     */
    distinct?: DriverReferenceScalarFieldEnum | DriverReferenceScalarFieldEnum[]
  }

  /**
   * DriverReference findFirstOrThrow
   */
  export type DriverReferenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverReference
     */
    select?: DriverReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverReference
     */
    omit?: DriverReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverReferenceInclude<ExtArgs> | null
    /**
     * Filter, which DriverReference to fetch.
     */
    where?: DriverReferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DriverReferences to fetch.
     */
    orderBy?: DriverReferenceOrderByWithRelationInput | DriverReferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DriverReferences.
     */
    cursor?: DriverReferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DriverReferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DriverReferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DriverReferences.
     */
    distinct?: DriverReferenceScalarFieldEnum | DriverReferenceScalarFieldEnum[]
  }

  /**
   * DriverReference findMany
   */
  export type DriverReferenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverReference
     */
    select?: DriverReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverReference
     */
    omit?: DriverReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverReferenceInclude<ExtArgs> | null
    /**
     * Filter, which DriverReferences to fetch.
     */
    where?: DriverReferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DriverReferences to fetch.
     */
    orderBy?: DriverReferenceOrderByWithRelationInput | DriverReferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DriverReferences.
     */
    cursor?: DriverReferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DriverReferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DriverReferences.
     */
    skip?: number
    distinct?: DriverReferenceScalarFieldEnum | DriverReferenceScalarFieldEnum[]
  }

  /**
   * DriverReference create
   */
  export type DriverReferenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverReference
     */
    select?: DriverReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverReference
     */
    omit?: DriverReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverReferenceInclude<ExtArgs> | null
    /**
     * The data needed to create a DriverReference.
     */
    data: XOR<DriverReferenceCreateInput, DriverReferenceUncheckedCreateInput>
  }

  /**
   * DriverReference createMany
   */
  export type DriverReferenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DriverReferences.
     */
    data: DriverReferenceCreateManyInput | DriverReferenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DriverReference createManyAndReturn
   */
  export type DriverReferenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverReference
     */
    select?: DriverReferenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DriverReference
     */
    omit?: DriverReferenceOmit<ExtArgs> | null
    /**
     * The data used to create many DriverReferences.
     */
    data: DriverReferenceCreateManyInput | DriverReferenceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverReferenceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DriverReference update
   */
  export type DriverReferenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverReference
     */
    select?: DriverReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverReference
     */
    omit?: DriverReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverReferenceInclude<ExtArgs> | null
    /**
     * The data needed to update a DriverReference.
     */
    data: XOR<DriverReferenceUpdateInput, DriverReferenceUncheckedUpdateInput>
    /**
     * Choose, which DriverReference to update.
     */
    where: DriverReferenceWhereUniqueInput
  }

  /**
   * DriverReference updateMany
   */
  export type DriverReferenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DriverReferences.
     */
    data: XOR<DriverReferenceUpdateManyMutationInput, DriverReferenceUncheckedUpdateManyInput>
    /**
     * Filter which DriverReferences to update
     */
    where?: DriverReferenceWhereInput
    /**
     * Limit how many DriverReferences to update.
     */
    limit?: number
  }

  /**
   * DriverReference updateManyAndReturn
   */
  export type DriverReferenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverReference
     */
    select?: DriverReferenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DriverReference
     */
    omit?: DriverReferenceOmit<ExtArgs> | null
    /**
     * The data used to update DriverReferences.
     */
    data: XOR<DriverReferenceUpdateManyMutationInput, DriverReferenceUncheckedUpdateManyInput>
    /**
     * Filter which DriverReferences to update
     */
    where?: DriverReferenceWhereInput
    /**
     * Limit how many DriverReferences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverReferenceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DriverReference upsert
   */
  export type DriverReferenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverReference
     */
    select?: DriverReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverReference
     */
    omit?: DriverReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverReferenceInclude<ExtArgs> | null
    /**
     * The filter to search for the DriverReference to update in case it exists.
     */
    where: DriverReferenceWhereUniqueInput
    /**
     * In case the DriverReference found by the `where` argument doesn't exist, create a new DriverReference with this data.
     */
    create: XOR<DriverReferenceCreateInput, DriverReferenceUncheckedCreateInput>
    /**
     * In case the DriverReference was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DriverReferenceUpdateInput, DriverReferenceUncheckedUpdateInput>
  }

  /**
   * DriverReference delete
   */
  export type DriverReferenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverReference
     */
    select?: DriverReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverReference
     */
    omit?: DriverReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverReferenceInclude<ExtArgs> | null
    /**
     * Filter which DriverReference to delete.
     */
    where: DriverReferenceWhereUniqueInput
  }

  /**
   * DriverReference deleteMany
   */
  export type DriverReferenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DriverReferences to delete
     */
    where?: DriverReferenceWhereInput
    /**
     * Limit how many DriverReferences to delete.
     */
    limit?: number
  }

  /**
   * DriverReference without action
   */
  export type DriverReferenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverReference
     */
    select?: DriverReferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverReference
     */
    omit?: DriverReferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverReferenceInclude<ExtArgs> | null
  }


  /**
   * Model DriverDocument
   */

  export type AggregateDriverDocument = {
    _count: DriverDocumentCountAggregateOutputType | null
    _min: DriverDocumentMinAggregateOutputType | null
    _max: DriverDocumentMaxAggregateOutputType | null
  }

  export type DriverDocumentMinAggregateOutputType = {
    id: string | null
    driverId: string | null
    documentType: string | null
    documentName: string | null
    documentUrl: string | null
    issueDate: Date | null
    expiryDate: Date | null
    isVerified: boolean | null
    verifiedBy: string | null
    verifiedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DriverDocumentMaxAggregateOutputType = {
    id: string | null
    driverId: string | null
    documentType: string | null
    documentName: string | null
    documentUrl: string | null
    issueDate: Date | null
    expiryDate: Date | null
    isVerified: boolean | null
    verifiedBy: string | null
    verifiedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DriverDocumentCountAggregateOutputType = {
    id: number
    driverId: number
    documentType: number
    documentName: number
    documentUrl: number
    issueDate: number
    expiryDate: number
    isVerified: number
    verifiedBy: number
    verifiedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DriverDocumentMinAggregateInputType = {
    id?: true
    driverId?: true
    documentType?: true
    documentName?: true
    documentUrl?: true
    issueDate?: true
    expiryDate?: true
    isVerified?: true
    verifiedBy?: true
    verifiedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DriverDocumentMaxAggregateInputType = {
    id?: true
    driverId?: true
    documentType?: true
    documentName?: true
    documentUrl?: true
    issueDate?: true
    expiryDate?: true
    isVerified?: true
    verifiedBy?: true
    verifiedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DriverDocumentCountAggregateInputType = {
    id?: true
    driverId?: true
    documentType?: true
    documentName?: true
    documentUrl?: true
    issueDate?: true
    expiryDate?: true
    isVerified?: true
    verifiedBy?: true
    verifiedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DriverDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DriverDocument to aggregate.
     */
    where?: DriverDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DriverDocuments to fetch.
     */
    orderBy?: DriverDocumentOrderByWithRelationInput | DriverDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DriverDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DriverDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DriverDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DriverDocuments
    **/
    _count?: true | DriverDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DriverDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DriverDocumentMaxAggregateInputType
  }

  export type GetDriverDocumentAggregateType<T extends DriverDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDriverDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDriverDocument[P]>
      : GetScalarType<T[P], AggregateDriverDocument[P]>
  }




  export type DriverDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DriverDocumentWhereInput
    orderBy?: DriverDocumentOrderByWithAggregationInput | DriverDocumentOrderByWithAggregationInput[]
    by: DriverDocumentScalarFieldEnum[] | DriverDocumentScalarFieldEnum
    having?: DriverDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DriverDocumentCountAggregateInputType | true
    _min?: DriverDocumentMinAggregateInputType
    _max?: DriverDocumentMaxAggregateInputType
  }

  export type DriverDocumentGroupByOutputType = {
    id: string
    driverId: string
    documentType: string
    documentName: string
    documentUrl: string
    issueDate: Date | null
    expiryDate: Date | null
    isVerified: boolean
    verifiedBy: string | null
    verifiedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: DriverDocumentCountAggregateOutputType | null
    _min: DriverDocumentMinAggregateOutputType | null
    _max: DriverDocumentMaxAggregateOutputType | null
  }

  type GetDriverDocumentGroupByPayload<T extends DriverDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DriverDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DriverDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DriverDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DriverDocumentGroupByOutputType[P]>
        }
      >
    >


  export type DriverDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    driverId?: boolean
    documentType?: boolean
    documentName?: boolean
    documentUrl?: boolean
    issueDate?: boolean
    expiryDate?: boolean
    isVerified?: boolean
    verifiedBy?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["driverDocument"]>

  export type DriverDocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    driverId?: boolean
    documentType?: boolean
    documentName?: boolean
    documentUrl?: boolean
    issueDate?: boolean
    expiryDate?: boolean
    isVerified?: boolean
    verifiedBy?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["driverDocument"]>

  export type DriverDocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    driverId?: boolean
    documentType?: boolean
    documentName?: boolean
    documentUrl?: boolean
    issueDate?: boolean
    expiryDate?: boolean
    isVerified?: boolean
    verifiedBy?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["driverDocument"]>

  export type DriverDocumentSelectScalar = {
    id?: boolean
    driverId?: boolean
    documentType?: boolean
    documentName?: boolean
    documentUrl?: boolean
    issueDate?: boolean
    expiryDate?: boolean
    isVerified?: boolean
    verifiedBy?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DriverDocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "driverId" | "documentType" | "documentName" | "documentUrl" | "issueDate" | "expiryDate" | "isVerified" | "verifiedBy" | "verifiedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["driverDocument"]>
  export type DriverDocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }
  export type DriverDocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }
  export type DriverDocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }

  export type $DriverDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DriverDocument"
    objects: {
      driver: Prisma.$DriverPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      driverId: string
      documentType: string
      documentName: string
      documentUrl: string
      issueDate: Date | null
      expiryDate: Date | null
      isVerified: boolean
      verifiedBy: string | null
      verifiedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["driverDocument"]>
    composites: {}
  }

  type DriverDocumentGetPayload<S extends boolean | null | undefined | DriverDocumentDefaultArgs> = $Result.GetResult<Prisma.$DriverDocumentPayload, S>

  type DriverDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DriverDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DriverDocumentCountAggregateInputType | true
    }

  export interface DriverDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DriverDocument'], meta: { name: 'DriverDocument' } }
    /**
     * Find zero or one DriverDocument that matches the filter.
     * @param {DriverDocumentFindUniqueArgs} args - Arguments to find a DriverDocument
     * @example
     * // Get one DriverDocument
     * const driverDocument = await prisma.driverDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DriverDocumentFindUniqueArgs>(args: SelectSubset<T, DriverDocumentFindUniqueArgs<ExtArgs>>): Prisma__DriverDocumentClient<$Result.GetResult<Prisma.$DriverDocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DriverDocument that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DriverDocumentFindUniqueOrThrowArgs} args - Arguments to find a DriverDocument
     * @example
     * // Get one DriverDocument
     * const driverDocument = await prisma.driverDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DriverDocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, DriverDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DriverDocumentClient<$Result.GetResult<Prisma.$DriverDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DriverDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverDocumentFindFirstArgs} args - Arguments to find a DriverDocument
     * @example
     * // Get one DriverDocument
     * const driverDocument = await prisma.driverDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DriverDocumentFindFirstArgs>(args?: SelectSubset<T, DriverDocumentFindFirstArgs<ExtArgs>>): Prisma__DriverDocumentClient<$Result.GetResult<Prisma.$DriverDocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DriverDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverDocumentFindFirstOrThrowArgs} args - Arguments to find a DriverDocument
     * @example
     * // Get one DriverDocument
     * const driverDocument = await prisma.driverDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DriverDocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, DriverDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DriverDocumentClient<$Result.GetResult<Prisma.$DriverDocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DriverDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DriverDocuments
     * const driverDocuments = await prisma.driverDocument.findMany()
     * 
     * // Get first 10 DriverDocuments
     * const driverDocuments = await prisma.driverDocument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const driverDocumentWithIdOnly = await prisma.driverDocument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DriverDocumentFindManyArgs>(args?: SelectSubset<T, DriverDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DriverDocument.
     * @param {DriverDocumentCreateArgs} args - Arguments to create a DriverDocument.
     * @example
     * // Create one DriverDocument
     * const DriverDocument = await prisma.driverDocument.create({
     *   data: {
     *     // ... data to create a DriverDocument
     *   }
     * })
     * 
     */
    create<T extends DriverDocumentCreateArgs>(args: SelectSubset<T, DriverDocumentCreateArgs<ExtArgs>>): Prisma__DriverDocumentClient<$Result.GetResult<Prisma.$DriverDocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DriverDocuments.
     * @param {DriverDocumentCreateManyArgs} args - Arguments to create many DriverDocuments.
     * @example
     * // Create many DriverDocuments
     * const driverDocument = await prisma.driverDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DriverDocumentCreateManyArgs>(args?: SelectSubset<T, DriverDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DriverDocuments and returns the data saved in the database.
     * @param {DriverDocumentCreateManyAndReturnArgs} args - Arguments to create many DriverDocuments.
     * @example
     * // Create many DriverDocuments
     * const driverDocument = await prisma.driverDocument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DriverDocuments and only return the `id`
     * const driverDocumentWithIdOnly = await prisma.driverDocument.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DriverDocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, DriverDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverDocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DriverDocument.
     * @param {DriverDocumentDeleteArgs} args - Arguments to delete one DriverDocument.
     * @example
     * // Delete one DriverDocument
     * const DriverDocument = await prisma.driverDocument.delete({
     *   where: {
     *     // ... filter to delete one DriverDocument
     *   }
     * })
     * 
     */
    delete<T extends DriverDocumentDeleteArgs>(args: SelectSubset<T, DriverDocumentDeleteArgs<ExtArgs>>): Prisma__DriverDocumentClient<$Result.GetResult<Prisma.$DriverDocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DriverDocument.
     * @param {DriverDocumentUpdateArgs} args - Arguments to update one DriverDocument.
     * @example
     * // Update one DriverDocument
     * const driverDocument = await prisma.driverDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DriverDocumentUpdateArgs>(args: SelectSubset<T, DriverDocumentUpdateArgs<ExtArgs>>): Prisma__DriverDocumentClient<$Result.GetResult<Prisma.$DriverDocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DriverDocuments.
     * @param {DriverDocumentDeleteManyArgs} args - Arguments to filter DriverDocuments to delete.
     * @example
     * // Delete a few DriverDocuments
     * const { count } = await prisma.driverDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DriverDocumentDeleteManyArgs>(args?: SelectSubset<T, DriverDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DriverDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DriverDocuments
     * const driverDocument = await prisma.driverDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DriverDocumentUpdateManyArgs>(args: SelectSubset<T, DriverDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DriverDocuments and returns the data updated in the database.
     * @param {DriverDocumentUpdateManyAndReturnArgs} args - Arguments to update many DriverDocuments.
     * @example
     * // Update many DriverDocuments
     * const driverDocument = await prisma.driverDocument.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DriverDocuments and only return the `id`
     * const driverDocumentWithIdOnly = await prisma.driverDocument.updateManyAndReturn({
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
    updateManyAndReturn<T extends DriverDocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, DriverDocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverDocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DriverDocument.
     * @param {DriverDocumentUpsertArgs} args - Arguments to update or create a DriverDocument.
     * @example
     * // Update or create a DriverDocument
     * const driverDocument = await prisma.driverDocument.upsert({
     *   create: {
     *     // ... data to create a DriverDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DriverDocument we want to update
     *   }
     * })
     */
    upsert<T extends DriverDocumentUpsertArgs>(args: SelectSubset<T, DriverDocumentUpsertArgs<ExtArgs>>): Prisma__DriverDocumentClient<$Result.GetResult<Prisma.$DriverDocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DriverDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverDocumentCountArgs} args - Arguments to filter DriverDocuments to count.
     * @example
     * // Count the number of DriverDocuments
     * const count = await prisma.driverDocument.count({
     *   where: {
     *     // ... the filter for the DriverDocuments we want to count
     *   }
     * })
    **/
    count<T extends DriverDocumentCountArgs>(
      args?: Subset<T, DriverDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DriverDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DriverDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DriverDocumentAggregateArgs>(args: Subset<T, DriverDocumentAggregateArgs>): Prisma.PrismaPromise<GetDriverDocumentAggregateType<T>>

    /**
     * Group by DriverDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverDocumentGroupByArgs} args - Group by arguments.
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
      T extends DriverDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DriverDocumentGroupByArgs['orderBy'] }
        : { orderBy?: DriverDocumentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DriverDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDriverDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DriverDocument model
   */
  readonly fields: DriverDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DriverDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DriverDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    driver<T extends DriverDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DriverDefaultArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DriverDocument model
   */
  interface DriverDocumentFieldRefs {
    readonly id: FieldRef<"DriverDocument", 'String'>
    readonly driverId: FieldRef<"DriverDocument", 'String'>
    readonly documentType: FieldRef<"DriverDocument", 'String'>
    readonly documentName: FieldRef<"DriverDocument", 'String'>
    readonly documentUrl: FieldRef<"DriverDocument", 'String'>
    readonly issueDate: FieldRef<"DriverDocument", 'DateTime'>
    readonly expiryDate: FieldRef<"DriverDocument", 'DateTime'>
    readonly isVerified: FieldRef<"DriverDocument", 'Boolean'>
    readonly verifiedBy: FieldRef<"DriverDocument", 'String'>
    readonly verifiedAt: FieldRef<"DriverDocument", 'DateTime'>
    readonly createdAt: FieldRef<"DriverDocument", 'DateTime'>
    readonly updatedAt: FieldRef<"DriverDocument", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DriverDocument findUnique
   */
  export type DriverDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverDocument
     */
    select?: DriverDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverDocument
     */
    omit?: DriverDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverDocumentInclude<ExtArgs> | null
    /**
     * Filter, which DriverDocument to fetch.
     */
    where: DriverDocumentWhereUniqueInput
  }

  /**
   * DriverDocument findUniqueOrThrow
   */
  export type DriverDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverDocument
     */
    select?: DriverDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverDocument
     */
    omit?: DriverDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverDocumentInclude<ExtArgs> | null
    /**
     * Filter, which DriverDocument to fetch.
     */
    where: DriverDocumentWhereUniqueInput
  }

  /**
   * DriverDocument findFirst
   */
  export type DriverDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverDocument
     */
    select?: DriverDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverDocument
     */
    omit?: DriverDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverDocumentInclude<ExtArgs> | null
    /**
     * Filter, which DriverDocument to fetch.
     */
    where?: DriverDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DriverDocuments to fetch.
     */
    orderBy?: DriverDocumentOrderByWithRelationInput | DriverDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DriverDocuments.
     */
    cursor?: DriverDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DriverDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DriverDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DriverDocuments.
     */
    distinct?: DriverDocumentScalarFieldEnum | DriverDocumentScalarFieldEnum[]
  }

  /**
   * DriverDocument findFirstOrThrow
   */
  export type DriverDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverDocument
     */
    select?: DriverDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverDocument
     */
    omit?: DriverDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverDocumentInclude<ExtArgs> | null
    /**
     * Filter, which DriverDocument to fetch.
     */
    where?: DriverDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DriverDocuments to fetch.
     */
    orderBy?: DriverDocumentOrderByWithRelationInput | DriverDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DriverDocuments.
     */
    cursor?: DriverDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DriverDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DriverDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DriverDocuments.
     */
    distinct?: DriverDocumentScalarFieldEnum | DriverDocumentScalarFieldEnum[]
  }

  /**
   * DriverDocument findMany
   */
  export type DriverDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverDocument
     */
    select?: DriverDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverDocument
     */
    omit?: DriverDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverDocumentInclude<ExtArgs> | null
    /**
     * Filter, which DriverDocuments to fetch.
     */
    where?: DriverDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DriverDocuments to fetch.
     */
    orderBy?: DriverDocumentOrderByWithRelationInput | DriverDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DriverDocuments.
     */
    cursor?: DriverDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DriverDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DriverDocuments.
     */
    skip?: number
    distinct?: DriverDocumentScalarFieldEnum | DriverDocumentScalarFieldEnum[]
  }

  /**
   * DriverDocument create
   */
  export type DriverDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverDocument
     */
    select?: DriverDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverDocument
     */
    omit?: DriverDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverDocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a DriverDocument.
     */
    data: XOR<DriverDocumentCreateInput, DriverDocumentUncheckedCreateInput>
  }

  /**
   * DriverDocument createMany
   */
  export type DriverDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DriverDocuments.
     */
    data: DriverDocumentCreateManyInput | DriverDocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DriverDocument createManyAndReturn
   */
  export type DriverDocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverDocument
     */
    select?: DriverDocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DriverDocument
     */
    omit?: DriverDocumentOmit<ExtArgs> | null
    /**
     * The data used to create many DriverDocuments.
     */
    data: DriverDocumentCreateManyInput | DriverDocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverDocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DriverDocument update
   */
  export type DriverDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverDocument
     */
    select?: DriverDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverDocument
     */
    omit?: DriverDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverDocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a DriverDocument.
     */
    data: XOR<DriverDocumentUpdateInput, DriverDocumentUncheckedUpdateInput>
    /**
     * Choose, which DriverDocument to update.
     */
    where: DriverDocumentWhereUniqueInput
  }

  /**
   * DriverDocument updateMany
   */
  export type DriverDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DriverDocuments.
     */
    data: XOR<DriverDocumentUpdateManyMutationInput, DriverDocumentUncheckedUpdateManyInput>
    /**
     * Filter which DriverDocuments to update
     */
    where?: DriverDocumentWhereInput
    /**
     * Limit how many DriverDocuments to update.
     */
    limit?: number
  }

  /**
   * DriverDocument updateManyAndReturn
   */
  export type DriverDocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverDocument
     */
    select?: DriverDocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DriverDocument
     */
    omit?: DriverDocumentOmit<ExtArgs> | null
    /**
     * The data used to update DriverDocuments.
     */
    data: XOR<DriverDocumentUpdateManyMutationInput, DriverDocumentUncheckedUpdateManyInput>
    /**
     * Filter which DriverDocuments to update
     */
    where?: DriverDocumentWhereInput
    /**
     * Limit how many DriverDocuments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverDocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DriverDocument upsert
   */
  export type DriverDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverDocument
     */
    select?: DriverDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverDocument
     */
    omit?: DriverDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverDocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the DriverDocument to update in case it exists.
     */
    where: DriverDocumentWhereUniqueInput
    /**
     * In case the DriverDocument found by the `where` argument doesn't exist, create a new DriverDocument with this data.
     */
    create: XOR<DriverDocumentCreateInput, DriverDocumentUncheckedCreateInput>
    /**
     * In case the DriverDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DriverDocumentUpdateInput, DriverDocumentUncheckedUpdateInput>
  }

  /**
   * DriverDocument delete
   */
  export type DriverDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverDocument
     */
    select?: DriverDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverDocument
     */
    omit?: DriverDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverDocumentInclude<ExtArgs> | null
    /**
     * Filter which DriverDocument to delete.
     */
    where: DriverDocumentWhereUniqueInput
  }

  /**
   * DriverDocument deleteMany
   */
  export type DriverDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DriverDocuments to delete
     */
    where?: DriverDocumentWhereInput
    /**
     * Limit how many DriverDocuments to delete.
     */
    limit?: number
  }

  /**
   * DriverDocument without action
   */
  export type DriverDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverDocument
     */
    select?: DriverDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverDocument
     */
    omit?: DriverDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverDocumentInclude<ExtArgs> | null
  }


  /**
   * Model DriverViolation
   */

  export type AggregateDriverViolation = {
    _count: DriverViolationCountAggregateOutputType | null
    _avg: DriverViolationAvgAggregateOutputType | null
    _sum: DriverViolationSumAggregateOutputType | null
    _min: DriverViolationMinAggregateOutputType | null
    _max: DriverViolationMaxAggregateOutputType | null
  }

  export type DriverViolationAvgAggregateOutputType = {
    fineAmount: number | null
    points: number | null
  }

  export type DriverViolationSumAggregateOutputType = {
    fineAmount: number | null
    points: number | null
  }

  export type DriverViolationMinAggregateOutputType = {
    id: string | null
    driverId: string | null
    violationType: string | null
    violationDate: Date | null
    location: string | null
    description: string | null
    fineAmount: number | null
    isPaid: boolean | null
    points: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DriverViolationMaxAggregateOutputType = {
    id: string | null
    driverId: string | null
    violationType: string | null
    violationDate: Date | null
    location: string | null
    description: string | null
    fineAmount: number | null
    isPaid: boolean | null
    points: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DriverViolationCountAggregateOutputType = {
    id: number
    driverId: number
    violationType: number
    violationDate: number
    location: number
    description: number
    fineAmount: number
    isPaid: number
    points: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DriverViolationAvgAggregateInputType = {
    fineAmount?: true
    points?: true
  }

  export type DriverViolationSumAggregateInputType = {
    fineAmount?: true
    points?: true
  }

  export type DriverViolationMinAggregateInputType = {
    id?: true
    driverId?: true
    violationType?: true
    violationDate?: true
    location?: true
    description?: true
    fineAmount?: true
    isPaid?: true
    points?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DriverViolationMaxAggregateInputType = {
    id?: true
    driverId?: true
    violationType?: true
    violationDate?: true
    location?: true
    description?: true
    fineAmount?: true
    isPaid?: true
    points?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DriverViolationCountAggregateInputType = {
    id?: true
    driverId?: true
    violationType?: true
    violationDate?: true
    location?: true
    description?: true
    fineAmount?: true
    isPaid?: true
    points?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DriverViolationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DriverViolation to aggregate.
     */
    where?: DriverViolationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DriverViolations to fetch.
     */
    orderBy?: DriverViolationOrderByWithRelationInput | DriverViolationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DriverViolationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DriverViolations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DriverViolations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DriverViolations
    **/
    _count?: true | DriverViolationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DriverViolationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DriverViolationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DriverViolationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DriverViolationMaxAggregateInputType
  }

  export type GetDriverViolationAggregateType<T extends DriverViolationAggregateArgs> = {
        [P in keyof T & keyof AggregateDriverViolation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDriverViolation[P]>
      : GetScalarType<T[P], AggregateDriverViolation[P]>
  }




  export type DriverViolationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DriverViolationWhereInput
    orderBy?: DriverViolationOrderByWithAggregationInput | DriverViolationOrderByWithAggregationInput[]
    by: DriverViolationScalarFieldEnum[] | DriverViolationScalarFieldEnum
    having?: DriverViolationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DriverViolationCountAggregateInputType | true
    _avg?: DriverViolationAvgAggregateInputType
    _sum?: DriverViolationSumAggregateInputType
    _min?: DriverViolationMinAggregateInputType
    _max?: DriverViolationMaxAggregateInputType
  }

  export type DriverViolationGroupByOutputType = {
    id: string
    driverId: string
    violationType: string
    violationDate: Date
    location: string | null
    description: string | null
    fineAmount: number | null
    isPaid: boolean
    points: number | null
    createdAt: Date
    updatedAt: Date
    _count: DriverViolationCountAggregateOutputType | null
    _avg: DriverViolationAvgAggregateOutputType | null
    _sum: DriverViolationSumAggregateOutputType | null
    _min: DriverViolationMinAggregateOutputType | null
    _max: DriverViolationMaxAggregateOutputType | null
  }

  type GetDriverViolationGroupByPayload<T extends DriverViolationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DriverViolationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DriverViolationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DriverViolationGroupByOutputType[P]>
            : GetScalarType<T[P], DriverViolationGroupByOutputType[P]>
        }
      >
    >


  export type DriverViolationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    driverId?: boolean
    violationType?: boolean
    violationDate?: boolean
    location?: boolean
    description?: boolean
    fineAmount?: boolean
    isPaid?: boolean
    points?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["driverViolation"]>

  export type DriverViolationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    driverId?: boolean
    violationType?: boolean
    violationDate?: boolean
    location?: boolean
    description?: boolean
    fineAmount?: boolean
    isPaid?: boolean
    points?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["driverViolation"]>

  export type DriverViolationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    driverId?: boolean
    violationType?: boolean
    violationDate?: boolean
    location?: boolean
    description?: boolean
    fineAmount?: boolean
    isPaid?: boolean
    points?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["driverViolation"]>

  export type DriverViolationSelectScalar = {
    id?: boolean
    driverId?: boolean
    violationType?: boolean
    violationDate?: boolean
    location?: boolean
    description?: boolean
    fineAmount?: boolean
    isPaid?: boolean
    points?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DriverViolationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "driverId" | "violationType" | "violationDate" | "location" | "description" | "fineAmount" | "isPaid" | "points" | "createdAt" | "updatedAt", ExtArgs["result"]["driverViolation"]>
  export type DriverViolationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }
  export type DriverViolationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }
  export type DriverViolationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }

  export type $DriverViolationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DriverViolation"
    objects: {
      driver: Prisma.$DriverPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      driverId: string
      violationType: string
      violationDate: Date
      location: string | null
      description: string | null
      fineAmount: number | null
      isPaid: boolean
      points: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["driverViolation"]>
    composites: {}
  }

  type DriverViolationGetPayload<S extends boolean | null | undefined | DriverViolationDefaultArgs> = $Result.GetResult<Prisma.$DriverViolationPayload, S>

  type DriverViolationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DriverViolationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DriverViolationCountAggregateInputType | true
    }

  export interface DriverViolationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DriverViolation'], meta: { name: 'DriverViolation' } }
    /**
     * Find zero or one DriverViolation that matches the filter.
     * @param {DriverViolationFindUniqueArgs} args - Arguments to find a DriverViolation
     * @example
     * // Get one DriverViolation
     * const driverViolation = await prisma.driverViolation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DriverViolationFindUniqueArgs>(args: SelectSubset<T, DriverViolationFindUniqueArgs<ExtArgs>>): Prisma__DriverViolationClient<$Result.GetResult<Prisma.$DriverViolationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DriverViolation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DriverViolationFindUniqueOrThrowArgs} args - Arguments to find a DriverViolation
     * @example
     * // Get one DriverViolation
     * const driverViolation = await prisma.driverViolation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DriverViolationFindUniqueOrThrowArgs>(args: SelectSubset<T, DriverViolationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DriverViolationClient<$Result.GetResult<Prisma.$DriverViolationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DriverViolation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverViolationFindFirstArgs} args - Arguments to find a DriverViolation
     * @example
     * // Get one DriverViolation
     * const driverViolation = await prisma.driverViolation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DriverViolationFindFirstArgs>(args?: SelectSubset<T, DriverViolationFindFirstArgs<ExtArgs>>): Prisma__DriverViolationClient<$Result.GetResult<Prisma.$DriverViolationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DriverViolation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverViolationFindFirstOrThrowArgs} args - Arguments to find a DriverViolation
     * @example
     * // Get one DriverViolation
     * const driverViolation = await prisma.driverViolation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DriverViolationFindFirstOrThrowArgs>(args?: SelectSubset<T, DriverViolationFindFirstOrThrowArgs<ExtArgs>>): Prisma__DriverViolationClient<$Result.GetResult<Prisma.$DriverViolationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DriverViolations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverViolationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DriverViolations
     * const driverViolations = await prisma.driverViolation.findMany()
     * 
     * // Get first 10 DriverViolations
     * const driverViolations = await prisma.driverViolation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const driverViolationWithIdOnly = await prisma.driverViolation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DriverViolationFindManyArgs>(args?: SelectSubset<T, DriverViolationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverViolationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DriverViolation.
     * @param {DriverViolationCreateArgs} args - Arguments to create a DriverViolation.
     * @example
     * // Create one DriverViolation
     * const DriverViolation = await prisma.driverViolation.create({
     *   data: {
     *     // ... data to create a DriverViolation
     *   }
     * })
     * 
     */
    create<T extends DriverViolationCreateArgs>(args: SelectSubset<T, DriverViolationCreateArgs<ExtArgs>>): Prisma__DriverViolationClient<$Result.GetResult<Prisma.$DriverViolationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DriverViolations.
     * @param {DriverViolationCreateManyArgs} args - Arguments to create many DriverViolations.
     * @example
     * // Create many DriverViolations
     * const driverViolation = await prisma.driverViolation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DriverViolationCreateManyArgs>(args?: SelectSubset<T, DriverViolationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DriverViolations and returns the data saved in the database.
     * @param {DriverViolationCreateManyAndReturnArgs} args - Arguments to create many DriverViolations.
     * @example
     * // Create many DriverViolations
     * const driverViolation = await prisma.driverViolation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DriverViolations and only return the `id`
     * const driverViolationWithIdOnly = await prisma.driverViolation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DriverViolationCreateManyAndReturnArgs>(args?: SelectSubset<T, DriverViolationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverViolationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DriverViolation.
     * @param {DriverViolationDeleteArgs} args - Arguments to delete one DriverViolation.
     * @example
     * // Delete one DriverViolation
     * const DriverViolation = await prisma.driverViolation.delete({
     *   where: {
     *     // ... filter to delete one DriverViolation
     *   }
     * })
     * 
     */
    delete<T extends DriverViolationDeleteArgs>(args: SelectSubset<T, DriverViolationDeleteArgs<ExtArgs>>): Prisma__DriverViolationClient<$Result.GetResult<Prisma.$DriverViolationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DriverViolation.
     * @param {DriverViolationUpdateArgs} args - Arguments to update one DriverViolation.
     * @example
     * // Update one DriverViolation
     * const driverViolation = await prisma.driverViolation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DriverViolationUpdateArgs>(args: SelectSubset<T, DriverViolationUpdateArgs<ExtArgs>>): Prisma__DriverViolationClient<$Result.GetResult<Prisma.$DriverViolationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DriverViolations.
     * @param {DriverViolationDeleteManyArgs} args - Arguments to filter DriverViolations to delete.
     * @example
     * // Delete a few DriverViolations
     * const { count } = await prisma.driverViolation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DriverViolationDeleteManyArgs>(args?: SelectSubset<T, DriverViolationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DriverViolations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverViolationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DriverViolations
     * const driverViolation = await prisma.driverViolation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DriverViolationUpdateManyArgs>(args: SelectSubset<T, DriverViolationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DriverViolations and returns the data updated in the database.
     * @param {DriverViolationUpdateManyAndReturnArgs} args - Arguments to update many DriverViolations.
     * @example
     * // Update many DriverViolations
     * const driverViolation = await prisma.driverViolation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DriverViolations and only return the `id`
     * const driverViolationWithIdOnly = await prisma.driverViolation.updateManyAndReturn({
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
    updateManyAndReturn<T extends DriverViolationUpdateManyAndReturnArgs>(args: SelectSubset<T, DriverViolationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverViolationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DriverViolation.
     * @param {DriverViolationUpsertArgs} args - Arguments to update or create a DriverViolation.
     * @example
     * // Update or create a DriverViolation
     * const driverViolation = await prisma.driverViolation.upsert({
     *   create: {
     *     // ... data to create a DriverViolation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DriverViolation we want to update
     *   }
     * })
     */
    upsert<T extends DriverViolationUpsertArgs>(args: SelectSubset<T, DriverViolationUpsertArgs<ExtArgs>>): Prisma__DriverViolationClient<$Result.GetResult<Prisma.$DriverViolationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DriverViolations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverViolationCountArgs} args - Arguments to filter DriverViolations to count.
     * @example
     * // Count the number of DriverViolations
     * const count = await prisma.driverViolation.count({
     *   where: {
     *     // ... the filter for the DriverViolations we want to count
     *   }
     * })
    **/
    count<T extends DriverViolationCountArgs>(
      args?: Subset<T, DriverViolationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DriverViolationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DriverViolation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverViolationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DriverViolationAggregateArgs>(args: Subset<T, DriverViolationAggregateArgs>): Prisma.PrismaPromise<GetDriverViolationAggregateType<T>>

    /**
     * Group by DriverViolation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverViolationGroupByArgs} args - Group by arguments.
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
      T extends DriverViolationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DriverViolationGroupByArgs['orderBy'] }
        : { orderBy?: DriverViolationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DriverViolationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDriverViolationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DriverViolation model
   */
  readonly fields: DriverViolationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DriverViolation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DriverViolationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    driver<T extends DriverDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DriverDefaultArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DriverViolation model
   */
  interface DriverViolationFieldRefs {
    readonly id: FieldRef<"DriverViolation", 'String'>
    readonly driverId: FieldRef<"DriverViolation", 'String'>
    readonly violationType: FieldRef<"DriverViolation", 'String'>
    readonly violationDate: FieldRef<"DriverViolation", 'DateTime'>
    readonly location: FieldRef<"DriverViolation", 'String'>
    readonly description: FieldRef<"DriverViolation", 'String'>
    readonly fineAmount: FieldRef<"DriverViolation", 'Float'>
    readonly isPaid: FieldRef<"DriverViolation", 'Boolean'>
    readonly points: FieldRef<"DriverViolation", 'Int'>
    readonly createdAt: FieldRef<"DriverViolation", 'DateTime'>
    readonly updatedAt: FieldRef<"DriverViolation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DriverViolation findUnique
   */
  export type DriverViolationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverViolation
     */
    select?: DriverViolationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverViolation
     */
    omit?: DriverViolationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverViolationInclude<ExtArgs> | null
    /**
     * Filter, which DriverViolation to fetch.
     */
    where: DriverViolationWhereUniqueInput
  }

  /**
   * DriverViolation findUniqueOrThrow
   */
  export type DriverViolationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverViolation
     */
    select?: DriverViolationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverViolation
     */
    omit?: DriverViolationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverViolationInclude<ExtArgs> | null
    /**
     * Filter, which DriverViolation to fetch.
     */
    where: DriverViolationWhereUniqueInput
  }

  /**
   * DriverViolation findFirst
   */
  export type DriverViolationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverViolation
     */
    select?: DriverViolationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverViolation
     */
    omit?: DriverViolationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverViolationInclude<ExtArgs> | null
    /**
     * Filter, which DriverViolation to fetch.
     */
    where?: DriverViolationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DriverViolations to fetch.
     */
    orderBy?: DriverViolationOrderByWithRelationInput | DriverViolationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DriverViolations.
     */
    cursor?: DriverViolationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DriverViolations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DriverViolations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DriverViolations.
     */
    distinct?: DriverViolationScalarFieldEnum | DriverViolationScalarFieldEnum[]
  }

  /**
   * DriverViolation findFirstOrThrow
   */
  export type DriverViolationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverViolation
     */
    select?: DriverViolationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverViolation
     */
    omit?: DriverViolationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverViolationInclude<ExtArgs> | null
    /**
     * Filter, which DriverViolation to fetch.
     */
    where?: DriverViolationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DriverViolations to fetch.
     */
    orderBy?: DriverViolationOrderByWithRelationInput | DriverViolationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DriverViolations.
     */
    cursor?: DriverViolationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DriverViolations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DriverViolations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DriverViolations.
     */
    distinct?: DriverViolationScalarFieldEnum | DriverViolationScalarFieldEnum[]
  }

  /**
   * DriverViolation findMany
   */
  export type DriverViolationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverViolation
     */
    select?: DriverViolationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverViolation
     */
    omit?: DriverViolationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverViolationInclude<ExtArgs> | null
    /**
     * Filter, which DriverViolations to fetch.
     */
    where?: DriverViolationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DriverViolations to fetch.
     */
    orderBy?: DriverViolationOrderByWithRelationInput | DriverViolationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DriverViolations.
     */
    cursor?: DriverViolationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DriverViolations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DriverViolations.
     */
    skip?: number
    distinct?: DriverViolationScalarFieldEnum | DriverViolationScalarFieldEnum[]
  }

  /**
   * DriverViolation create
   */
  export type DriverViolationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverViolation
     */
    select?: DriverViolationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverViolation
     */
    omit?: DriverViolationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverViolationInclude<ExtArgs> | null
    /**
     * The data needed to create a DriverViolation.
     */
    data: XOR<DriverViolationCreateInput, DriverViolationUncheckedCreateInput>
  }

  /**
   * DriverViolation createMany
   */
  export type DriverViolationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DriverViolations.
     */
    data: DriverViolationCreateManyInput | DriverViolationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DriverViolation createManyAndReturn
   */
  export type DriverViolationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverViolation
     */
    select?: DriverViolationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DriverViolation
     */
    omit?: DriverViolationOmit<ExtArgs> | null
    /**
     * The data used to create many DriverViolations.
     */
    data: DriverViolationCreateManyInput | DriverViolationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverViolationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DriverViolation update
   */
  export type DriverViolationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverViolation
     */
    select?: DriverViolationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverViolation
     */
    omit?: DriverViolationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverViolationInclude<ExtArgs> | null
    /**
     * The data needed to update a DriverViolation.
     */
    data: XOR<DriverViolationUpdateInput, DriverViolationUncheckedUpdateInput>
    /**
     * Choose, which DriverViolation to update.
     */
    where: DriverViolationWhereUniqueInput
  }

  /**
   * DriverViolation updateMany
   */
  export type DriverViolationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DriverViolations.
     */
    data: XOR<DriverViolationUpdateManyMutationInput, DriverViolationUncheckedUpdateManyInput>
    /**
     * Filter which DriverViolations to update
     */
    where?: DriverViolationWhereInput
    /**
     * Limit how many DriverViolations to update.
     */
    limit?: number
  }

  /**
   * DriverViolation updateManyAndReturn
   */
  export type DriverViolationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverViolation
     */
    select?: DriverViolationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DriverViolation
     */
    omit?: DriverViolationOmit<ExtArgs> | null
    /**
     * The data used to update DriverViolations.
     */
    data: XOR<DriverViolationUpdateManyMutationInput, DriverViolationUncheckedUpdateManyInput>
    /**
     * Filter which DriverViolations to update
     */
    where?: DriverViolationWhereInput
    /**
     * Limit how many DriverViolations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverViolationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DriverViolation upsert
   */
  export type DriverViolationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverViolation
     */
    select?: DriverViolationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverViolation
     */
    omit?: DriverViolationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverViolationInclude<ExtArgs> | null
    /**
     * The filter to search for the DriverViolation to update in case it exists.
     */
    where: DriverViolationWhereUniqueInput
    /**
     * In case the DriverViolation found by the `where` argument doesn't exist, create a new DriverViolation with this data.
     */
    create: XOR<DriverViolationCreateInput, DriverViolationUncheckedCreateInput>
    /**
     * In case the DriverViolation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DriverViolationUpdateInput, DriverViolationUncheckedUpdateInput>
  }

  /**
   * DriverViolation delete
   */
  export type DriverViolationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverViolation
     */
    select?: DriverViolationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverViolation
     */
    omit?: DriverViolationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverViolationInclude<ExtArgs> | null
    /**
     * Filter which DriverViolation to delete.
     */
    where: DriverViolationWhereUniqueInput
  }

  /**
   * DriverViolation deleteMany
   */
  export type DriverViolationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DriverViolations to delete
     */
    where?: DriverViolationWhereInput
    /**
     * Limit how many DriverViolations to delete.
     */
    limit?: number
  }

  /**
   * DriverViolation without action
   */
  export type DriverViolationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverViolation
     */
    select?: DriverViolationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverViolation
     */
    omit?: DriverViolationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverViolationInclude<ExtArgs> | null
  }


  /**
   * Model DriverAssignment
   */

  export type AggregateDriverAssignment = {
    _count: DriverAssignmentCountAggregateOutputType | null
    _min: DriverAssignmentMinAggregateOutputType | null
    _max: DriverAssignmentMaxAggregateOutputType | null
  }

  export type DriverAssignmentMinAggregateOutputType = {
    id: string | null
    driverId: string | null
    vehicleId: string | null
    routeId: string | null
    assignmentDate: Date | null
    endDate: Date | null
    status: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DriverAssignmentMaxAggregateOutputType = {
    id: string | null
    driverId: string | null
    vehicleId: string | null
    routeId: string | null
    assignmentDate: Date | null
    endDate: Date | null
    status: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DriverAssignmentCountAggregateOutputType = {
    id: number
    driverId: number
    vehicleId: number
    routeId: number
    assignmentDate: number
    endDate: number
    status: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DriverAssignmentMinAggregateInputType = {
    id?: true
    driverId?: true
    vehicleId?: true
    routeId?: true
    assignmentDate?: true
    endDate?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DriverAssignmentMaxAggregateInputType = {
    id?: true
    driverId?: true
    vehicleId?: true
    routeId?: true
    assignmentDate?: true
    endDate?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DriverAssignmentCountAggregateInputType = {
    id?: true
    driverId?: true
    vehicleId?: true
    routeId?: true
    assignmentDate?: true
    endDate?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DriverAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DriverAssignment to aggregate.
     */
    where?: DriverAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DriverAssignments to fetch.
     */
    orderBy?: DriverAssignmentOrderByWithRelationInput | DriverAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DriverAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DriverAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DriverAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DriverAssignments
    **/
    _count?: true | DriverAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DriverAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DriverAssignmentMaxAggregateInputType
  }

  export type GetDriverAssignmentAggregateType<T extends DriverAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDriverAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDriverAssignment[P]>
      : GetScalarType<T[P], AggregateDriverAssignment[P]>
  }




  export type DriverAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DriverAssignmentWhereInput
    orderBy?: DriverAssignmentOrderByWithAggregationInput | DriverAssignmentOrderByWithAggregationInput[]
    by: DriverAssignmentScalarFieldEnum[] | DriverAssignmentScalarFieldEnum
    having?: DriverAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DriverAssignmentCountAggregateInputType | true
    _min?: DriverAssignmentMinAggregateInputType
    _max?: DriverAssignmentMaxAggregateInputType
  }

  export type DriverAssignmentGroupByOutputType = {
    id: string
    driverId: string
    vehicleId: string | null
    routeId: string | null
    assignmentDate: Date
    endDate: Date | null
    status: string
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: DriverAssignmentCountAggregateOutputType | null
    _min: DriverAssignmentMinAggregateOutputType | null
    _max: DriverAssignmentMaxAggregateOutputType | null
  }

  type GetDriverAssignmentGroupByPayload<T extends DriverAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DriverAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DriverAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DriverAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], DriverAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type DriverAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    driverId?: boolean
    vehicleId?: boolean
    routeId?: boolean
    assignmentDate?: boolean
    endDate?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["driverAssignment"]>

  export type DriverAssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    driverId?: boolean
    vehicleId?: boolean
    routeId?: boolean
    assignmentDate?: boolean
    endDate?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["driverAssignment"]>

  export type DriverAssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    driverId?: boolean
    vehicleId?: boolean
    routeId?: boolean
    assignmentDate?: boolean
    endDate?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["driverAssignment"]>

  export type DriverAssignmentSelectScalar = {
    id?: boolean
    driverId?: boolean
    vehicleId?: boolean
    routeId?: boolean
    assignmentDate?: boolean
    endDate?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DriverAssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "driverId" | "vehicleId" | "routeId" | "assignmentDate" | "endDate" | "status" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["driverAssignment"]>
  export type DriverAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }
  export type DriverAssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }
  export type DriverAssignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }

  export type $DriverAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DriverAssignment"
    objects: {
      driver: Prisma.$DriverPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      driverId: string
      vehicleId: string | null
      routeId: string | null
      assignmentDate: Date
      endDate: Date | null
      status: string
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["driverAssignment"]>
    composites: {}
  }

  type DriverAssignmentGetPayload<S extends boolean | null | undefined | DriverAssignmentDefaultArgs> = $Result.GetResult<Prisma.$DriverAssignmentPayload, S>

  type DriverAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DriverAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DriverAssignmentCountAggregateInputType | true
    }

  export interface DriverAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DriverAssignment'], meta: { name: 'DriverAssignment' } }
    /**
     * Find zero or one DriverAssignment that matches the filter.
     * @param {DriverAssignmentFindUniqueArgs} args - Arguments to find a DriverAssignment
     * @example
     * // Get one DriverAssignment
     * const driverAssignment = await prisma.driverAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DriverAssignmentFindUniqueArgs>(args: SelectSubset<T, DriverAssignmentFindUniqueArgs<ExtArgs>>): Prisma__DriverAssignmentClient<$Result.GetResult<Prisma.$DriverAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DriverAssignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DriverAssignmentFindUniqueOrThrowArgs} args - Arguments to find a DriverAssignment
     * @example
     * // Get one DriverAssignment
     * const driverAssignment = await prisma.driverAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DriverAssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, DriverAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DriverAssignmentClient<$Result.GetResult<Prisma.$DriverAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DriverAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverAssignmentFindFirstArgs} args - Arguments to find a DriverAssignment
     * @example
     * // Get one DriverAssignment
     * const driverAssignment = await prisma.driverAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DriverAssignmentFindFirstArgs>(args?: SelectSubset<T, DriverAssignmentFindFirstArgs<ExtArgs>>): Prisma__DriverAssignmentClient<$Result.GetResult<Prisma.$DriverAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DriverAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverAssignmentFindFirstOrThrowArgs} args - Arguments to find a DriverAssignment
     * @example
     * // Get one DriverAssignment
     * const driverAssignment = await prisma.driverAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DriverAssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, DriverAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DriverAssignmentClient<$Result.GetResult<Prisma.$DriverAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DriverAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverAssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DriverAssignments
     * const driverAssignments = await prisma.driverAssignment.findMany()
     * 
     * // Get first 10 DriverAssignments
     * const driverAssignments = await prisma.driverAssignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const driverAssignmentWithIdOnly = await prisma.driverAssignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DriverAssignmentFindManyArgs>(args?: SelectSubset<T, DriverAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DriverAssignment.
     * @param {DriverAssignmentCreateArgs} args - Arguments to create a DriverAssignment.
     * @example
     * // Create one DriverAssignment
     * const DriverAssignment = await prisma.driverAssignment.create({
     *   data: {
     *     // ... data to create a DriverAssignment
     *   }
     * })
     * 
     */
    create<T extends DriverAssignmentCreateArgs>(args: SelectSubset<T, DriverAssignmentCreateArgs<ExtArgs>>): Prisma__DriverAssignmentClient<$Result.GetResult<Prisma.$DriverAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DriverAssignments.
     * @param {DriverAssignmentCreateManyArgs} args - Arguments to create many DriverAssignments.
     * @example
     * // Create many DriverAssignments
     * const driverAssignment = await prisma.driverAssignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DriverAssignmentCreateManyArgs>(args?: SelectSubset<T, DriverAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DriverAssignments and returns the data saved in the database.
     * @param {DriverAssignmentCreateManyAndReturnArgs} args - Arguments to create many DriverAssignments.
     * @example
     * // Create many DriverAssignments
     * const driverAssignment = await prisma.driverAssignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DriverAssignments and only return the `id`
     * const driverAssignmentWithIdOnly = await prisma.driverAssignment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DriverAssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, DriverAssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverAssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DriverAssignment.
     * @param {DriverAssignmentDeleteArgs} args - Arguments to delete one DriverAssignment.
     * @example
     * // Delete one DriverAssignment
     * const DriverAssignment = await prisma.driverAssignment.delete({
     *   where: {
     *     // ... filter to delete one DriverAssignment
     *   }
     * })
     * 
     */
    delete<T extends DriverAssignmentDeleteArgs>(args: SelectSubset<T, DriverAssignmentDeleteArgs<ExtArgs>>): Prisma__DriverAssignmentClient<$Result.GetResult<Prisma.$DriverAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DriverAssignment.
     * @param {DriverAssignmentUpdateArgs} args - Arguments to update one DriverAssignment.
     * @example
     * // Update one DriverAssignment
     * const driverAssignment = await prisma.driverAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DriverAssignmentUpdateArgs>(args: SelectSubset<T, DriverAssignmentUpdateArgs<ExtArgs>>): Prisma__DriverAssignmentClient<$Result.GetResult<Prisma.$DriverAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DriverAssignments.
     * @param {DriverAssignmentDeleteManyArgs} args - Arguments to filter DriverAssignments to delete.
     * @example
     * // Delete a few DriverAssignments
     * const { count } = await prisma.driverAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DriverAssignmentDeleteManyArgs>(args?: SelectSubset<T, DriverAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DriverAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DriverAssignments
     * const driverAssignment = await prisma.driverAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DriverAssignmentUpdateManyArgs>(args: SelectSubset<T, DriverAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DriverAssignments and returns the data updated in the database.
     * @param {DriverAssignmentUpdateManyAndReturnArgs} args - Arguments to update many DriverAssignments.
     * @example
     * // Update many DriverAssignments
     * const driverAssignment = await prisma.driverAssignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DriverAssignments and only return the `id`
     * const driverAssignmentWithIdOnly = await prisma.driverAssignment.updateManyAndReturn({
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
    updateManyAndReturn<T extends DriverAssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, DriverAssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverAssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DriverAssignment.
     * @param {DriverAssignmentUpsertArgs} args - Arguments to update or create a DriverAssignment.
     * @example
     * // Update or create a DriverAssignment
     * const driverAssignment = await prisma.driverAssignment.upsert({
     *   create: {
     *     // ... data to create a DriverAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DriverAssignment we want to update
     *   }
     * })
     */
    upsert<T extends DriverAssignmentUpsertArgs>(args: SelectSubset<T, DriverAssignmentUpsertArgs<ExtArgs>>): Prisma__DriverAssignmentClient<$Result.GetResult<Prisma.$DriverAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DriverAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverAssignmentCountArgs} args - Arguments to filter DriverAssignments to count.
     * @example
     * // Count the number of DriverAssignments
     * const count = await prisma.driverAssignment.count({
     *   where: {
     *     // ... the filter for the DriverAssignments we want to count
     *   }
     * })
    **/
    count<T extends DriverAssignmentCountArgs>(
      args?: Subset<T, DriverAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DriverAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DriverAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DriverAssignmentAggregateArgs>(args: Subset<T, DriverAssignmentAggregateArgs>): Prisma.PrismaPromise<GetDriverAssignmentAggregateType<T>>

    /**
     * Group by DriverAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverAssignmentGroupByArgs} args - Group by arguments.
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
      T extends DriverAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DriverAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: DriverAssignmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DriverAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDriverAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DriverAssignment model
   */
  readonly fields: DriverAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DriverAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DriverAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    driver<T extends DriverDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DriverDefaultArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DriverAssignment model
   */
  interface DriverAssignmentFieldRefs {
    readonly id: FieldRef<"DriverAssignment", 'String'>
    readonly driverId: FieldRef<"DriverAssignment", 'String'>
    readonly vehicleId: FieldRef<"DriverAssignment", 'String'>
    readonly routeId: FieldRef<"DriverAssignment", 'String'>
    readonly assignmentDate: FieldRef<"DriverAssignment", 'DateTime'>
    readonly endDate: FieldRef<"DriverAssignment", 'DateTime'>
    readonly status: FieldRef<"DriverAssignment", 'String'>
    readonly notes: FieldRef<"DriverAssignment", 'String'>
    readonly createdAt: FieldRef<"DriverAssignment", 'DateTime'>
    readonly updatedAt: FieldRef<"DriverAssignment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DriverAssignment findUnique
   */
  export type DriverAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverAssignment
     */
    select?: DriverAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverAssignment
     */
    omit?: DriverAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which DriverAssignment to fetch.
     */
    where: DriverAssignmentWhereUniqueInput
  }

  /**
   * DriverAssignment findUniqueOrThrow
   */
  export type DriverAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverAssignment
     */
    select?: DriverAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverAssignment
     */
    omit?: DriverAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which DriverAssignment to fetch.
     */
    where: DriverAssignmentWhereUniqueInput
  }

  /**
   * DriverAssignment findFirst
   */
  export type DriverAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverAssignment
     */
    select?: DriverAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverAssignment
     */
    omit?: DriverAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which DriverAssignment to fetch.
     */
    where?: DriverAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DriverAssignments to fetch.
     */
    orderBy?: DriverAssignmentOrderByWithRelationInput | DriverAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DriverAssignments.
     */
    cursor?: DriverAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DriverAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DriverAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DriverAssignments.
     */
    distinct?: DriverAssignmentScalarFieldEnum | DriverAssignmentScalarFieldEnum[]
  }

  /**
   * DriverAssignment findFirstOrThrow
   */
  export type DriverAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverAssignment
     */
    select?: DriverAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverAssignment
     */
    omit?: DriverAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which DriverAssignment to fetch.
     */
    where?: DriverAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DriverAssignments to fetch.
     */
    orderBy?: DriverAssignmentOrderByWithRelationInput | DriverAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DriverAssignments.
     */
    cursor?: DriverAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DriverAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DriverAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DriverAssignments.
     */
    distinct?: DriverAssignmentScalarFieldEnum | DriverAssignmentScalarFieldEnum[]
  }

  /**
   * DriverAssignment findMany
   */
  export type DriverAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverAssignment
     */
    select?: DriverAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverAssignment
     */
    omit?: DriverAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which DriverAssignments to fetch.
     */
    where?: DriverAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DriverAssignments to fetch.
     */
    orderBy?: DriverAssignmentOrderByWithRelationInput | DriverAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DriverAssignments.
     */
    cursor?: DriverAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DriverAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DriverAssignments.
     */
    skip?: number
    distinct?: DriverAssignmentScalarFieldEnum | DriverAssignmentScalarFieldEnum[]
  }

  /**
   * DriverAssignment create
   */
  export type DriverAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverAssignment
     */
    select?: DriverAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverAssignment
     */
    omit?: DriverAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a DriverAssignment.
     */
    data: XOR<DriverAssignmentCreateInput, DriverAssignmentUncheckedCreateInput>
  }

  /**
   * DriverAssignment createMany
   */
  export type DriverAssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DriverAssignments.
     */
    data: DriverAssignmentCreateManyInput | DriverAssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DriverAssignment createManyAndReturn
   */
  export type DriverAssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverAssignment
     */
    select?: DriverAssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DriverAssignment
     */
    omit?: DriverAssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many DriverAssignments.
     */
    data: DriverAssignmentCreateManyInput | DriverAssignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverAssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DriverAssignment update
   */
  export type DriverAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverAssignment
     */
    select?: DriverAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverAssignment
     */
    omit?: DriverAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a DriverAssignment.
     */
    data: XOR<DriverAssignmentUpdateInput, DriverAssignmentUncheckedUpdateInput>
    /**
     * Choose, which DriverAssignment to update.
     */
    where: DriverAssignmentWhereUniqueInput
  }

  /**
   * DriverAssignment updateMany
   */
  export type DriverAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DriverAssignments.
     */
    data: XOR<DriverAssignmentUpdateManyMutationInput, DriverAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which DriverAssignments to update
     */
    where?: DriverAssignmentWhereInput
    /**
     * Limit how many DriverAssignments to update.
     */
    limit?: number
  }

  /**
   * DriverAssignment updateManyAndReturn
   */
  export type DriverAssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverAssignment
     */
    select?: DriverAssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DriverAssignment
     */
    omit?: DriverAssignmentOmit<ExtArgs> | null
    /**
     * The data used to update DriverAssignments.
     */
    data: XOR<DriverAssignmentUpdateManyMutationInput, DriverAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which DriverAssignments to update
     */
    where?: DriverAssignmentWhereInput
    /**
     * Limit how many DriverAssignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverAssignmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DriverAssignment upsert
   */
  export type DriverAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverAssignment
     */
    select?: DriverAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverAssignment
     */
    omit?: DriverAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverAssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the DriverAssignment to update in case it exists.
     */
    where: DriverAssignmentWhereUniqueInput
    /**
     * In case the DriverAssignment found by the `where` argument doesn't exist, create a new DriverAssignment with this data.
     */
    create: XOR<DriverAssignmentCreateInput, DriverAssignmentUncheckedCreateInput>
    /**
     * In case the DriverAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DriverAssignmentUpdateInput, DriverAssignmentUncheckedUpdateInput>
  }

  /**
   * DriverAssignment delete
   */
  export type DriverAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverAssignment
     */
    select?: DriverAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverAssignment
     */
    omit?: DriverAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverAssignmentInclude<ExtArgs> | null
    /**
     * Filter which DriverAssignment to delete.
     */
    where: DriverAssignmentWhereUniqueInput
  }

  /**
   * DriverAssignment deleteMany
   */
  export type DriverAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DriverAssignments to delete
     */
    where?: DriverAssignmentWhereInput
    /**
     * Limit how many DriverAssignments to delete.
     */
    limit?: number
  }

  /**
   * DriverAssignment without action
   */
  export type DriverAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverAssignment
     */
    select?: DriverAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DriverAssignment
     */
    omit?: DriverAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverAssignmentInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    clerkId: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    imageUrl: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    lastLogin: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    clerkId: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    imageUrl: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    lastLogin: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    clerkId: number
    email: number
    firstName: number
    lastName: number
    imageUrl: number
    role: number
    isActive: number
    lastLogin: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    firstName?: true
    lastName?: true
    imageUrl?: true
    role?: true
    isActive?: true
    lastLogin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    firstName?: true
    lastName?: true
    imageUrl?: true
    role?: true
    isActive?: true
    lastLogin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    firstName?: true
    lastName?: true
    imageUrl?: true
    role?: true
    isActive?: true
    lastLogin?: true
    createdAt?: true
    updatedAt?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    clerkId: string
    email: string
    firstName: string
    lastName: string
    imageUrl: string | null
    role: $Enums.UserRole
    isActive: boolean
    lastLogin: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    id?: boolean
    clerkId?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    imageUrl?: boolean
    role?: boolean
    isActive?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdDrivers?: boolean | User$createdDriversArgs<ExtArgs>
    updatedDrivers?: boolean | User$updatedDriversArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    imageUrl?: boolean
    role?: boolean
    isActive?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    imageUrl?: boolean
    role?: boolean
    isActive?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    clerkId?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    imageUrl?: boolean
    role?: boolean
    isActive?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkId" | "email" | "firstName" | "lastName" | "imageUrl" | "role" | "isActive" | "lastLogin" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdDrivers?: boolean | User$createdDriversArgs<ExtArgs>
    updatedDrivers?: boolean | User$updatedDriversArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      createdDrivers: Prisma.$DriverPayload<ExtArgs>[]
      updatedDrivers: Prisma.$DriverPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerkId: string
      email: string
      firstName: string
      lastName: string
      imageUrl: string | null
      role: $Enums.UserRole
      isActive: boolean
      lastLogin: Date | null
      createdAt: Date
      updatedAt: Date
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
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
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
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
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
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    createdDrivers<T extends User$createdDriversArgs<ExtArgs> = {}>(args?: Subset<T, User$createdDriversArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    updatedDrivers<T extends User$updatedDriversArgs<ExtArgs> = {}>(args?: Subset<T, User$updatedDriversArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly clerkId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly imageUrl: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly lastLogin: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User.createdDrivers
   */
  export type User$createdDriversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    where?: DriverWhereInput
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    cursor?: DriverWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * User.updatedDrivers
   */
  export type User$updatedDriversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    where?: DriverWhereInput
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    cursor?: DriverWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
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
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DriverScalarFieldEnum: {
    id: 'id',
    driverImage: 'driverImage',
    driverName: 'driverName',
    fatherName: 'fatherName',
    dateOfBirth: 'dateOfBirth',
    age: 'age',
    gender: 'gender',
    placeOfBirth: 'placeOfBirth',
    address: 'address',
    maritalStatus: 'maritalStatus',
    bloodGroup: 'bloodGroup',
    contactNo: 'contactNo',
    emergencyContact: 'emergencyContact',
    emergencyContactName: 'emergencyContactName',
    driverId: 'driverId',
    pkCode: 'pkCode',
    vehicleNo: 'vehicleNo',
    inductionDate: 'inductionDate',
    jobStatus: 'jobStatus',
    education: 'education',
    previousJob: 'previousJob',
    typeOfVehicle: 'typeOfVehicle',
    experienceYear: 'experienceYear',
    experienceMonth: 'experienceMonth',
    currentJob: 'currentJob',
    salary: 'salary',
    cnicNo: 'cnicNo',
    cnicFront: 'cnicFront',
    cnicBack: 'cnicBack',
    cnicIssueDate: 'cnicIssueDate',
    cnicExpiryDate: 'cnicExpiryDate',
    cnicVerified: 'cnicVerified',
    licenseNo: 'licenseNo',
    licenseIssueDate: 'licenseIssueDate',
    licenseExpiryDate: 'licenseExpiryDate',
    licenseStatus: 'licenseStatus',
    typeOfLicense: 'typeOfLicense',
    drivingSince: 'drivingSince',
    licenseOnlineVerification: 'licenseOnlineVerification',
    covid19Vaccination: 'covid19Vaccination',
    firstDoseExpiry: 'firstDoseExpiry',
    secondDoseExpiry: 'secondDoseExpiry',
    boosterDose: 'boosterDose',
    boosterStatus: 'boosterStatus',
    medicalCheck: 'medicalCheck',
    medicalIssueDate: 'medicalIssueDate',
    medicalExpiryDate: 'medicalExpiryDate',
    medicalStatus: 'medicalStatus',
    medicalCertificate: 'medicalCertificate',
    ddcNHMP: 'ddcNHMP',
    ddcNHMPIssueDate: 'ddcNHMPIssueDate',
    ddcNHMPExpiryDate: 'ddcNHMPExpiryDate',
    ddcNHMPStatus: 'ddcNHMPStatus',
    ddcNHMPResult: 'ddcNHMPResult',
    ddcCertificate: 'ddcCertificate',
    randomDrugAlcoholDate: 'randomDrugAlcoholDate',
    randomDrugAlcoholCount: 'randomDrugAlcoholCount',
    randomDrugAlcoholStatus: 'randomDrugAlcoholStatus',
    drugTestCertificate: 'drugTestCertificate',
    policeVF: 'policeVF',
    policeVFCertificate: 'policeVFCertificate',
    tpplPolicy: 'tpplPolicy',
    securityClearance: 'securityClearance',
    languages: 'languages',
    notes: 'notes',
    isActive: 'isActive',
    lastLogin: 'lastLogin',
    passwordHash: 'passwordHash',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdById: 'createdById',
    updatedById: 'updatedById'
  };

  export type DriverScalarFieldEnum = (typeof DriverScalarFieldEnum)[keyof typeof DriverScalarFieldEnum]


  export const DriverWorkExperienceScalarFieldEnum: {
    id: 'id',
    driverId: 'driverId',
    companyName: 'companyName',
    dateFrom: 'dateFrom',
    dateTo: 'dateTo',
    jobTill: 'jobTill',
    responsibility: 'responsibility',
    salary: 'salary',
    reasonForLeaving: 'reasonForLeaving',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DriverWorkExperienceScalarFieldEnum = (typeof DriverWorkExperienceScalarFieldEnum)[keyof typeof DriverWorkExperienceScalarFieldEnum]


  export const DriverReferenceScalarFieldEnum: {
    id: 'id',
    driverId: 'driverId',
    referenceName: 'referenceName',
    referenceAddress: 'referenceAddress',
    referencePhone: 'referencePhone',
    referenceRelation: 'referenceRelation',
    referenceEmail: 'referenceEmail',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DriverReferenceScalarFieldEnum = (typeof DriverReferenceScalarFieldEnum)[keyof typeof DriverReferenceScalarFieldEnum]


  export const DriverDocumentScalarFieldEnum: {
    id: 'id',
    driverId: 'driverId',
    documentType: 'documentType',
    documentName: 'documentName',
    documentUrl: 'documentUrl',
    issueDate: 'issueDate',
    expiryDate: 'expiryDate',
    isVerified: 'isVerified',
    verifiedBy: 'verifiedBy',
    verifiedAt: 'verifiedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DriverDocumentScalarFieldEnum = (typeof DriverDocumentScalarFieldEnum)[keyof typeof DriverDocumentScalarFieldEnum]


  export const DriverViolationScalarFieldEnum: {
    id: 'id',
    driverId: 'driverId',
    violationType: 'violationType',
    violationDate: 'violationDate',
    location: 'location',
    description: 'description',
    fineAmount: 'fineAmount',
    isPaid: 'isPaid',
    points: 'points',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DriverViolationScalarFieldEnum = (typeof DriverViolationScalarFieldEnum)[keyof typeof DriverViolationScalarFieldEnum]


  export const DriverAssignmentScalarFieldEnum: {
    id: 'id',
    driverId: 'driverId',
    vehicleId: 'vehicleId',
    routeId: 'routeId',
    assignmentDate: 'assignmentDate',
    endDate: 'endDate',
    status: 'status',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DriverAssignmentScalarFieldEnum = (typeof DriverAssignmentScalarFieldEnum)[keyof typeof DriverAssignmentScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    clerkId: 'clerkId',
    email: 'email',
    firstName: 'firstName',
    lastName: 'lastName',
    imageUrl: 'imageUrl',
    role: 'role',
    isActive: 'isActive',
    lastLogin: 'lastLogin',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'MaritalStatus'
   */
  export type EnumMaritalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaritalStatus'>
    


  /**
   * Reference to a field of type 'MaritalStatus[]'
   */
  export type ListEnumMaritalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaritalStatus[]'>
    


  /**
   * Reference to a field of type 'BloodGroup'
   */
  export type EnumBloodGroupFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BloodGroup'>
    


  /**
   * Reference to a field of type 'BloodGroup[]'
   */
  export type ListEnumBloodGroupFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BloodGroup[]'>
    


  /**
   * Reference to a field of type 'JobStatus'
   */
  export type EnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobStatus'>
    


  /**
   * Reference to a field of type 'JobStatus[]'
   */
  export type ListEnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobStatus[]'>
    


  /**
   * Reference to a field of type 'EducationLevel'
   */
  export type EnumEducationLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EducationLevel'>
    


  /**
   * Reference to a field of type 'EducationLevel[]'
   */
  export type ListEnumEducationLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EducationLevel[]'>
    


  /**
   * Reference to a field of type 'PreviousJob'
   */
  export type EnumPreviousJobFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PreviousJob'>
    


  /**
   * Reference to a field of type 'PreviousJob[]'
   */
  export type ListEnumPreviousJobFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PreviousJob[]'>
    


  /**
   * Reference to a field of type 'VehicleType'
   */
  export type EnumVehicleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleType'>
    


  /**
   * Reference to a field of type 'VehicleType[]'
   */
  export type ListEnumVehicleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'YesNo'
   */
  export type EnumYesNoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'YesNo'>
    


  /**
   * Reference to a field of type 'YesNo[]'
   */
  export type ListEnumYesNoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'YesNo[]'>
    


  /**
   * Reference to a field of type 'LicenseType'
   */
  export type EnumLicenseTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LicenseType'>
    


  /**
   * Reference to a field of type 'LicenseType[]'
   */
  export type ListEnumLicenseTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LicenseType[]'>
    


  /**
   * Reference to a field of type 'CovidVaccinationStatus'
   */
  export type EnumCovidVaccinationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CovidVaccinationStatus'>
    


  /**
   * Reference to a field of type 'CovidVaccinationStatus[]'
   */
  export type ListEnumCovidVaccinationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CovidVaccinationStatus[]'>
    


  /**
   * Reference to a field of type 'BoosterStatus'
   */
  export type EnumBoosterStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BoosterStatus'>
    


  /**
   * Reference to a field of type 'BoosterStatus[]'
   */
  export type ListEnumBoosterStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BoosterStatus[]'>
    


  /**
   * Reference to a field of type 'MedicalStatus'
   */
  export type EnumMedicalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MedicalStatus'>
    


  /**
   * Reference to a field of type 'MedicalStatus[]'
   */
  export type ListEnumMedicalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MedicalStatus[]'>
    


  /**
   * Reference to a field of type 'DDCStatus'
   */
  export type EnumDDCStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DDCStatus'>
    


  /**
   * Reference to a field of type 'DDCStatus[]'
   */
  export type ListEnumDDCStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DDCStatus[]'>
    


  /**
   * Reference to a field of type 'DDCResult'
   */
  export type EnumDDCResultFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DDCResult'>
    


  /**
   * Reference to a field of type 'DDCResult[]'
   */
  export type ListEnumDDCResultFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DDCResult[]'>
    


  /**
   * Reference to a field of type 'DrugAlcoholStatus'
   */
  export type EnumDrugAlcoholStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DrugAlcoholStatus'>
    


  /**
   * Reference to a field of type 'DrugAlcoholStatus[]'
   */
  export type ListEnumDrugAlcoholStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DrugAlcoholStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    
  /**
   * Deep Input Types
   */


  export type DriverWhereInput = {
    AND?: DriverWhereInput | DriverWhereInput[]
    OR?: DriverWhereInput[]
    NOT?: DriverWhereInput | DriverWhereInput[]
    id?: StringFilter<"Driver"> | string
    driverImage?: StringNullableFilter<"Driver"> | string | null
    driverName?: StringFilter<"Driver"> | string
    fatherName?: StringFilter<"Driver"> | string
    dateOfBirth?: DateTimeFilter<"Driver"> | Date | string
    age?: IntFilter<"Driver"> | number
    gender?: EnumGenderFilter<"Driver"> | $Enums.Gender
    placeOfBirth?: StringFilter<"Driver"> | string
    address?: StringFilter<"Driver"> | string
    maritalStatus?: EnumMaritalStatusFilter<"Driver"> | $Enums.MaritalStatus
    bloodGroup?: EnumBloodGroupFilter<"Driver"> | $Enums.BloodGroup
    contactNo?: StringFilter<"Driver"> | string
    emergencyContact?: StringNullableFilter<"Driver"> | string | null
    emergencyContactName?: StringNullableFilter<"Driver"> | string | null
    driverId?: IntFilter<"Driver"> | number
    pkCode?: StringFilter<"Driver"> | string
    vehicleNo?: StringFilter<"Driver"> | string
    inductionDate?: DateTimeFilter<"Driver"> | Date | string
    jobStatus?: EnumJobStatusFilter<"Driver"> | $Enums.JobStatus
    education?: EnumEducationLevelFilter<"Driver"> | $Enums.EducationLevel
    previousJob?: EnumPreviousJobFilter<"Driver"> | $Enums.PreviousJob
    typeOfVehicle?: EnumVehicleTypeFilter<"Driver"> | $Enums.VehicleType
    experienceYear?: IntNullableFilter<"Driver"> | number | null
    experienceMonth?: IntNullableFilter<"Driver"> | number | null
    currentJob?: StringFilter<"Driver"> | string
    salary?: FloatNullableFilter<"Driver"> | number | null
    cnicNo?: StringFilter<"Driver"> | string
    cnicFront?: StringFilter<"Driver"> | string
    cnicBack?: StringFilter<"Driver"> | string
    cnicIssueDate?: DateTimeFilter<"Driver"> | Date | string
    cnicExpiryDate?: DateTimeFilter<"Driver"> | Date | string
    cnicVerified?: EnumYesNoFilter<"Driver"> | $Enums.YesNo
    licenseNo?: StringFilter<"Driver"> | string
    licenseIssueDate?: DateTimeFilter<"Driver"> | Date | string
    licenseExpiryDate?: DateTimeFilter<"Driver"> | Date | string
    licenseStatus?: StringFilter<"Driver"> | string
    typeOfLicense?: EnumLicenseTypeFilter<"Driver"> | $Enums.LicenseType
    drivingSince?: IntFilter<"Driver"> | number
    licenseOnlineVerification?: EnumYesNoFilter<"Driver"> | $Enums.YesNo
    covid19Vaccination?: EnumCovidVaccinationStatusFilter<"Driver"> | $Enums.CovidVaccinationStatus
    firstDoseExpiry?: DateTimeNullableFilter<"Driver"> | Date | string | null
    secondDoseExpiry?: DateTimeNullableFilter<"Driver"> | Date | string | null
    boosterDose?: DateTimeNullableFilter<"Driver"> | Date | string | null
    boosterStatus?: EnumBoosterStatusNullableFilter<"Driver"> | $Enums.BoosterStatus | null
    medicalCheck?: EnumYesNoFilter<"Driver"> | $Enums.YesNo
    medicalIssueDate?: DateTimeNullableFilter<"Driver"> | Date | string | null
    medicalExpiryDate?: DateTimeNullableFilter<"Driver"> | Date | string | null
    medicalStatus?: EnumMedicalStatusNullableFilter<"Driver"> | $Enums.MedicalStatus | null
    medicalCertificate?: StringNullableFilter<"Driver"> | string | null
    ddcNHMP?: EnumYesNoFilter<"Driver"> | $Enums.YesNo
    ddcNHMPIssueDate?: DateTimeNullableFilter<"Driver"> | Date | string | null
    ddcNHMPExpiryDate?: DateTimeNullableFilter<"Driver"> | Date | string | null
    ddcNHMPStatus?: EnumDDCStatusNullableFilter<"Driver"> | $Enums.DDCStatus | null
    ddcNHMPResult?: EnumDDCResultNullableFilter<"Driver"> | $Enums.DDCResult | null
    ddcCertificate?: StringNullableFilter<"Driver"> | string | null
    randomDrugAlcoholDate?: DateTimeNullableFilter<"Driver"> | Date | string | null
    randomDrugAlcoholCount?: IntNullableFilter<"Driver"> | number | null
    randomDrugAlcoholStatus?: EnumDrugAlcoholStatusNullableFilter<"Driver"> | $Enums.DrugAlcoholStatus | null
    drugTestCertificate?: StringNullableFilter<"Driver"> | string | null
    policeVF?: EnumYesNoFilter<"Driver"> | $Enums.YesNo
    policeVFCertificate?: StringNullableFilter<"Driver"> | string | null
    tpplPolicy?: EnumYesNoFilter<"Driver"> | $Enums.YesNo
    securityClearance?: EnumYesNoFilter<"Driver"> | $Enums.YesNo
    languages?: JsonFilter<"Driver">
    notes?: StringNullableFilter<"Driver"> | string | null
    isActive?: BoolFilter<"Driver"> | boolean
    lastLogin?: DateTimeNullableFilter<"Driver"> | Date | string | null
    passwordHash?: StringNullableFilter<"Driver"> | string | null
    email?: StringNullableFilter<"Driver"> | string | null
    createdAt?: DateTimeFilter<"Driver"> | Date | string
    updatedAt?: DateTimeFilter<"Driver"> | Date | string
    createdById?: StringNullableFilter<"Driver"> | string | null
    updatedById?: StringNullableFilter<"Driver"> | string | null
    workExperiences?: DriverWorkExperienceListRelationFilter
    references?: DriverReferenceListRelationFilter
    documents?: DriverDocumentListRelationFilter
    violations?: DriverViolationListRelationFilter
    assignments?: DriverAssignmentListRelationFilter
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    updatedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type DriverOrderByWithRelationInput = {
    id?: SortOrder
    driverImage?: SortOrderInput | SortOrder
    driverName?: SortOrder
    fatherName?: SortOrder
    dateOfBirth?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    placeOfBirth?: SortOrder
    address?: SortOrder
    maritalStatus?: SortOrder
    bloodGroup?: SortOrder
    contactNo?: SortOrder
    emergencyContact?: SortOrderInput | SortOrder
    emergencyContactName?: SortOrderInput | SortOrder
    driverId?: SortOrder
    pkCode?: SortOrder
    vehicleNo?: SortOrder
    inductionDate?: SortOrder
    jobStatus?: SortOrder
    education?: SortOrder
    previousJob?: SortOrder
    typeOfVehicle?: SortOrder
    experienceYear?: SortOrderInput | SortOrder
    experienceMonth?: SortOrderInput | SortOrder
    currentJob?: SortOrder
    salary?: SortOrderInput | SortOrder
    cnicNo?: SortOrder
    cnicFront?: SortOrder
    cnicBack?: SortOrder
    cnicIssueDate?: SortOrder
    cnicExpiryDate?: SortOrder
    cnicVerified?: SortOrder
    licenseNo?: SortOrder
    licenseIssueDate?: SortOrder
    licenseExpiryDate?: SortOrder
    licenseStatus?: SortOrder
    typeOfLicense?: SortOrder
    drivingSince?: SortOrder
    licenseOnlineVerification?: SortOrder
    covid19Vaccination?: SortOrder
    firstDoseExpiry?: SortOrderInput | SortOrder
    secondDoseExpiry?: SortOrderInput | SortOrder
    boosterDose?: SortOrderInput | SortOrder
    boosterStatus?: SortOrderInput | SortOrder
    medicalCheck?: SortOrder
    medicalIssueDate?: SortOrderInput | SortOrder
    medicalExpiryDate?: SortOrderInput | SortOrder
    medicalStatus?: SortOrderInput | SortOrder
    medicalCertificate?: SortOrderInput | SortOrder
    ddcNHMP?: SortOrder
    ddcNHMPIssueDate?: SortOrderInput | SortOrder
    ddcNHMPExpiryDate?: SortOrderInput | SortOrder
    ddcNHMPStatus?: SortOrderInput | SortOrder
    ddcNHMPResult?: SortOrderInput | SortOrder
    ddcCertificate?: SortOrderInput | SortOrder
    randomDrugAlcoholDate?: SortOrderInput | SortOrder
    randomDrugAlcoholCount?: SortOrderInput | SortOrder
    randomDrugAlcoholStatus?: SortOrderInput | SortOrder
    drugTestCertificate?: SortOrderInput | SortOrder
    policeVF?: SortOrder
    policeVFCertificate?: SortOrderInput | SortOrder
    tpplPolicy?: SortOrder
    securityClearance?: SortOrder
    languages?: SortOrder
    notes?: SortOrderInput | SortOrder
    isActive?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrderInput | SortOrder
    updatedById?: SortOrderInput | SortOrder
    workExperiences?: DriverWorkExperienceOrderByRelationAggregateInput
    references?: DriverReferenceOrderByRelationAggregateInput
    documents?: DriverDocumentOrderByRelationAggregateInput
    violations?: DriverViolationOrderByRelationAggregateInput
    assignments?: DriverAssignmentOrderByRelationAggregateInput
    createdBy?: UserOrderByWithRelationInput
    updatedBy?: UserOrderByWithRelationInput
  }

  export type DriverWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    driverId?: number
    cnicNo?: string
    licenseNo?: string
    email?: string
    AND?: DriverWhereInput | DriverWhereInput[]
    OR?: DriverWhereInput[]
    NOT?: DriverWhereInput | DriverWhereInput[]
    driverImage?: StringNullableFilter<"Driver"> | string | null
    driverName?: StringFilter<"Driver"> | string
    fatherName?: StringFilter<"Driver"> | string
    dateOfBirth?: DateTimeFilter<"Driver"> | Date | string
    age?: IntFilter<"Driver"> | number
    gender?: EnumGenderFilter<"Driver"> | $Enums.Gender
    placeOfBirth?: StringFilter<"Driver"> | string
    address?: StringFilter<"Driver"> | string
    maritalStatus?: EnumMaritalStatusFilter<"Driver"> | $Enums.MaritalStatus
    bloodGroup?: EnumBloodGroupFilter<"Driver"> | $Enums.BloodGroup
    contactNo?: StringFilter<"Driver"> | string
    emergencyContact?: StringNullableFilter<"Driver"> | string | null
    emergencyContactName?: StringNullableFilter<"Driver"> | string | null
    pkCode?: StringFilter<"Driver"> | string
    vehicleNo?: StringFilter<"Driver"> | string
    inductionDate?: DateTimeFilter<"Driver"> | Date | string
    jobStatus?: EnumJobStatusFilter<"Driver"> | $Enums.JobStatus
    education?: EnumEducationLevelFilter<"Driver"> | $Enums.EducationLevel
    previousJob?: EnumPreviousJobFilter<"Driver"> | $Enums.PreviousJob
    typeOfVehicle?: EnumVehicleTypeFilter<"Driver"> | $Enums.VehicleType
    experienceYear?: IntNullableFilter<"Driver"> | number | null
    experienceMonth?: IntNullableFilter<"Driver"> | number | null
    currentJob?: StringFilter<"Driver"> | string
    salary?: FloatNullableFilter<"Driver"> | number | null
    cnicFront?: StringFilter<"Driver"> | string
    cnicBack?: StringFilter<"Driver"> | string
    cnicIssueDate?: DateTimeFilter<"Driver"> | Date | string
    cnicExpiryDate?: DateTimeFilter<"Driver"> | Date | string
    cnicVerified?: EnumYesNoFilter<"Driver"> | $Enums.YesNo
    licenseIssueDate?: DateTimeFilter<"Driver"> | Date | string
    licenseExpiryDate?: DateTimeFilter<"Driver"> | Date | string
    licenseStatus?: StringFilter<"Driver"> | string
    typeOfLicense?: EnumLicenseTypeFilter<"Driver"> | $Enums.LicenseType
    drivingSince?: IntFilter<"Driver"> | number
    licenseOnlineVerification?: EnumYesNoFilter<"Driver"> | $Enums.YesNo
    covid19Vaccination?: EnumCovidVaccinationStatusFilter<"Driver"> | $Enums.CovidVaccinationStatus
    firstDoseExpiry?: DateTimeNullableFilter<"Driver"> | Date | string | null
    secondDoseExpiry?: DateTimeNullableFilter<"Driver"> | Date | string | null
    boosterDose?: DateTimeNullableFilter<"Driver"> | Date | string | null
    boosterStatus?: EnumBoosterStatusNullableFilter<"Driver"> | $Enums.BoosterStatus | null
    medicalCheck?: EnumYesNoFilter<"Driver"> | $Enums.YesNo
    medicalIssueDate?: DateTimeNullableFilter<"Driver"> | Date | string | null
    medicalExpiryDate?: DateTimeNullableFilter<"Driver"> | Date | string | null
    medicalStatus?: EnumMedicalStatusNullableFilter<"Driver"> | $Enums.MedicalStatus | null
    medicalCertificate?: StringNullableFilter<"Driver"> | string | null
    ddcNHMP?: EnumYesNoFilter<"Driver"> | $Enums.YesNo
    ddcNHMPIssueDate?: DateTimeNullableFilter<"Driver"> | Date | string | null
    ddcNHMPExpiryDate?: DateTimeNullableFilter<"Driver"> | Date | string | null
    ddcNHMPStatus?: EnumDDCStatusNullableFilter<"Driver"> | $Enums.DDCStatus | null
    ddcNHMPResult?: EnumDDCResultNullableFilter<"Driver"> | $Enums.DDCResult | null
    ddcCertificate?: StringNullableFilter<"Driver"> | string | null
    randomDrugAlcoholDate?: DateTimeNullableFilter<"Driver"> | Date | string | null
    randomDrugAlcoholCount?: IntNullableFilter<"Driver"> | number | null
    randomDrugAlcoholStatus?: EnumDrugAlcoholStatusNullableFilter<"Driver"> | $Enums.DrugAlcoholStatus | null
    drugTestCertificate?: StringNullableFilter<"Driver"> | string | null
    policeVF?: EnumYesNoFilter<"Driver"> | $Enums.YesNo
    policeVFCertificate?: StringNullableFilter<"Driver"> | string | null
    tpplPolicy?: EnumYesNoFilter<"Driver"> | $Enums.YesNo
    securityClearance?: EnumYesNoFilter<"Driver"> | $Enums.YesNo
    languages?: JsonFilter<"Driver">
    notes?: StringNullableFilter<"Driver"> | string | null
    isActive?: BoolFilter<"Driver"> | boolean
    lastLogin?: DateTimeNullableFilter<"Driver"> | Date | string | null
    passwordHash?: StringNullableFilter<"Driver"> | string | null
    createdAt?: DateTimeFilter<"Driver"> | Date | string
    updatedAt?: DateTimeFilter<"Driver"> | Date | string
    createdById?: StringNullableFilter<"Driver"> | string | null
    updatedById?: StringNullableFilter<"Driver"> | string | null
    workExperiences?: DriverWorkExperienceListRelationFilter
    references?: DriverReferenceListRelationFilter
    documents?: DriverDocumentListRelationFilter
    violations?: DriverViolationListRelationFilter
    assignments?: DriverAssignmentListRelationFilter
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    updatedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "driverId" | "cnicNo" | "licenseNo" | "email">

  export type DriverOrderByWithAggregationInput = {
    id?: SortOrder
    driverImage?: SortOrderInput | SortOrder
    driverName?: SortOrder
    fatherName?: SortOrder
    dateOfBirth?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    placeOfBirth?: SortOrder
    address?: SortOrder
    maritalStatus?: SortOrder
    bloodGroup?: SortOrder
    contactNo?: SortOrder
    emergencyContact?: SortOrderInput | SortOrder
    emergencyContactName?: SortOrderInput | SortOrder
    driverId?: SortOrder
    pkCode?: SortOrder
    vehicleNo?: SortOrder
    inductionDate?: SortOrder
    jobStatus?: SortOrder
    education?: SortOrder
    previousJob?: SortOrder
    typeOfVehicle?: SortOrder
    experienceYear?: SortOrderInput | SortOrder
    experienceMonth?: SortOrderInput | SortOrder
    currentJob?: SortOrder
    salary?: SortOrderInput | SortOrder
    cnicNo?: SortOrder
    cnicFront?: SortOrder
    cnicBack?: SortOrder
    cnicIssueDate?: SortOrder
    cnicExpiryDate?: SortOrder
    cnicVerified?: SortOrder
    licenseNo?: SortOrder
    licenseIssueDate?: SortOrder
    licenseExpiryDate?: SortOrder
    licenseStatus?: SortOrder
    typeOfLicense?: SortOrder
    drivingSince?: SortOrder
    licenseOnlineVerification?: SortOrder
    covid19Vaccination?: SortOrder
    firstDoseExpiry?: SortOrderInput | SortOrder
    secondDoseExpiry?: SortOrderInput | SortOrder
    boosterDose?: SortOrderInput | SortOrder
    boosterStatus?: SortOrderInput | SortOrder
    medicalCheck?: SortOrder
    medicalIssueDate?: SortOrderInput | SortOrder
    medicalExpiryDate?: SortOrderInput | SortOrder
    medicalStatus?: SortOrderInput | SortOrder
    medicalCertificate?: SortOrderInput | SortOrder
    ddcNHMP?: SortOrder
    ddcNHMPIssueDate?: SortOrderInput | SortOrder
    ddcNHMPExpiryDate?: SortOrderInput | SortOrder
    ddcNHMPStatus?: SortOrderInput | SortOrder
    ddcNHMPResult?: SortOrderInput | SortOrder
    ddcCertificate?: SortOrderInput | SortOrder
    randomDrugAlcoholDate?: SortOrderInput | SortOrder
    randomDrugAlcoholCount?: SortOrderInput | SortOrder
    randomDrugAlcoholStatus?: SortOrderInput | SortOrder
    drugTestCertificate?: SortOrderInput | SortOrder
    policeVF?: SortOrder
    policeVFCertificate?: SortOrderInput | SortOrder
    tpplPolicy?: SortOrder
    securityClearance?: SortOrder
    languages?: SortOrder
    notes?: SortOrderInput | SortOrder
    isActive?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrderInput | SortOrder
    updatedById?: SortOrderInput | SortOrder
    _count?: DriverCountOrderByAggregateInput
    _avg?: DriverAvgOrderByAggregateInput
    _max?: DriverMaxOrderByAggregateInput
    _min?: DriverMinOrderByAggregateInput
    _sum?: DriverSumOrderByAggregateInput
  }

  export type DriverScalarWhereWithAggregatesInput = {
    AND?: DriverScalarWhereWithAggregatesInput | DriverScalarWhereWithAggregatesInput[]
    OR?: DriverScalarWhereWithAggregatesInput[]
    NOT?: DriverScalarWhereWithAggregatesInput | DriverScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Driver"> | string
    driverImage?: StringNullableWithAggregatesFilter<"Driver"> | string | null
    driverName?: StringWithAggregatesFilter<"Driver"> | string
    fatherName?: StringWithAggregatesFilter<"Driver"> | string
    dateOfBirth?: DateTimeWithAggregatesFilter<"Driver"> | Date | string
    age?: IntWithAggregatesFilter<"Driver"> | number
    gender?: EnumGenderWithAggregatesFilter<"Driver"> | $Enums.Gender
    placeOfBirth?: StringWithAggregatesFilter<"Driver"> | string
    address?: StringWithAggregatesFilter<"Driver"> | string
    maritalStatus?: EnumMaritalStatusWithAggregatesFilter<"Driver"> | $Enums.MaritalStatus
    bloodGroup?: EnumBloodGroupWithAggregatesFilter<"Driver"> | $Enums.BloodGroup
    contactNo?: StringWithAggregatesFilter<"Driver"> | string
    emergencyContact?: StringNullableWithAggregatesFilter<"Driver"> | string | null
    emergencyContactName?: StringNullableWithAggregatesFilter<"Driver"> | string | null
    driverId?: IntWithAggregatesFilter<"Driver"> | number
    pkCode?: StringWithAggregatesFilter<"Driver"> | string
    vehicleNo?: StringWithAggregatesFilter<"Driver"> | string
    inductionDate?: DateTimeWithAggregatesFilter<"Driver"> | Date | string
    jobStatus?: EnumJobStatusWithAggregatesFilter<"Driver"> | $Enums.JobStatus
    education?: EnumEducationLevelWithAggregatesFilter<"Driver"> | $Enums.EducationLevel
    previousJob?: EnumPreviousJobWithAggregatesFilter<"Driver"> | $Enums.PreviousJob
    typeOfVehicle?: EnumVehicleTypeWithAggregatesFilter<"Driver"> | $Enums.VehicleType
    experienceYear?: IntNullableWithAggregatesFilter<"Driver"> | number | null
    experienceMonth?: IntNullableWithAggregatesFilter<"Driver"> | number | null
    currentJob?: StringWithAggregatesFilter<"Driver"> | string
    salary?: FloatNullableWithAggregatesFilter<"Driver"> | number | null
    cnicNo?: StringWithAggregatesFilter<"Driver"> | string
    cnicFront?: StringWithAggregatesFilter<"Driver"> | string
    cnicBack?: StringWithAggregatesFilter<"Driver"> | string
    cnicIssueDate?: DateTimeWithAggregatesFilter<"Driver"> | Date | string
    cnicExpiryDate?: DateTimeWithAggregatesFilter<"Driver"> | Date | string
    cnicVerified?: EnumYesNoWithAggregatesFilter<"Driver"> | $Enums.YesNo
    licenseNo?: StringWithAggregatesFilter<"Driver"> | string
    licenseIssueDate?: DateTimeWithAggregatesFilter<"Driver"> | Date | string
    licenseExpiryDate?: DateTimeWithAggregatesFilter<"Driver"> | Date | string
    licenseStatus?: StringWithAggregatesFilter<"Driver"> | string
    typeOfLicense?: EnumLicenseTypeWithAggregatesFilter<"Driver"> | $Enums.LicenseType
    drivingSince?: IntWithAggregatesFilter<"Driver"> | number
    licenseOnlineVerification?: EnumYesNoWithAggregatesFilter<"Driver"> | $Enums.YesNo
    covid19Vaccination?: EnumCovidVaccinationStatusWithAggregatesFilter<"Driver"> | $Enums.CovidVaccinationStatus
    firstDoseExpiry?: DateTimeNullableWithAggregatesFilter<"Driver"> | Date | string | null
    secondDoseExpiry?: DateTimeNullableWithAggregatesFilter<"Driver"> | Date | string | null
    boosterDose?: DateTimeNullableWithAggregatesFilter<"Driver"> | Date | string | null
    boosterStatus?: EnumBoosterStatusNullableWithAggregatesFilter<"Driver"> | $Enums.BoosterStatus | null
    medicalCheck?: EnumYesNoWithAggregatesFilter<"Driver"> | $Enums.YesNo
    medicalIssueDate?: DateTimeNullableWithAggregatesFilter<"Driver"> | Date | string | null
    medicalExpiryDate?: DateTimeNullableWithAggregatesFilter<"Driver"> | Date | string | null
    medicalStatus?: EnumMedicalStatusNullableWithAggregatesFilter<"Driver"> | $Enums.MedicalStatus | null
    medicalCertificate?: StringNullableWithAggregatesFilter<"Driver"> | string | null
    ddcNHMP?: EnumYesNoWithAggregatesFilter<"Driver"> | $Enums.YesNo
    ddcNHMPIssueDate?: DateTimeNullableWithAggregatesFilter<"Driver"> | Date | string | null
    ddcNHMPExpiryDate?: DateTimeNullableWithAggregatesFilter<"Driver"> | Date | string | null
    ddcNHMPStatus?: EnumDDCStatusNullableWithAggregatesFilter<"Driver"> | $Enums.DDCStatus | null
    ddcNHMPResult?: EnumDDCResultNullableWithAggregatesFilter<"Driver"> | $Enums.DDCResult | null
    ddcCertificate?: StringNullableWithAggregatesFilter<"Driver"> | string | null
    randomDrugAlcoholDate?: DateTimeNullableWithAggregatesFilter<"Driver"> | Date | string | null
    randomDrugAlcoholCount?: IntNullableWithAggregatesFilter<"Driver"> | number | null
    randomDrugAlcoholStatus?: EnumDrugAlcoholStatusNullableWithAggregatesFilter<"Driver"> | $Enums.DrugAlcoholStatus | null
    drugTestCertificate?: StringNullableWithAggregatesFilter<"Driver"> | string | null
    policeVF?: EnumYesNoWithAggregatesFilter<"Driver"> | $Enums.YesNo
    policeVFCertificate?: StringNullableWithAggregatesFilter<"Driver"> | string | null
    tpplPolicy?: EnumYesNoWithAggregatesFilter<"Driver"> | $Enums.YesNo
    securityClearance?: EnumYesNoWithAggregatesFilter<"Driver"> | $Enums.YesNo
    languages?: JsonWithAggregatesFilter<"Driver">
    notes?: StringNullableWithAggregatesFilter<"Driver"> | string | null
    isActive?: BoolWithAggregatesFilter<"Driver"> | boolean
    lastLogin?: DateTimeNullableWithAggregatesFilter<"Driver"> | Date | string | null
    passwordHash?: StringNullableWithAggregatesFilter<"Driver"> | string | null
    email?: StringNullableWithAggregatesFilter<"Driver"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Driver"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Driver"> | Date | string
    createdById?: StringNullableWithAggregatesFilter<"Driver"> | string | null
    updatedById?: StringNullableWithAggregatesFilter<"Driver"> | string | null
  }

  export type DriverWorkExperienceWhereInput = {
    AND?: DriverWorkExperienceWhereInput | DriverWorkExperienceWhereInput[]
    OR?: DriverWorkExperienceWhereInput[]
    NOT?: DriverWorkExperienceWhereInput | DriverWorkExperienceWhereInput[]
    id?: StringFilter<"DriverWorkExperience"> | string
    driverId?: StringFilter<"DriverWorkExperience"> | string
    companyName?: StringFilter<"DriverWorkExperience"> | string
    dateFrom?: DateTimeFilter<"DriverWorkExperience"> | Date | string
    dateTo?: DateTimeNullableFilter<"DriverWorkExperience"> | Date | string | null
    jobTill?: StringFilter<"DriverWorkExperience"> | string
    responsibility?: StringFilter<"DriverWorkExperience"> | string
    salary?: FloatNullableFilter<"DriverWorkExperience"> | number | null
    reasonForLeaving?: StringNullableFilter<"DriverWorkExperience"> | string | null
    createdAt?: DateTimeFilter<"DriverWorkExperience"> | Date | string
    updatedAt?: DateTimeFilter<"DriverWorkExperience"> | Date | string
    driver?: XOR<DriverScalarRelationFilter, DriverWhereInput>
  }

  export type DriverWorkExperienceOrderByWithRelationInput = {
    id?: SortOrder
    driverId?: SortOrder
    companyName?: SortOrder
    dateFrom?: SortOrder
    dateTo?: SortOrderInput | SortOrder
    jobTill?: SortOrder
    responsibility?: SortOrder
    salary?: SortOrderInput | SortOrder
    reasonForLeaving?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    driver?: DriverOrderByWithRelationInput
  }

  export type DriverWorkExperienceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DriverWorkExperienceWhereInput | DriverWorkExperienceWhereInput[]
    OR?: DriverWorkExperienceWhereInput[]
    NOT?: DriverWorkExperienceWhereInput | DriverWorkExperienceWhereInput[]
    driverId?: StringFilter<"DriverWorkExperience"> | string
    companyName?: StringFilter<"DriverWorkExperience"> | string
    dateFrom?: DateTimeFilter<"DriverWorkExperience"> | Date | string
    dateTo?: DateTimeNullableFilter<"DriverWorkExperience"> | Date | string | null
    jobTill?: StringFilter<"DriverWorkExperience"> | string
    responsibility?: StringFilter<"DriverWorkExperience"> | string
    salary?: FloatNullableFilter<"DriverWorkExperience"> | number | null
    reasonForLeaving?: StringNullableFilter<"DriverWorkExperience"> | string | null
    createdAt?: DateTimeFilter<"DriverWorkExperience"> | Date | string
    updatedAt?: DateTimeFilter<"DriverWorkExperience"> | Date | string
    driver?: XOR<DriverScalarRelationFilter, DriverWhereInput>
  }, "id">

  export type DriverWorkExperienceOrderByWithAggregationInput = {
    id?: SortOrder
    driverId?: SortOrder
    companyName?: SortOrder
    dateFrom?: SortOrder
    dateTo?: SortOrderInput | SortOrder
    jobTill?: SortOrder
    responsibility?: SortOrder
    salary?: SortOrderInput | SortOrder
    reasonForLeaving?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DriverWorkExperienceCountOrderByAggregateInput
    _avg?: DriverWorkExperienceAvgOrderByAggregateInput
    _max?: DriverWorkExperienceMaxOrderByAggregateInput
    _min?: DriverWorkExperienceMinOrderByAggregateInput
    _sum?: DriverWorkExperienceSumOrderByAggregateInput
  }

  export type DriverWorkExperienceScalarWhereWithAggregatesInput = {
    AND?: DriverWorkExperienceScalarWhereWithAggregatesInput | DriverWorkExperienceScalarWhereWithAggregatesInput[]
    OR?: DriverWorkExperienceScalarWhereWithAggregatesInput[]
    NOT?: DriverWorkExperienceScalarWhereWithAggregatesInput | DriverWorkExperienceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DriverWorkExperience"> | string
    driverId?: StringWithAggregatesFilter<"DriverWorkExperience"> | string
    companyName?: StringWithAggregatesFilter<"DriverWorkExperience"> | string
    dateFrom?: DateTimeWithAggregatesFilter<"DriverWorkExperience"> | Date | string
    dateTo?: DateTimeNullableWithAggregatesFilter<"DriverWorkExperience"> | Date | string | null
    jobTill?: StringWithAggregatesFilter<"DriverWorkExperience"> | string
    responsibility?: StringWithAggregatesFilter<"DriverWorkExperience"> | string
    salary?: FloatNullableWithAggregatesFilter<"DriverWorkExperience"> | number | null
    reasonForLeaving?: StringNullableWithAggregatesFilter<"DriverWorkExperience"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"DriverWorkExperience"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DriverWorkExperience"> | Date | string
  }

  export type DriverReferenceWhereInput = {
    AND?: DriverReferenceWhereInput | DriverReferenceWhereInput[]
    OR?: DriverReferenceWhereInput[]
    NOT?: DriverReferenceWhereInput | DriverReferenceWhereInput[]
    id?: StringFilter<"DriverReference"> | string
    driverId?: StringFilter<"DriverReference"> | string
    referenceName?: StringFilter<"DriverReference"> | string
    referenceAddress?: StringFilter<"DriverReference"> | string
    referencePhone?: StringFilter<"DriverReference"> | string
    referenceRelation?: StringFilter<"DriverReference"> | string
    referenceEmail?: StringNullableFilter<"DriverReference"> | string | null
    createdAt?: DateTimeFilter<"DriverReference"> | Date | string
    updatedAt?: DateTimeFilter<"DriverReference"> | Date | string
    driver?: XOR<DriverScalarRelationFilter, DriverWhereInput>
  }

  export type DriverReferenceOrderByWithRelationInput = {
    id?: SortOrder
    driverId?: SortOrder
    referenceName?: SortOrder
    referenceAddress?: SortOrder
    referencePhone?: SortOrder
    referenceRelation?: SortOrder
    referenceEmail?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    driver?: DriverOrderByWithRelationInput
  }

  export type DriverReferenceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DriverReferenceWhereInput | DriverReferenceWhereInput[]
    OR?: DriverReferenceWhereInput[]
    NOT?: DriverReferenceWhereInput | DriverReferenceWhereInput[]
    driverId?: StringFilter<"DriverReference"> | string
    referenceName?: StringFilter<"DriverReference"> | string
    referenceAddress?: StringFilter<"DriverReference"> | string
    referencePhone?: StringFilter<"DriverReference"> | string
    referenceRelation?: StringFilter<"DriverReference"> | string
    referenceEmail?: StringNullableFilter<"DriverReference"> | string | null
    createdAt?: DateTimeFilter<"DriverReference"> | Date | string
    updatedAt?: DateTimeFilter<"DriverReference"> | Date | string
    driver?: XOR<DriverScalarRelationFilter, DriverWhereInput>
  }, "id">

  export type DriverReferenceOrderByWithAggregationInput = {
    id?: SortOrder
    driverId?: SortOrder
    referenceName?: SortOrder
    referenceAddress?: SortOrder
    referencePhone?: SortOrder
    referenceRelation?: SortOrder
    referenceEmail?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DriverReferenceCountOrderByAggregateInput
    _max?: DriverReferenceMaxOrderByAggregateInput
    _min?: DriverReferenceMinOrderByAggregateInput
  }

  export type DriverReferenceScalarWhereWithAggregatesInput = {
    AND?: DriverReferenceScalarWhereWithAggregatesInput | DriverReferenceScalarWhereWithAggregatesInput[]
    OR?: DriverReferenceScalarWhereWithAggregatesInput[]
    NOT?: DriverReferenceScalarWhereWithAggregatesInput | DriverReferenceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DriverReference"> | string
    driverId?: StringWithAggregatesFilter<"DriverReference"> | string
    referenceName?: StringWithAggregatesFilter<"DriverReference"> | string
    referenceAddress?: StringWithAggregatesFilter<"DriverReference"> | string
    referencePhone?: StringWithAggregatesFilter<"DriverReference"> | string
    referenceRelation?: StringWithAggregatesFilter<"DriverReference"> | string
    referenceEmail?: StringNullableWithAggregatesFilter<"DriverReference"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"DriverReference"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DriverReference"> | Date | string
  }

  export type DriverDocumentWhereInput = {
    AND?: DriverDocumentWhereInput | DriverDocumentWhereInput[]
    OR?: DriverDocumentWhereInput[]
    NOT?: DriverDocumentWhereInput | DriverDocumentWhereInput[]
    id?: StringFilter<"DriverDocument"> | string
    driverId?: StringFilter<"DriverDocument"> | string
    documentType?: StringFilter<"DriverDocument"> | string
    documentName?: StringFilter<"DriverDocument"> | string
    documentUrl?: StringFilter<"DriverDocument"> | string
    issueDate?: DateTimeNullableFilter<"DriverDocument"> | Date | string | null
    expiryDate?: DateTimeNullableFilter<"DriverDocument"> | Date | string | null
    isVerified?: BoolFilter<"DriverDocument"> | boolean
    verifiedBy?: StringNullableFilter<"DriverDocument"> | string | null
    verifiedAt?: DateTimeNullableFilter<"DriverDocument"> | Date | string | null
    createdAt?: DateTimeFilter<"DriverDocument"> | Date | string
    updatedAt?: DateTimeFilter<"DriverDocument"> | Date | string
    driver?: XOR<DriverScalarRelationFilter, DriverWhereInput>
  }

  export type DriverDocumentOrderByWithRelationInput = {
    id?: SortOrder
    driverId?: SortOrder
    documentType?: SortOrder
    documentName?: SortOrder
    documentUrl?: SortOrder
    issueDate?: SortOrderInput | SortOrder
    expiryDate?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    verifiedBy?: SortOrderInput | SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    driver?: DriverOrderByWithRelationInput
  }

  export type DriverDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DriverDocumentWhereInput | DriverDocumentWhereInput[]
    OR?: DriverDocumentWhereInput[]
    NOT?: DriverDocumentWhereInput | DriverDocumentWhereInput[]
    driverId?: StringFilter<"DriverDocument"> | string
    documentType?: StringFilter<"DriverDocument"> | string
    documentName?: StringFilter<"DriverDocument"> | string
    documentUrl?: StringFilter<"DriverDocument"> | string
    issueDate?: DateTimeNullableFilter<"DriverDocument"> | Date | string | null
    expiryDate?: DateTimeNullableFilter<"DriverDocument"> | Date | string | null
    isVerified?: BoolFilter<"DriverDocument"> | boolean
    verifiedBy?: StringNullableFilter<"DriverDocument"> | string | null
    verifiedAt?: DateTimeNullableFilter<"DriverDocument"> | Date | string | null
    createdAt?: DateTimeFilter<"DriverDocument"> | Date | string
    updatedAt?: DateTimeFilter<"DriverDocument"> | Date | string
    driver?: XOR<DriverScalarRelationFilter, DriverWhereInput>
  }, "id">

  export type DriverDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    driverId?: SortOrder
    documentType?: SortOrder
    documentName?: SortOrder
    documentUrl?: SortOrder
    issueDate?: SortOrderInput | SortOrder
    expiryDate?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    verifiedBy?: SortOrderInput | SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DriverDocumentCountOrderByAggregateInput
    _max?: DriverDocumentMaxOrderByAggregateInput
    _min?: DriverDocumentMinOrderByAggregateInput
  }

  export type DriverDocumentScalarWhereWithAggregatesInput = {
    AND?: DriverDocumentScalarWhereWithAggregatesInput | DriverDocumentScalarWhereWithAggregatesInput[]
    OR?: DriverDocumentScalarWhereWithAggregatesInput[]
    NOT?: DriverDocumentScalarWhereWithAggregatesInput | DriverDocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DriverDocument"> | string
    driverId?: StringWithAggregatesFilter<"DriverDocument"> | string
    documentType?: StringWithAggregatesFilter<"DriverDocument"> | string
    documentName?: StringWithAggregatesFilter<"DriverDocument"> | string
    documentUrl?: StringWithAggregatesFilter<"DriverDocument"> | string
    issueDate?: DateTimeNullableWithAggregatesFilter<"DriverDocument"> | Date | string | null
    expiryDate?: DateTimeNullableWithAggregatesFilter<"DriverDocument"> | Date | string | null
    isVerified?: BoolWithAggregatesFilter<"DriverDocument"> | boolean
    verifiedBy?: StringNullableWithAggregatesFilter<"DriverDocument"> | string | null
    verifiedAt?: DateTimeNullableWithAggregatesFilter<"DriverDocument"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"DriverDocument"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DriverDocument"> | Date | string
  }

  export type DriverViolationWhereInput = {
    AND?: DriverViolationWhereInput | DriverViolationWhereInput[]
    OR?: DriverViolationWhereInput[]
    NOT?: DriverViolationWhereInput | DriverViolationWhereInput[]
    id?: StringFilter<"DriverViolation"> | string
    driverId?: StringFilter<"DriverViolation"> | string
    violationType?: StringFilter<"DriverViolation"> | string
    violationDate?: DateTimeFilter<"DriverViolation"> | Date | string
    location?: StringNullableFilter<"DriverViolation"> | string | null
    description?: StringNullableFilter<"DriverViolation"> | string | null
    fineAmount?: FloatNullableFilter<"DriverViolation"> | number | null
    isPaid?: BoolFilter<"DriverViolation"> | boolean
    points?: IntNullableFilter<"DriverViolation"> | number | null
    createdAt?: DateTimeFilter<"DriverViolation"> | Date | string
    updatedAt?: DateTimeFilter<"DriverViolation"> | Date | string
    driver?: XOR<DriverScalarRelationFilter, DriverWhereInput>
  }

  export type DriverViolationOrderByWithRelationInput = {
    id?: SortOrder
    driverId?: SortOrder
    violationType?: SortOrder
    violationDate?: SortOrder
    location?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    fineAmount?: SortOrderInput | SortOrder
    isPaid?: SortOrder
    points?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    driver?: DriverOrderByWithRelationInput
  }

  export type DriverViolationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DriverViolationWhereInput | DriverViolationWhereInput[]
    OR?: DriverViolationWhereInput[]
    NOT?: DriverViolationWhereInput | DriverViolationWhereInput[]
    driverId?: StringFilter<"DriverViolation"> | string
    violationType?: StringFilter<"DriverViolation"> | string
    violationDate?: DateTimeFilter<"DriverViolation"> | Date | string
    location?: StringNullableFilter<"DriverViolation"> | string | null
    description?: StringNullableFilter<"DriverViolation"> | string | null
    fineAmount?: FloatNullableFilter<"DriverViolation"> | number | null
    isPaid?: BoolFilter<"DriverViolation"> | boolean
    points?: IntNullableFilter<"DriverViolation"> | number | null
    createdAt?: DateTimeFilter<"DriverViolation"> | Date | string
    updatedAt?: DateTimeFilter<"DriverViolation"> | Date | string
    driver?: XOR<DriverScalarRelationFilter, DriverWhereInput>
  }, "id">

  export type DriverViolationOrderByWithAggregationInput = {
    id?: SortOrder
    driverId?: SortOrder
    violationType?: SortOrder
    violationDate?: SortOrder
    location?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    fineAmount?: SortOrderInput | SortOrder
    isPaid?: SortOrder
    points?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DriverViolationCountOrderByAggregateInput
    _avg?: DriverViolationAvgOrderByAggregateInput
    _max?: DriverViolationMaxOrderByAggregateInput
    _min?: DriverViolationMinOrderByAggregateInput
    _sum?: DriverViolationSumOrderByAggregateInput
  }

  export type DriverViolationScalarWhereWithAggregatesInput = {
    AND?: DriverViolationScalarWhereWithAggregatesInput | DriverViolationScalarWhereWithAggregatesInput[]
    OR?: DriverViolationScalarWhereWithAggregatesInput[]
    NOT?: DriverViolationScalarWhereWithAggregatesInput | DriverViolationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DriverViolation"> | string
    driverId?: StringWithAggregatesFilter<"DriverViolation"> | string
    violationType?: StringWithAggregatesFilter<"DriverViolation"> | string
    violationDate?: DateTimeWithAggregatesFilter<"DriverViolation"> | Date | string
    location?: StringNullableWithAggregatesFilter<"DriverViolation"> | string | null
    description?: StringNullableWithAggregatesFilter<"DriverViolation"> | string | null
    fineAmount?: FloatNullableWithAggregatesFilter<"DriverViolation"> | number | null
    isPaid?: BoolWithAggregatesFilter<"DriverViolation"> | boolean
    points?: IntNullableWithAggregatesFilter<"DriverViolation"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"DriverViolation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DriverViolation"> | Date | string
  }

  export type DriverAssignmentWhereInput = {
    AND?: DriverAssignmentWhereInput | DriverAssignmentWhereInput[]
    OR?: DriverAssignmentWhereInput[]
    NOT?: DriverAssignmentWhereInput | DriverAssignmentWhereInput[]
    id?: StringFilter<"DriverAssignment"> | string
    driverId?: StringFilter<"DriverAssignment"> | string
    vehicleId?: StringNullableFilter<"DriverAssignment"> | string | null
    routeId?: StringNullableFilter<"DriverAssignment"> | string | null
    assignmentDate?: DateTimeFilter<"DriverAssignment"> | Date | string
    endDate?: DateTimeNullableFilter<"DriverAssignment"> | Date | string | null
    status?: StringFilter<"DriverAssignment"> | string
    notes?: StringNullableFilter<"DriverAssignment"> | string | null
    createdAt?: DateTimeFilter<"DriverAssignment"> | Date | string
    updatedAt?: DateTimeFilter<"DriverAssignment"> | Date | string
    driver?: XOR<DriverScalarRelationFilter, DriverWhereInput>
  }

  export type DriverAssignmentOrderByWithRelationInput = {
    id?: SortOrder
    driverId?: SortOrder
    vehicleId?: SortOrderInput | SortOrder
    routeId?: SortOrderInput | SortOrder
    assignmentDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    driver?: DriverOrderByWithRelationInput
  }

  export type DriverAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DriverAssignmentWhereInput | DriverAssignmentWhereInput[]
    OR?: DriverAssignmentWhereInput[]
    NOT?: DriverAssignmentWhereInput | DriverAssignmentWhereInput[]
    driverId?: StringFilter<"DriverAssignment"> | string
    vehicleId?: StringNullableFilter<"DriverAssignment"> | string | null
    routeId?: StringNullableFilter<"DriverAssignment"> | string | null
    assignmentDate?: DateTimeFilter<"DriverAssignment"> | Date | string
    endDate?: DateTimeNullableFilter<"DriverAssignment"> | Date | string | null
    status?: StringFilter<"DriverAssignment"> | string
    notes?: StringNullableFilter<"DriverAssignment"> | string | null
    createdAt?: DateTimeFilter<"DriverAssignment"> | Date | string
    updatedAt?: DateTimeFilter<"DriverAssignment"> | Date | string
    driver?: XOR<DriverScalarRelationFilter, DriverWhereInput>
  }, "id">

  export type DriverAssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    driverId?: SortOrder
    vehicleId?: SortOrderInput | SortOrder
    routeId?: SortOrderInput | SortOrder
    assignmentDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DriverAssignmentCountOrderByAggregateInput
    _max?: DriverAssignmentMaxOrderByAggregateInput
    _min?: DriverAssignmentMinOrderByAggregateInput
  }

  export type DriverAssignmentScalarWhereWithAggregatesInput = {
    AND?: DriverAssignmentScalarWhereWithAggregatesInput | DriverAssignmentScalarWhereWithAggregatesInput[]
    OR?: DriverAssignmentScalarWhereWithAggregatesInput[]
    NOT?: DriverAssignmentScalarWhereWithAggregatesInput | DriverAssignmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DriverAssignment"> | string
    driverId?: StringWithAggregatesFilter<"DriverAssignment"> | string
    vehicleId?: StringNullableWithAggregatesFilter<"DriverAssignment"> | string | null
    routeId?: StringNullableWithAggregatesFilter<"DriverAssignment"> | string | null
    assignmentDate?: DateTimeWithAggregatesFilter<"DriverAssignment"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"DriverAssignment"> | Date | string | null
    status?: StringWithAggregatesFilter<"DriverAssignment"> | string
    notes?: StringNullableWithAggregatesFilter<"DriverAssignment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"DriverAssignment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DriverAssignment"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    clerkId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    imageUrl?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    createdDrivers?: DriverListRelationFilter
    updatedDrivers?: DriverListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    role?: SortOrder
    isActive?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdDrivers?: DriverOrderByRelationAggregateInput
    updatedDrivers?: DriverOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    imageUrl?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    createdDrivers?: DriverListRelationFilter
    updatedDrivers?: DriverListRelationFilter
  }, "id" | "clerkId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    role?: SortOrder
    isActive?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    clerkId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    lastLogin?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type DriverCreateInput = {
    id?: string
    driverImage?: string | null
    driverName: string
    fatherName: string
    dateOfBirth: Date | string
    age: number
    gender: $Enums.Gender
    placeOfBirth: string
    address: string
    maritalStatus: $Enums.MaritalStatus
    bloodGroup: $Enums.BloodGroup
    contactNo: string
    emergencyContact?: string | null
    emergencyContactName?: string | null
    driverId: number
    pkCode: string
    vehicleNo: string
    inductionDate: Date | string
    jobStatus?: $Enums.JobStatus
    education: $Enums.EducationLevel
    previousJob: $Enums.PreviousJob
    typeOfVehicle: $Enums.VehicleType
    experienceYear?: number | null
    experienceMonth?: number | null
    currentJob: string
    salary?: number | null
    cnicNo: string
    cnicFront: string
    cnicBack: string
    cnicIssueDate: Date | string
    cnicExpiryDate: Date | string
    cnicVerified?: $Enums.YesNo
    licenseNo: string
    licenseIssueDate: Date | string
    licenseExpiryDate: Date | string
    licenseStatus: string
    typeOfLicense: $Enums.LicenseType
    drivingSince: number
    licenseOnlineVerification?: $Enums.YesNo
    covid19Vaccination: $Enums.CovidVaccinationStatus
    firstDoseExpiry?: Date | string | null
    secondDoseExpiry?: Date | string | null
    boosterDose?: Date | string | null
    boosterStatus?: $Enums.BoosterStatus | null
    medicalCheck: $Enums.YesNo
    medicalIssueDate?: Date | string | null
    medicalExpiryDate?: Date | string | null
    medicalStatus?: $Enums.MedicalStatus | null
    medicalCertificate?: string | null
    ddcNHMP: $Enums.YesNo
    ddcNHMPIssueDate?: Date | string | null
    ddcNHMPExpiryDate?: Date | string | null
    ddcNHMPStatus?: $Enums.DDCStatus | null
    ddcNHMPResult?: $Enums.DDCResult | null
    ddcCertificate?: string | null
    randomDrugAlcoholDate?: Date | string | null
    randomDrugAlcoholCount?: number | null
    randomDrugAlcoholStatus?: $Enums.DrugAlcoholStatus | null
    drugTestCertificate?: string | null
    policeVF: $Enums.YesNo
    policeVFCertificate?: string | null
    tpplPolicy: $Enums.YesNo
    securityClearance?: $Enums.YesNo
    languages: JsonNullValueInput | InputJsonValue
    notes?: string | null
    isActive?: boolean
    lastLogin?: Date | string | null
    passwordHash?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workExperiences?: DriverWorkExperienceCreateNestedManyWithoutDriverInput
    references?: DriverReferenceCreateNestedManyWithoutDriverInput
    documents?: DriverDocumentCreateNestedManyWithoutDriverInput
    violations?: DriverViolationCreateNestedManyWithoutDriverInput
    assignments?: DriverAssignmentCreateNestedManyWithoutDriverInput
    createdBy?: UserCreateNestedOneWithoutCreatedDriversInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedDriversInput
  }

  export type DriverUncheckedCreateInput = {
    id?: string
    driverImage?: string | null
    driverName: string
    fatherName: string
    dateOfBirth: Date | string
    age: number
    gender: $Enums.Gender
    placeOfBirth: string
    address: string
    maritalStatus: $Enums.MaritalStatus
    bloodGroup: $Enums.BloodGroup
    contactNo: string
    emergencyContact?: string | null
    emergencyContactName?: string | null
    driverId: number
    pkCode: string
    vehicleNo: string
    inductionDate: Date | string
    jobStatus?: $Enums.JobStatus
    education: $Enums.EducationLevel
    previousJob: $Enums.PreviousJob
    typeOfVehicle: $Enums.VehicleType
    experienceYear?: number | null
    experienceMonth?: number | null
    currentJob: string
    salary?: number | null
    cnicNo: string
    cnicFront: string
    cnicBack: string
    cnicIssueDate: Date | string
    cnicExpiryDate: Date | string
    cnicVerified?: $Enums.YesNo
    licenseNo: string
    licenseIssueDate: Date | string
    licenseExpiryDate: Date | string
    licenseStatus: string
    typeOfLicense: $Enums.LicenseType
    drivingSince: number
    licenseOnlineVerification?: $Enums.YesNo
    covid19Vaccination: $Enums.CovidVaccinationStatus
    firstDoseExpiry?: Date | string | null
    secondDoseExpiry?: Date | string | null
    boosterDose?: Date | string | null
    boosterStatus?: $Enums.BoosterStatus | null
    medicalCheck: $Enums.YesNo
    medicalIssueDate?: Date | string | null
    medicalExpiryDate?: Date | string | null
    medicalStatus?: $Enums.MedicalStatus | null
    medicalCertificate?: string | null
    ddcNHMP: $Enums.YesNo
    ddcNHMPIssueDate?: Date | string | null
    ddcNHMPExpiryDate?: Date | string | null
    ddcNHMPStatus?: $Enums.DDCStatus | null
    ddcNHMPResult?: $Enums.DDCResult | null
    ddcCertificate?: string | null
    randomDrugAlcoholDate?: Date | string | null
    randomDrugAlcoholCount?: number | null
    randomDrugAlcoholStatus?: $Enums.DrugAlcoholStatus | null
    drugTestCertificate?: string | null
    policeVF: $Enums.YesNo
    policeVFCertificate?: string | null
    tpplPolicy: $Enums.YesNo
    securityClearance?: $Enums.YesNo
    languages: JsonNullValueInput | InputJsonValue
    notes?: string | null
    isActive?: boolean
    lastLogin?: Date | string | null
    passwordHash?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById?: string | null
    updatedById?: string | null
    workExperiences?: DriverWorkExperienceUncheckedCreateNestedManyWithoutDriverInput
    references?: DriverReferenceUncheckedCreateNestedManyWithoutDriverInput
    documents?: DriverDocumentUncheckedCreateNestedManyWithoutDriverInput
    violations?: DriverViolationUncheckedCreateNestedManyWithoutDriverInput
    assignments?: DriverAssignmentUncheckedCreateNestedManyWithoutDriverInput
  }

  export type DriverUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverImage?: NullableStringFieldUpdateOperationsInput | string | null
    driverName?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    placeOfBirth?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    bloodGroup?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    contactNo?: StringFieldUpdateOperationsInput | string
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    driverId?: IntFieldUpdateOperationsInput | number
    pkCode?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    inductionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jobStatus?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    education?: EnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel
    previousJob?: EnumPreviousJobFieldUpdateOperationsInput | $Enums.PreviousJob
    typeOfVehicle?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    experienceYear?: NullableIntFieldUpdateOperationsInput | number | null
    experienceMonth?: NullableIntFieldUpdateOperationsInput | number | null
    currentJob?: StringFieldUpdateOperationsInput | string
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    cnicNo?: StringFieldUpdateOperationsInput | string
    cnicFront?: StringFieldUpdateOperationsInput | string
    cnicBack?: StringFieldUpdateOperationsInput | string
    cnicIssueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cnicExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cnicVerified?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    licenseNo?: StringFieldUpdateOperationsInput | string
    licenseIssueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    licenseExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    licenseStatus?: StringFieldUpdateOperationsInput | string
    typeOfLicense?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    drivingSince?: IntFieldUpdateOperationsInput | number
    licenseOnlineVerification?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    covid19Vaccination?: EnumCovidVaccinationStatusFieldUpdateOperationsInput | $Enums.CovidVaccinationStatus
    firstDoseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondDoseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boosterDose?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boosterStatus?: NullableEnumBoosterStatusFieldUpdateOperationsInput | $Enums.BoosterStatus | null
    medicalCheck?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    medicalIssueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalStatus?: NullableEnumMedicalStatusFieldUpdateOperationsInput | $Enums.MedicalStatus | null
    medicalCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    ddcNHMP?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    ddcNHMPIssueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ddcNHMPExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ddcNHMPStatus?: NullableEnumDDCStatusFieldUpdateOperationsInput | $Enums.DDCStatus | null
    ddcNHMPResult?: NullableEnumDDCResultFieldUpdateOperationsInput | $Enums.DDCResult | null
    ddcCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    randomDrugAlcoholDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    randomDrugAlcoholCount?: NullableIntFieldUpdateOperationsInput | number | null
    randomDrugAlcoholStatus?: NullableEnumDrugAlcoholStatusFieldUpdateOperationsInput | $Enums.DrugAlcoholStatus | null
    drugTestCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    policeVF?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    policeVFCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    tpplPolicy?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    securityClearance?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    languages?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workExperiences?: DriverWorkExperienceUpdateManyWithoutDriverNestedInput
    references?: DriverReferenceUpdateManyWithoutDriverNestedInput
    documents?: DriverDocumentUpdateManyWithoutDriverNestedInput
    violations?: DriverViolationUpdateManyWithoutDriverNestedInput
    assignments?: DriverAssignmentUpdateManyWithoutDriverNestedInput
    createdBy?: UserUpdateOneWithoutCreatedDriversNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedDriversNestedInput
  }

  export type DriverUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverImage?: NullableStringFieldUpdateOperationsInput | string | null
    driverName?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    placeOfBirth?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    bloodGroup?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    contactNo?: StringFieldUpdateOperationsInput | string
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    driverId?: IntFieldUpdateOperationsInput | number
    pkCode?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    inductionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jobStatus?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    education?: EnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel
    previousJob?: EnumPreviousJobFieldUpdateOperationsInput | $Enums.PreviousJob
    typeOfVehicle?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    experienceYear?: NullableIntFieldUpdateOperationsInput | number | null
    experienceMonth?: NullableIntFieldUpdateOperationsInput | number | null
    currentJob?: StringFieldUpdateOperationsInput | string
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    cnicNo?: StringFieldUpdateOperationsInput | string
    cnicFront?: StringFieldUpdateOperationsInput | string
    cnicBack?: StringFieldUpdateOperationsInput | string
    cnicIssueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cnicExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cnicVerified?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    licenseNo?: StringFieldUpdateOperationsInput | string
    licenseIssueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    licenseExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    licenseStatus?: StringFieldUpdateOperationsInput | string
    typeOfLicense?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    drivingSince?: IntFieldUpdateOperationsInput | number
    licenseOnlineVerification?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    covid19Vaccination?: EnumCovidVaccinationStatusFieldUpdateOperationsInput | $Enums.CovidVaccinationStatus
    firstDoseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondDoseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boosterDose?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boosterStatus?: NullableEnumBoosterStatusFieldUpdateOperationsInput | $Enums.BoosterStatus | null
    medicalCheck?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    medicalIssueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalStatus?: NullableEnumMedicalStatusFieldUpdateOperationsInput | $Enums.MedicalStatus | null
    medicalCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    ddcNHMP?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    ddcNHMPIssueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ddcNHMPExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ddcNHMPStatus?: NullableEnumDDCStatusFieldUpdateOperationsInput | $Enums.DDCStatus | null
    ddcNHMPResult?: NullableEnumDDCResultFieldUpdateOperationsInput | $Enums.DDCResult | null
    ddcCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    randomDrugAlcoholDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    randomDrugAlcoholCount?: NullableIntFieldUpdateOperationsInput | number | null
    randomDrugAlcoholStatus?: NullableEnumDrugAlcoholStatusFieldUpdateOperationsInput | $Enums.DrugAlcoholStatus | null
    drugTestCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    policeVF?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    policeVFCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    tpplPolicy?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    securityClearance?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    languages?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    workExperiences?: DriverWorkExperienceUncheckedUpdateManyWithoutDriverNestedInput
    references?: DriverReferenceUncheckedUpdateManyWithoutDriverNestedInput
    documents?: DriverDocumentUncheckedUpdateManyWithoutDriverNestedInput
    violations?: DriverViolationUncheckedUpdateManyWithoutDriverNestedInput
    assignments?: DriverAssignmentUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type DriverCreateManyInput = {
    id?: string
    driverImage?: string | null
    driverName: string
    fatherName: string
    dateOfBirth: Date | string
    age: number
    gender: $Enums.Gender
    placeOfBirth: string
    address: string
    maritalStatus: $Enums.MaritalStatus
    bloodGroup: $Enums.BloodGroup
    contactNo: string
    emergencyContact?: string | null
    emergencyContactName?: string | null
    driverId: number
    pkCode: string
    vehicleNo: string
    inductionDate: Date | string
    jobStatus?: $Enums.JobStatus
    education: $Enums.EducationLevel
    previousJob: $Enums.PreviousJob
    typeOfVehicle: $Enums.VehicleType
    experienceYear?: number | null
    experienceMonth?: number | null
    currentJob: string
    salary?: number | null
    cnicNo: string
    cnicFront: string
    cnicBack: string
    cnicIssueDate: Date | string
    cnicExpiryDate: Date | string
    cnicVerified?: $Enums.YesNo
    licenseNo: string
    licenseIssueDate: Date | string
    licenseExpiryDate: Date | string
    licenseStatus: string
    typeOfLicense: $Enums.LicenseType
    drivingSince: number
    licenseOnlineVerification?: $Enums.YesNo
    covid19Vaccination: $Enums.CovidVaccinationStatus
    firstDoseExpiry?: Date | string | null
    secondDoseExpiry?: Date | string | null
    boosterDose?: Date | string | null
    boosterStatus?: $Enums.BoosterStatus | null
    medicalCheck: $Enums.YesNo
    medicalIssueDate?: Date | string | null
    medicalExpiryDate?: Date | string | null
    medicalStatus?: $Enums.MedicalStatus | null
    medicalCertificate?: string | null
    ddcNHMP: $Enums.YesNo
    ddcNHMPIssueDate?: Date | string | null
    ddcNHMPExpiryDate?: Date | string | null
    ddcNHMPStatus?: $Enums.DDCStatus | null
    ddcNHMPResult?: $Enums.DDCResult | null
    ddcCertificate?: string | null
    randomDrugAlcoholDate?: Date | string | null
    randomDrugAlcoholCount?: number | null
    randomDrugAlcoholStatus?: $Enums.DrugAlcoholStatus | null
    drugTestCertificate?: string | null
    policeVF: $Enums.YesNo
    policeVFCertificate?: string | null
    tpplPolicy: $Enums.YesNo
    securityClearance?: $Enums.YesNo
    languages: JsonNullValueInput | InputJsonValue
    notes?: string | null
    isActive?: boolean
    lastLogin?: Date | string | null
    passwordHash?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById?: string | null
    updatedById?: string | null
  }

  export type DriverUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverImage?: NullableStringFieldUpdateOperationsInput | string | null
    driverName?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    placeOfBirth?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    bloodGroup?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    contactNo?: StringFieldUpdateOperationsInput | string
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    driverId?: IntFieldUpdateOperationsInput | number
    pkCode?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    inductionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jobStatus?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    education?: EnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel
    previousJob?: EnumPreviousJobFieldUpdateOperationsInput | $Enums.PreviousJob
    typeOfVehicle?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    experienceYear?: NullableIntFieldUpdateOperationsInput | number | null
    experienceMonth?: NullableIntFieldUpdateOperationsInput | number | null
    currentJob?: StringFieldUpdateOperationsInput | string
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    cnicNo?: StringFieldUpdateOperationsInput | string
    cnicFront?: StringFieldUpdateOperationsInput | string
    cnicBack?: StringFieldUpdateOperationsInput | string
    cnicIssueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cnicExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cnicVerified?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    licenseNo?: StringFieldUpdateOperationsInput | string
    licenseIssueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    licenseExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    licenseStatus?: StringFieldUpdateOperationsInput | string
    typeOfLicense?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    drivingSince?: IntFieldUpdateOperationsInput | number
    licenseOnlineVerification?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    covid19Vaccination?: EnumCovidVaccinationStatusFieldUpdateOperationsInput | $Enums.CovidVaccinationStatus
    firstDoseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondDoseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boosterDose?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boosterStatus?: NullableEnumBoosterStatusFieldUpdateOperationsInput | $Enums.BoosterStatus | null
    medicalCheck?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    medicalIssueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalStatus?: NullableEnumMedicalStatusFieldUpdateOperationsInput | $Enums.MedicalStatus | null
    medicalCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    ddcNHMP?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    ddcNHMPIssueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ddcNHMPExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ddcNHMPStatus?: NullableEnumDDCStatusFieldUpdateOperationsInput | $Enums.DDCStatus | null
    ddcNHMPResult?: NullableEnumDDCResultFieldUpdateOperationsInput | $Enums.DDCResult | null
    ddcCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    randomDrugAlcoholDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    randomDrugAlcoholCount?: NullableIntFieldUpdateOperationsInput | number | null
    randomDrugAlcoholStatus?: NullableEnumDrugAlcoholStatusFieldUpdateOperationsInput | $Enums.DrugAlcoholStatus | null
    drugTestCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    policeVF?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    policeVFCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    tpplPolicy?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    securityClearance?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    languages?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverImage?: NullableStringFieldUpdateOperationsInput | string | null
    driverName?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    placeOfBirth?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    bloodGroup?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    contactNo?: StringFieldUpdateOperationsInput | string
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    driverId?: IntFieldUpdateOperationsInput | number
    pkCode?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    inductionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jobStatus?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    education?: EnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel
    previousJob?: EnumPreviousJobFieldUpdateOperationsInput | $Enums.PreviousJob
    typeOfVehicle?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    experienceYear?: NullableIntFieldUpdateOperationsInput | number | null
    experienceMonth?: NullableIntFieldUpdateOperationsInput | number | null
    currentJob?: StringFieldUpdateOperationsInput | string
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    cnicNo?: StringFieldUpdateOperationsInput | string
    cnicFront?: StringFieldUpdateOperationsInput | string
    cnicBack?: StringFieldUpdateOperationsInput | string
    cnicIssueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cnicExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cnicVerified?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    licenseNo?: StringFieldUpdateOperationsInput | string
    licenseIssueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    licenseExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    licenseStatus?: StringFieldUpdateOperationsInput | string
    typeOfLicense?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    drivingSince?: IntFieldUpdateOperationsInput | number
    licenseOnlineVerification?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    covid19Vaccination?: EnumCovidVaccinationStatusFieldUpdateOperationsInput | $Enums.CovidVaccinationStatus
    firstDoseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondDoseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boosterDose?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boosterStatus?: NullableEnumBoosterStatusFieldUpdateOperationsInput | $Enums.BoosterStatus | null
    medicalCheck?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    medicalIssueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalStatus?: NullableEnumMedicalStatusFieldUpdateOperationsInput | $Enums.MedicalStatus | null
    medicalCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    ddcNHMP?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    ddcNHMPIssueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ddcNHMPExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ddcNHMPStatus?: NullableEnumDDCStatusFieldUpdateOperationsInput | $Enums.DDCStatus | null
    ddcNHMPResult?: NullableEnumDDCResultFieldUpdateOperationsInput | $Enums.DDCResult | null
    ddcCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    randomDrugAlcoholDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    randomDrugAlcoholCount?: NullableIntFieldUpdateOperationsInput | number | null
    randomDrugAlcoholStatus?: NullableEnumDrugAlcoholStatusFieldUpdateOperationsInput | $Enums.DrugAlcoholStatus | null
    drugTestCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    policeVF?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    policeVFCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    tpplPolicy?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    securityClearance?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    languages?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DriverWorkExperienceCreateInput = {
    id?: string
    companyName: string
    dateFrom: Date | string
    dateTo?: Date | string | null
    jobTill: string
    responsibility: string
    salary?: number | null
    reasonForLeaving?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    driver: DriverCreateNestedOneWithoutWorkExperiencesInput
  }

  export type DriverWorkExperienceUncheckedCreateInput = {
    id?: string
    driverId: string
    companyName: string
    dateFrom: Date | string
    dateTo?: Date | string | null
    jobTill: string
    responsibility: string
    salary?: number | null
    reasonForLeaving?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DriverWorkExperienceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    dateFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobTill?: StringFieldUpdateOperationsInput | string
    responsibility?: StringFieldUpdateOperationsInput | string
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    reasonForLeaving?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: DriverUpdateOneRequiredWithoutWorkExperiencesNestedInput
  }

  export type DriverWorkExperienceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    dateFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobTill?: StringFieldUpdateOperationsInput | string
    responsibility?: StringFieldUpdateOperationsInput | string
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    reasonForLeaving?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverWorkExperienceCreateManyInput = {
    id?: string
    driverId: string
    companyName: string
    dateFrom: Date | string
    dateTo?: Date | string | null
    jobTill: string
    responsibility: string
    salary?: number | null
    reasonForLeaving?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DriverWorkExperienceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    dateFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobTill?: StringFieldUpdateOperationsInput | string
    responsibility?: StringFieldUpdateOperationsInput | string
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    reasonForLeaving?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverWorkExperienceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    dateFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobTill?: StringFieldUpdateOperationsInput | string
    responsibility?: StringFieldUpdateOperationsInput | string
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    reasonForLeaving?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverReferenceCreateInput = {
    id?: string
    referenceName: string
    referenceAddress: string
    referencePhone: string
    referenceRelation: string
    referenceEmail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    driver: DriverCreateNestedOneWithoutReferencesInput
  }

  export type DriverReferenceUncheckedCreateInput = {
    id?: string
    driverId: string
    referenceName: string
    referenceAddress: string
    referencePhone: string
    referenceRelation: string
    referenceEmail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DriverReferenceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceName?: StringFieldUpdateOperationsInput | string
    referenceAddress?: StringFieldUpdateOperationsInput | string
    referencePhone?: StringFieldUpdateOperationsInput | string
    referenceRelation?: StringFieldUpdateOperationsInput | string
    referenceEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: DriverUpdateOneRequiredWithoutReferencesNestedInput
  }

  export type DriverReferenceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    referenceName?: StringFieldUpdateOperationsInput | string
    referenceAddress?: StringFieldUpdateOperationsInput | string
    referencePhone?: StringFieldUpdateOperationsInput | string
    referenceRelation?: StringFieldUpdateOperationsInput | string
    referenceEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverReferenceCreateManyInput = {
    id?: string
    driverId: string
    referenceName: string
    referenceAddress: string
    referencePhone: string
    referenceRelation: string
    referenceEmail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DriverReferenceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceName?: StringFieldUpdateOperationsInput | string
    referenceAddress?: StringFieldUpdateOperationsInput | string
    referencePhone?: StringFieldUpdateOperationsInput | string
    referenceRelation?: StringFieldUpdateOperationsInput | string
    referenceEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverReferenceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    referenceName?: StringFieldUpdateOperationsInput | string
    referenceAddress?: StringFieldUpdateOperationsInput | string
    referencePhone?: StringFieldUpdateOperationsInput | string
    referenceRelation?: StringFieldUpdateOperationsInput | string
    referenceEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverDocumentCreateInput = {
    id?: string
    documentType: string
    documentName: string
    documentUrl: string
    issueDate?: Date | string | null
    expiryDate?: Date | string | null
    isVerified?: boolean
    verifiedBy?: string | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    driver: DriverCreateNestedOneWithoutDocumentsInput
  }

  export type DriverDocumentUncheckedCreateInput = {
    id?: string
    driverId: string
    documentType: string
    documentName: string
    documentUrl: string
    issueDate?: Date | string | null
    expiryDate?: Date | string | null
    isVerified?: boolean
    verifiedBy?: string | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DriverDocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    documentName?: StringFieldUpdateOperationsInput | string
    documentUrl?: StringFieldUpdateOperationsInput | string
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: DriverUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type DriverDocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    documentName?: StringFieldUpdateOperationsInput | string
    documentUrl?: StringFieldUpdateOperationsInput | string
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverDocumentCreateManyInput = {
    id?: string
    driverId: string
    documentType: string
    documentName: string
    documentUrl: string
    issueDate?: Date | string | null
    expiryDate?: Date | string | null
    isVerified?: boolean
    verifiedBy?: string | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DriverDocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    documentName?: StringFieldUpdateOperationsInput | string
    documentUrl?: StringFieldUpdateOperationsInput | string
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverDocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    documentName?: StringFieldUpdateOperationsInput | string
    documentUrl?: StringFieldUpdateOperationsInput | string
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverViolationCreateInput = {
    id?: string
    violationType: string
    violationDate: Date | string
    location?: string | null
    description?: string | null
    fineAmount?: number | null
    isPaid?: boolean
    points?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    driver: DriverCreateNestedOneWithoutViolationsInput
  }

  export type DriverViolationUncheckedCreateInput = {
    id?: string
    driverId: string
    violationType: string
    violationDate: Date | string
    location?: string | null
    description?: string | null
    fineAmount?: number | null
    isPaid?: boolean
    points?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DriverViolationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    violationType?: StringFieldUpdateOperationsInput | string
    violationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fineAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    points?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: DriverUpdateOneRequiredWithoutViolationsNestedInput
  }

  export type DriverViolationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    violationType?: StringFieldUpdateOperationsInput | string
    violationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fineAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    points?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverViolationCreateManyInput = {
    id?: string
    driverId: string
    violationType: string
    violationDate: Date | string
    location?: string | null
    description?: string | null
    fineAmount?: number | null
    isPaid?: boolean
    points?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DriverViolationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    violationType?: StringFieldUpdateOperationsInput | string
    violationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fineAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    points?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverViolationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    violationType?: StringFieldUpdateOperationsInput | string
    violationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fineAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    points?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverAssignmentCreateInput = {
    id?: string
    vehicleId?: string | null
    routeId?: string | null
    assignmentDate: Date | string
    endDate?: Date | string | null
    status: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    driver: DriverCreateNestedOneWithoutAssignmentsInput
  }

  export type DriverAssignmentUncheckedCreateInput = {
    id?: string
    driverId: string
    vehicleId?: string | null
    routeId?: string | null
    assignmentDate: Date | string
    endDate?: Date | string | null
    status: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DriverAssignmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: NullableStringFieldUpdateOperationsInput | string | null
    routeId?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: DriverUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type DriverAssignmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    vehicleId?: NullableStringFieldUpdateOperationsInput | string | null
    routeId?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverAssignmentCreateManyInput = {
    id?: string
    driverId: string
    vehicleId?: string | null
    routeId?: string | null
    assignmentDate: Date | string
    endDate?: Date | string | null
    status: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DriverAssignmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: NullableStringFieldUpdateOperationsInput | string | null
    routeId?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverAssignmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    vehicleId?: NullableStringFieldUpdateOperationsInput | string | null
    routeId?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    clerkId: string
    email: string
    firstName: string
    lastName: string
    imageUrl?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdDrivers?: DriverCreateNestedManyWithoutCreatedByInput
    updatedDrivers?: DriverCreateNestedManyWithoutUpdatedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    clerkId: string
    email: string
    firstName: string
    lastName: string
    imageUrl?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdDrivers?: DriverUncheckedCreateNestedManyWithoutCreatedByInput
    updatedDrivers?: DriverUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdDrivers?: DriverUpdateManyWithoutCreatedByNestedInput
    updatedDrivers?: DriverUpdateManyWithoutUpdatedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdDrivers?: DriverUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedDrivers?: DriverUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    clerkId: string
    email: string
    firstName: string
    lastName: string
    imageUrl?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type EnumMaritalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalStatus | EnumMaritalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMaritalStatusFilter<$PrismaModel> | $Enums.MaritalStatus
  }

  export type EnumBloodGroupFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodGroup | EnumBloodGroupFieldRefInput<$PrismaModel>
    in?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel>
    notIn?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel>
    not?: NestedEnumBloodGroupFilter<$PrismaModel> | $Enums.BloodGroup
  }

  export type EnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus
  }

  export type EnumEducationLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.EducationLevel | EnumEducationLevelFieldRefInput<$PrismaModel>
    in?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumEducationLevelFilter<$PrismaModel> | $Enums.EducationLevel
  }

  export type EnumPreviousJobFilter<$PrismaModel = never> = {
    equals?: $Enums.PreviousJob | EnumPreviousJobFieldRefInput<$PrismaModel>
    in?: $Enums.PreviousJob[] | ListEnumPreviousJobFieldRefInput<$PrismaModel>
    notIn?: $Enums.PreviousJob[] | ListEnumPreviousJobFieldRefInput<$PrismaModel>
    not?: NestedEnumPreviousJobFilter<$PrismaModel> | $Enums.PreviousJob
  }

  export type EnumVehicleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | EnumVehicleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleTypeFilter<$PrismaModel> | $Enums.VehicleType
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnumYesNoFilter<$PrismaModel = never> = {
    equals?: $Enums.YesNo | EnumYesNoFieldRefInput<$PrismaModel>
    in?: $Enums.YesNo[] | ListEnumYesNoFieldRefInput<$PrismaModel>
    notIn?: $Enums.YesNo[] | ListEnumYesNoFieldRefInput<$PrismaModel>
    not?: NestedEnumYesNoFilter<$PrismaModel> | $Enums.YesNo
  }

  export type EnumLicenseTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LicenseType | EnumLicenseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LicenseType[] | ListEnumLicenseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LicenseType[] | ListEnumLicenseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLicenseTypeFilter<$PrismaModel> | $Enums.LicenseType
  }

  export type EnumCovidVaccinationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CovidVaccinationStatus | EnumCovidVaccinationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CovidVaccinationStatus[] | ListEnumCovidVaccinationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CovidVaccinationStatus[] | ListEnumCovidVaccinationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCovidVaccinationStatusFilter<$PrismaModel> | $Enums.CovidVaccinationStatus
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

  export type EnumBoosterStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BoosterStatus | EnumBoosterStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.BoosterStatus[] | ListEnumBoosterStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BoosterStatus[] | ListEnumBoosterStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBoosterStatusNullableFilter<$PrismaModel> | $Enums.BoosterStatus | null
  }

  export type EnumMedicalStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MedicalStatus | EnumMedicalStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.MedicalStatus[] | ListEnumMedicalStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MedicalStatus[] | ListEnumMedicalStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMedicalStatusNullableFilter<$PrismaModel> | $Enums.MedicalStatus | null
  }

  export type EnumDDCStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.DDCStatus | EnumDDCStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.DDCStatus[] | ListEnumDDCStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DDCStatus[] | ListEnumDDCStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDDCStatusNullableFilter<$PrismaModel> | $Enums.DDCStatus | null
  }

  export type EnumDDCResultNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.DDCResult | EnumDDCResultFieldRefInput<$PrismaModel> | null
    in?: $Enums.DDCResult[] | ListEnumDDCResultFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DDCResult[] | ListEnumDDCResultFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDDCResultNullableFilter<$PrismaModel> | $Enums.DDCResult | null
  }

  export type EnumDrugAlcoholStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.DrugAlcoholStatus | EnumDrugAlcoholStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.DrugAlcoholStatus[] | ListEnumDrugAlcoholStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DrugAlcoholStatus[] | ListEnumDrugAlcoholStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDrugAlcoholStatusNullableFilter<$PrismaModel> | $Enums.DrugAlcoholStatus | null
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DriverWorkExperienceListRelationFilter = {
    every?: DriverWorkExperienceWhereInput
    some?: DriverWorkExperienceWhereInput
    none?: DriverWorkExperienceWhereInput
  }

  export type DriverReferenceListRelationFilter = {
    every?: DriverReferenceWhereInput
    some?: DriverReferenceWhereInput
    none?: DriverReferenceWhereInput
  }

  export type DriverDocumentListRelationFilter = {
    every?: DriverDocumentWhereInput
    some?: DriverDocumentWhereInput
    none?: DriverDocumentWhereInput
  }

  export type DriverViolationListRelationFilter = {
    every?: DriverViolationWhereInput
    some?: DriverViolationWhereInput
    none?: DriverViolationWhereInput
  }

  export type DriverAssignmentListRelationFilter = {
    every?: DriverAssignmentWhereInput
    some?: DriverAssignmentWhereInput
    none?: DriverAssignmentWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DriverWorkExperienceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DriverReferenceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DriverDocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DriverViolationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DriverAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DriverCountOrderByAggregateInput = {
    id?: SortOrder
    driverImage?: SortOrder
    driverName?: SortOrder
    fatherName?: SortOrder
    dateOfBirth?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    placeOfBirth?: SortOrder
    address?: SortOrder
    maritalStatus?: SortOrder
    bloodGroup?: SortOrder
    contactNo?: SortOrder
    emergencyContact?: SortOrder
    emergencyContactName?: SortOrder
    driverId?: SortOrder
    pkCode?: SortOrder
    vehicleNo?: SortOrder
    inductionDate?: SortOrder
    jobStatus?: SortOrder
    education?: SortOrder
    previousJob?: SortOrder
    typeOfVehicle?: SortOrder
    experienceYear?: SortOrder
    experienceMonth?: SortOrder
    currentJob?: SortOrder
    salary?: SortOrder
    cnicNo?: SortOrder
    cnicFront?: SortOrder
    cnicBack?: SortOrder
    cnicIssueDate?: SortOrder
    cnicExpiryDate?: SortOrder
    cnicVerified?: SortOrder
    licenseNo?: SortOrder
    licenseIssueDate?: SortOrder
    licenseExpiryDate?: SortOrder
    licenseStatus?: SortOrder
    typeOfLicense?: SortOrder
    drivingSince?: SortOrder
    licenseOnlineVerification?: SortOrder
    covid19Vaccination?: SortOrder
    firstDoseExpiry?: SortOrder
    secondDoseExpiry?: SortOrder
    boosterDose?: SortOrder
    boosterStatus?: SortOrder
    medicalCheck?: SortOrder
    medicalIssueDate?: SortOrder
    medicalExpiryDate?: SortOrder
    medicalStatus?: SortOrder
    medicalCertificate?: SortOrder
    ddcNHMP?: SortOrder
    ddcNHMPIssueDate?: SortOrder
    ddcNHMPExpiryDate?: SortOrder
    ddcNHMPStatus?: SortOrder
    ddcNHMPResult?: SortOrder
    ddcCertificate?: SortOrder
    randomDrugAlcoholDate?: SortOrder
    randomDrugAlcoholCount?: SortOrder
    randomDrugAlcoholStatus?: SortOrder
    drugTestCertificate?: SortOrder
    policeVF?: SortOrder
    policeVFCertificate?: SortOrder
    tpplPolicy?: SortOrder
    securityClearance?: SortOrder
    languages?: SortOrder
    notes?: SortOrder
    isActive?: SortOrder
    lastLogin?: SortOrder
    passwordHash?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
  }

  export type DriverAvgOrderByAggregateInput = {
    age?: SortOrder
    driverId?: SortOrder
    experienceYear?: SortOrder
    experienceMonth?: SortOrder
    salary?: SortOrder
    drivingSince?: SortOrder
    randomDrugAlcoholCount?: SortOrder
  }

  export type DriverMaxOrderByAggregateInput = {
    id?: SortOrder
    driverImage?: SortOrder
    driverName?: SortOrder
    fatherName?: SortOrder
    dateOfBirth?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    placeOfBirth?: SortOrder
    address?: SortOrder
    maritalStatus?: SortOrder
    bloodGroup?: SortOrder
    contactNo?: SortOrder
    emergencyContact?: SortOrder
    emergencyContactName?: SortOrder
    driverId?: SortOrder
    pkCode?: SortOrder
    vehicleNo?: SortOrder
    inductionDate?: SortOrder
    jobStatus?: SortOrder
    education?: SortOrder
    previousJob?: SortOrder
    typeOfVehicle?: SortOrder
    experienceYear?: SortOrder
    experienceMonth?: SortOrder
    currentJob?: SortOrder
    salary?: SortOrder
    cnicNo?: SortOrder
    cnicFront?: SortOrder
    cnicBack?: SortOrder
    cnicIssueDate?: SortOrder
    cnicExpiryDate?: SortOrder
    cnicVerified?: SortOrder
    licenseNo?: SortOrder
    licenseIssueDate?: SortOrder
    licenseExpiryDate?: SortOrder
    licenseStatus?: SortOrder
    typeOfLicense?: SortOrder
    drivingSince?: SortOrder
    licenseOnlineVerification?: SortOrder
    covid19Vaccination?: SortOrder
    firstDoseExpiry?: SortOrder
    secondDoseExpiry?: SortOrder
    boosterDose?: SortOrder
    boosterStatus?: SortOrder
    medicalCheck?: SortOrder
    medicalIssueDate?: SortOrder
    medicalExpiryDate?: SortOrder
    medicalStatus?: SortOrder
    medicalCertificate?: SortOrder
    ddcNHMP?: SortOrder
    ddcNHMPIssueDate?: SortOrder
    ddcNHMPExpiryDate?: SortOrder
    ddcNHMPStatus?: SortOrder
    ddcNHMPResult?: SortOrder
    ddcCertificate?: SortOrder
    randomDrugAlcoholDate?: SortOrder
    randomDrugAlcoholCount?: SortOrder
    randomDrugAlcoholStatus?: SortOrder
    drugTestCertificate?: SortOrder
    policeVF?: SortOrder
    policeVFCertificate?: SortOrder
    tpplPolicy?: SortOrder
    securityClearance?: SortOrder
    notes?: SortOrder
    isActive?: SortOrder
    lastLogin?: SortOrder
    passwordHash?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
  }

  export type DriverMinOrderByAggregateInput = {
    id?: SortOrder
    driverImage?: SortOrder
    driverName?: SortOrder
    fatherName?: SortOrder
    dateOfBirth?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    placeOfBirth?: SortOrder
    address?: SortOrder
    maritalStatus?: SortOrder
    bloodGroup?: SortOrder
    contactNo?: SortOrder
    emergencyContact?: SortOrder
    emergencyContactName?: SortOrder
    driverId?: SortOrder
    pkCode?: SortOrder
    vehicleNo?: SortOrder
    inductionDate?: SortOrder
    jobStatus?: SortOrder
    education?: SortOrder
    previousJob?: SortOrder
    typeOfVehicle?: SortOrder
    experienceYear?: SortOrder
    experienceMonth?: SortOrder
    currentJob?: SortOrder
    salary?: SortOrder
    cnicNo?: SortOrder
    cnicFront?: SortOrder
    cnicBack?: SortOrder
    cnicIssueDate?: SortOrder
    cnicExpiryDate?: SortOrder
    cnicVerified?: SortOrder
    licenseNo?: SortOrder
    licenseIssueDate?: SortOrder
    licenseExpiryDate?: SortOrder
    licenseStatus?: SortOrder
    typeOfLicense?: SortOrder
    drivingSince?: SortOrder
    licenseOnlineVerification?: SortOrder
    covid19Vaccination?: SortOrder
    firstDoseExpiry?: SortOrder
    secondDoseExpiry?: SortOrder
    boosterDose?: SortOrder
    boosterStatus?: SortOrder
    medicalCheck?: SortOrder
    medicalIssueDate?: SortOrder
    medicalExpiryDate?: SortOrder
    medicalStatus?: SortOrder
    medicalCertificate?: SortOrder
    ddcNHMP?: SortOrder
    ddcNHMPIssueDate?: SortOrder
    ddcNHMPExpiryDate?: SortOrder
    ddcNHMPStatus?: SortOrder
    ddcNHMPResult?: SortOrder
    ddcCertificate?: SortOrder
    randomDrugAlcoholDate?: SortOrder
    randomDrugAlcoholCount?: SortOrder
    randomDrugAlcoholStatus?: SortOrder
    drugTestCertificate?: SortOrder
    policeVF?: SortOrder
    policeVFCertificate?: SortOrder
    tpplPolicy?: SortOrder
    securityClearance?: SortOrder
    notes?: SortOrder
    isActive?: SortOrder
    lastLogin?: SortOrder
    passwordHash?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
  }

  export type DriverSumOrderByAggregateInput = {
    age?: SortOrder
    driverId?: SortOrder
    experienceYear?: SortOrder
    experienceMonth?: SortOrder
    salary?: SortOrder
    drivingSince?: SortOrder
    randomDrugAlcoholCount?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type EnumMaritalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalStatus | EnumMaritalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMaritalStatusWithAggregatesFilter<$PrismaModel> | $Enums.MaritalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMaritalStatusFilter<$PrismaModel>
    _max?: NestedEnumMaritalStatusFilter<$PrismaModel>
  }

  export type EnumBloodGroupWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodGroup | EnumBloodGroupFieldRefInput<$PrismaModel>
    in?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel>
    notIn?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel>
    not?: NestedEnumBloodGroupWithAggregatesFilter<$PrismaModel> | $Enums.BloodGroup
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBloodGroupFilter<$PrismaModel>
    _max?: NestedEnumBloodGroupFilter<$PrismaModel>
  }

  export type EnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobStatusFilter<$PrismaModel>
    _max?: NestedEnumJobStatusFilter<$PrismaModel>
  }

  export type EnumEducationLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EducationLevel | EnumEducationLevelFieldRefInput<$PrismaModel>
    in?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumEducationLevelWithAggregatesFilter<$PrismaModel> | $Enums.EducationLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEducationLevelFilter<$PrismaModel>
    _max?: NestedEnumEducationLevelFilter<$PrismaModel>
  }

  export type EnumPreviousJobWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PreviousJob | EnumPreviousJobFieldRefInput<$PrismaModel>
    in?: $Enums.PreviousJob[] | ListEnumPreviousJobFieldRefInput<$PrismaModel>
    notIn?: $Enums.PreviousJob[] | ListEnumPreviousJobFieldRefInput<$PrismaModel>
    not?: NestedEnumPreviousJobWithAggregatesFilter<$PrismaModel> | $Enums.PreviousJob
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPreviousJobFilter<$PrismaModel>
    _max?: NestedEnumPreviousJobFilter<$PrismaModel>
  }

  export type EnumVehicleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | EnumVehicleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleTypeWithAggregatesFilter<$PrismaModel> | $Enums.VehicleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVehicleTypeFilter<$PrismaModel>
    _max?: NestedEnumVehicleTypeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumYesNoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.YesNo | EnumYesNoFieldRefInput<$PrismaModel>
    in?: $Enums.YesNo[] | ListEnumYesNoFieldRefInput<$PrismaModel>
    notIn?: $Enums.YesNo[] | ListEnumYesNoFieldRefInput<$PrismaModel>
    not?: NestedEnumYesNoWithAggregatesFilter<$PrismaModel> | $Enums.YesNo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumYesNoFilter<$PrismaModel>
    _max?: NestedEnumYesNoFilter<$PrismaModel>
  }

  export type EnumLicenseTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LicenseType | EnumLicenseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LicenseType[] | ListEnumLicenseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LicenseType[] | ListEnumLicenseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLicenseTypeWithAggregatesFilter<$PrismaModel> | $Enums.LicenseType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLicenseTypeFilter<$PrismaModel>
    _max?: NestedEnumLicenseTypeFilter<$PrismaModel>
  }

  export type EnumCovidVaccinationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CovidVaccinationStatus | EnumCovidVaccinationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CovidVaccinationStatus[] | ListEnumCovidVaccinationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CovidVaccinationStatus[] | ListEnumCovidVaccinationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCovidVaccinationStatusWithAggregatesFilter<$PrismaModel> | $Enums.CovidVaccinationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCovidVaccinationStatusFilter<$PrismaModel>
    _max?: NestedEnumCovidVaccinationStatusFilter<$PrismaModel>
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

  export type EnumBoosterStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BoosterStatus | EnumBoosterStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.BoosterStatus[] | ListEnumBoosterStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BoosterStatus[] | ListEnumBoosterStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBoosterStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.BoosterStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumBoosterStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumBoosterStatusNullableFilter<$PrismaModel>
  }

  export type EnumMedicalStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MedicalStatus | EnumMedicalStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.MedicalStatus[] | ListEnumMedicalStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MedicalStatus[] | ListEnumMedicalStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMedicalStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.MedicalStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMedicalStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumMedicalStatusNullableFilter<$PrismaModel>
  }

  export type EnumDDCStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DDCStatus | EnumDDCStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.DDCStatus[] | ListEnumDDCStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DDCStatus[] | ListEnumDDCStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDDCStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.DDCStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDDCStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumDDCStatusNullableFilter<$PrismaModel>
  }

  export type EnumDDCResultNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DDCResult | EnumDDCResultFieldRefInput<$PrismaModel> | null
    in?: $Enums.DDCResult[] | ListEnumDDCResultFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DDCResult[] | ListEnumDDCResultFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDDCResultNullableWithAggregatesFilter<$PrismaModel> | $Enums.DDCResult | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDDCResultNullableFilter<$PrismaModel>
    _max?: NestedEnumDDCResultNullableFilter<$PrismaModel>
  }

  export type EnumDrugAlcoholStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DrugAlcoholStatus | EnumDrugAlcoholStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.DrugAlcoholStatus[] | ListEnumDrugAlcoholStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DrugAlcoholStatus[] | ListEnumDrugAlcoholStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDrugAlcoholStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.DrugAlcoholStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDrugAlcoholStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumDrugAlcoholStatusNullableFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DriverScalarRelationFilter = {
    is?: DriverWhereInput
    isNot?: DriverWhereInput
  }

  export type DriverWorkExperienceCountOrderByAggregateInput = {
    id?: SortOrder
    driverId?: SortOrder
    companyName?: SortOrder
    dateFrom?: SortOrder
    dateTo?: SortOrder
    jobTill?: SortOrder
    responsibility?: SortOrder
    salary?: SortOrder
    reasonForLeaving?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DriverWorkExperienceAvgOrderByAggregateInput = {
    salary?: SortOrder
  }

  export type DriverWorkExperienceMaxOrderByAggregateInput = {
    id?: SortOrder
    driverId?: SortOrder
    companyName?: SortOrder
    dateFrom?: SortOrder
    dateTo?: SortOrder
    jobTill?: SortOrder
    responsibility?: SortOrder
    salary?: SortOrder
    reasonForLeaving?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DriverWorkExperienceMinOrderByAggregateInput = {
    id?: SortOrder
    driverId?: SortOrder
    companyName?: SortOrder
    dateFrom?: SortOrder
    dateTo?: SortOrder
    jobTill?: SortOrder
    responsibility?: SortOrder
    salary?: SortOrder
    reasonForLeaving?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DriverWorkExperienceSumOrderByAggregateInput = {
    salary?: SortOrder
  }

  export type DriverReferenceCountOrderByAggregateInput = {
    id?: SortOrder
    driverId?: SortOrder
    referenceName?: SortOrder
    referenceAddress?: SortOrder
    referencePhone?: SortOrder
    referenceRelation?: SortOrder
    referenceEmail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DriverReferenceMaxOrderByAggregateInput = {
    id?: SortOrder
    driverId?: SortOrder
    referenceName?: SortOrder
    referenceAddress?: SortOrder
    referencePhone?: SortOrder
    referenceRelation?: SortOrder
    referenceEmail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DriverReferenceMinOrderByAggregateInput = {
    id?: SortOrder
    driverId?: SortOrder
    referenceName?: SortOrder
    referenceAddress?: SortOrder
    referencePhone?: SortOrder
    referenceRelation?: SortOrder
    referenceEmail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DriverDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    driverId?: SortOrder
    documentType?: SortOrder
    documentName?: SortOrder
    documentUrl?: SortOrder
    issueDate?: SortOrder
    expiryDate?: SortOrder
    isVerified?: SortOrder
    verifiedBy?: SortOrder
    verifiedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DriverDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    driverId?: SortOrder
    documentType?: SortOrder
    documentName?: SortOrder
    documentUrl?: SortOrder
    issueDate?: SortOrder
    expiryDate?: SortOrder
    isVerified?: SortOrder
    verifiedBy?: SortOrder
    verifiedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DriverDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    driverId?: SortOrder
    documentType?: SortOrder
    documentName?: SortOrder
    documentUrl?: SortOrder
    issueDate?: SortOrder
    expiryDate?: SortOrder
    isVerified?: SortOrder
    verifiedBy?: SortOrder
    verifiedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DriverViolationCountOrderByAggregateInput = {
    id?: SortOrder
    driverId?: SortOrder
    violationType?: SortOrder
    violationDate?: SortOrder
    location?: SortOrder
    description?: SortOrder
    fineAmount?: SortOrder
    isPaid?: SortOrder
    points?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DriverViolationAvgOrderByAggregateInput = {
    fineAmount?: SortOrder
    points?: SortOrder
  }

  export type DriverViolationMaxOrderByAggregateInput = {
    id?: SortOrder
    driverId?: SortOrder
    violationType?: SortOrder
    violationDate?: SortOrder
    location?: SortOrder
    description?: SortOrder
    fineAmount?: SortOrder
    isPaid?: SortOrder
    points?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DriverViolationMinOrderByAggregateInput = {
    id?: SortOrder
    driverId?: SortOrder
    violationType?: SortOrder
    violationDate?: SortOrder
    location?: SortOrder
    description?: SortOrder
    fineAmount?: SortOrder
    isPaid?: SortOrder
    points?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DriverViolationSumOrderByAggregateInput = {
    fineAmount?: SortOrder
    points?: SortOrder
  }

  export type DriverAssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    driverId?: SortOrder
    vehicleId?: SortOrder
    routeId?: SortOrder
    assignmentDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DriverAssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    driverId?: SortOrder
    vehicleId?: SortOrder
    routeId?: SortOrder
    assignmentDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DriverAssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    driverId?: SortOrder
    vehicleId?: SortOrder
    routeId?: SortOrder
    assignmentDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DriverListRelationFilter = {
    every?: DriverWhereInput
    some?: DriverWhereInput
    none?: DriverWhereInput
  }

  export type DriverOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    imageUrl?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    imageUrl?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    imageUrl?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DriverWorkExperienceCreateNestedManyWithoutDriverInput = {
    create?: XOR<DriverWorkExperienceCreateWithoutDriverInput, DriverWorkExperienceUncheckedCreateWithoutDriverInput> | DriverWorkExperienceCreateWithoutDriverInput[] | DriverWorkExperienceUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: DriverWorkExperienceCreateOrConnectWithoutDriverInput | DriverWorkExperienceCreateOrConnectWithoutDriverInput[]
    createMany?: DriverWorkExperienceCreateManyDriverInputEnvelope
    connect?: DriverWorkExperienceWhereUniqueInput | DriverWorkExperienceWhereUniqueInput[]
  }

  export type DriverReferenceCreateNestedManyWithoutDriverInput = {
    create?: XOR<DriverReferenceCreateWithoutDriverInput, DriverReferenceUncheckedCreateWithoutDriverInput> | DriverReferenceCreateWithoutDriverInput[] | DriverReferenceUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: DriverReferenceCreateOrConnectWithoutDriverInput | DriverReferenceCreateOrConnectWithoutDriverInput[]
    createMany?: DriverReferenceCreateManyDriverInputEnvelope
    connect?: DriverReferenceWhereUniqueInput | DriverReferenceWhereUniqueInput[]
  }

  export type DriverDocumentCreateNestedManyWithoutDriverInput = {
    create?: XOR<DriverDocumentCreateWithoutDriverInput, DriverDocumentUncheckedCreateWithoutDriverInput> | DriverDocumentCreateWithoutDriverInput[] | DriverDocumentUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: DriverDocumentCreateOrConnectWithoutDriverInput | DriverDocumentCreateOrConnectWithoutDriverInput[]
    createMany?: DriverDocumentCreateManyDriverInputEnvelope
    connect?: DriverDocumentWhereUniqueInput | DriverDocumentWhereUniqueInput[]
  }

  export type DriverViolationCreateNestedManyWithoutDriverInput = {
    create?: XOR<DriverViolationCreateWithoutDriverInput, DriverViolationUncheckedCreateWithoutDriverInput> | DriverViolationCreateWithoutDriverInput[] | DriverViolationUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: DriverViolationCreateOrConnectWithoutDriverInput | DriverViolationCreateOrConnectWithoutDriverInput[]
    createMany?: DriverViolationCreateManyDriverInputEnvelope
    connect?: DriverViolationWhereUniqueInput | DriverViolationWhereUniqueInput[]
  }

  export type DriverAssignmentCreateNestedManyWithoutDriverInput = {
    create?: XOR<DriverAssignmentCreateWithoutDriverInput, DriverAssignmentUncheckedCreateWithoutDriverInput> | DriverAssignmentCreateWithoutDriverInput[] | DriverAssignmentUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: DriverAssignmentCreateOrConnectWithoutDriverInput | DriverAssignmentCreateOrConnectWithoutDriverInput[]
    createMany?: DriverAssignmentCreateManyDriverInputEnvelope
    connect?: DriverAssignmentWhereUniqueInput | DriverAssignmentWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutCreatedDriversInput = {
    create?: XOR<UserCreateWithoutCreatedDriversInput, UserUncheckedCreateWithoutCreatedDriversInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedDriversInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUpdatedDriversInput = {
    create?: XOR<UserCreateWithoutUpdatedDriversInput, UserUncheckedCreateWithoutUpdatedDriversInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedDriversInput
    connect?: UserWhereUniqueInput
  }

  export type DriverWorkExperienceUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<DriverWorkExperienceCreateWithoutDriverInput, DriverWorkExperienceUncheckedCreateWithoutDriverInput> | DriverWorkExperienceCreateWithoutDriverInput[] | DriverWorkExperienceUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: DriverWorkExperienceCreateOrConnectWithoutDriverInput | DriverWorkExperienceCreateOrConnectWithoutDriverInput[]
    createMany?: DriverWorkExperienceCreateManyDriverInputEnvelope
    connect?: DriverWorkExperienceWhereUniqueInput | DriverWorkExperienceWhereUniqueInput[]
  }

  export type DriverReferenceUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<DriverReferenceCreateWithoutDriverInput, DriverReferenceUncheckedCreateWithoutDriverInput> | DriverReferenceCreateWithoutDriverInput[] | DriverReferenceUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: DriverReferenceCreateOrConnectWithoutDriverInput | DriverReferenceCreateOrConnectWithoutDriverInput[]
    createMany?: DriverReferenceCreateManyDriverInputEnvelope
    connect?: DriverReferenceWhereUniqueInput | DriverReferenceWhereUniqueInput[]
  }

  export type DriverDocumentUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<DriverDocumentCreateWithoutDriverInput, DriverDocumentUncheckedCreateWithoutDriverInput> | DriverDocumentCreateWithoutDriverInput[] | DriverDocumentUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: DriverDocumentCreateOrConnectWithoutDriverInput | DriverDocumentCreateOrConnectWithoutDriverInput[]
    createMany?: DriverDocumentCreateManyDriverInputEnvelope
    connect?: DriverDocumentWhereUniqueInput | DriverDocumentWhereUniqueInput[]
  }

  export type DriverViolationUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<DriverViolationCreateWithoutDriverInput, DriverViolationUncheckedCreateWithoutDriverInput> | DriverViolationCreateWithoutDriverInput[] | DriverViolationUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: DriverViolationCreateOrConnectWithoutDriverInput | DriverViolationCreateOrConnectWithoutDriverInput[]
    createMany?: DriverViolationCreateManyDriverInputEnvelope
    connect?: DriverViolationWhereUniqueInput | DriverViolationWhereUniqueInput[]
  }

  export type DriverAssignmentUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<DriverAssignmentCreateWithoutDriverInput, DriverAssignmentUncheckedCreateWithoutDriverInput> | DriverAssignmentCreateWithoutDriverInput[] | DriverAssignmentUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: DriverAssignmentCreateOrConnectWithoutDriverInput | DriverAssignmentCreateOrConnectWithoutDriverInput[]
    createMany?: DriverAssignmentCreateManyDriverInputEnvelope
    connect?: DriverAssignmentWhereUniqueInput | DriverAssignmentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type EnumMaritalStatusFieldUpdateOperationsInput = {
    set?: $Enums.MaritalStatus
  }

  export type EnumBloodGroupFieldUpdateOperationsInput = {
    set?: $Enums.BloodGroup
  }

  export type EnumJobStatusFieldUpdateOperationsInput = {
    set?: $Enums.JobStatus
  }

  export type EnumEducationLevelFieldUpdateOperationsInput = {
    set?: $Enums.EducationLevel
  }

  export type EnumPreviousJobFieldUpdateOperationsInput = {
    set?: $Enums.PreviousJob
  }

  export type EnumVehicleTypeFieldUpdateOperationsInput = {
    set?: $Enums.VehicleType
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumYesNoFieldUpdateOperationsInput = {
    set?: $Enums.YesNo
  }

  export type EnumLicenseTypeFieldUpdateOperationsInput = {
    set?: $Enums.LicenseType
  }

  export type EnumCovidVaccinationStatusFieldUpdateOperationsInput = {
    set?: $Enums.CovidVaccinationStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableEnumBoosterStatusFieldUpdateOperationsInput = {
    set?: $Enums.BoosterStatus | null
  }

  export type NullableEnumMedicalStatusFieldUpdateOperationsInput = {
    set?: $Enums.MedicalStatus | null
  }

  export type NullableEnumDDCStatusFieldUpdateOperationsInput = {
    set?: $Enums.DDCStatus | null
  }

  export type NullableEnumDDCResultFieldUpdateOperationsInput = {
    set?: $Enums.DDCResult | null
  }

  export type NullableEnumDrugAlcoholStatusFieldUpdateOperationsInput = {
    set?: $Enums.DrugAlcoholStatus | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DriverWorkExperienceUpdateManyWithoutDriverNestedInput = {
    create?: XOR<DriverWorkExperienceCreateWithoutDriverInput, DriverWorkExperienceUncheckedCreateWithoutDriverInput> | DriverWorkExperienceCreateWithoutDriverInput[] | DriverWorkExperienceUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: DriverWorkExperienceCreateOrConnectWithoutDriverInput | DriverWorkExperienceCreateOrConnectWithoutDriverInput[]
    upsert?: DriverWorkExperienceUpsertWithWhereUniqueWithoutDriverInput | DriverWorkExperienceUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: DriverWorkExperienceCreateManyDriverInputEnvelope
    set?: DriverWorkExperienceWhereUniqueInput | DriverWorkExperienceWhereUniqueInput[]
    disconnect?: DriverWorkExperienceWhereUniqueInput | DriverWorkExperienceWhereUniqueInput[]
    delete?: DriverWorkExperienceWhereUniqueInput | DriverWorkExperienceWhereUniqueInput[]
    connect?: DriverWorkExperienceWhereUniqueInput | DriverWorkExperienceWhereUniqueInput[]
    update?: DriverWorkExperienceUpdateWithWhereUniqueWithoutDriverInput | DriverWorkExperienceUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: DriverWorkExperienceUpdateManyWithWhereWithoutDriverInput | DriverWorkExperienceUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: DriverWorkExperienceScalarWhereInput | DriverWorkExperienceScalarWhereInput[]
  }

  export type DriverReferenceUpdateManyWithoutDriverNestedInput = {
    create?: XOR<DriverReferenceCreateWithoutDriverInput, DriverReferenceUncheckedCreateWithoutDriverInput> | DriverReferenceCreateWithoutDriverInput[] | DriverReferenceUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: DriverReferenceCreateOrConnectWithoutDriverInput | DriverReferenceCreateOrConnectWithoutDriverInput[]
    upsert?: DriverReferenceUpsertWithWhereUniqueWithoutDriverInput | DriverReferenceUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: DriverReferenceCreateManyDriverInputEnvelope
    set?: DriverReferenceWhereUniqueInput | DriverReferenceWhereUniqueInput[]
    disconnect?: DriverReferenceWhereUniqueInput | DriverReferenceWhereUniqueInput[]
    delete?: DriverReferenceWhereUniqueInput | DriverReferenceWhereUniqueInput[]
    connect?: DriverReferenceWhereUniqueInput | DriverReferenceWhereUniqueInput[]
    update?: DriverReferenceUpdateWithWhereUniqueWithoutDriverInput | DriverReferenceUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: DriverReferenceUpdateManyWithWhereWithoutDriverInput | DriverReferenceUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: DriverReferenceScalarWhereInput | DriverReferenceScalarWhereInput[]
  }

  export type DriverDocumentUpdateManyWithoutDriverNestedInput = {
    create?: XOR<DriverDocumentCreateWithoutDriverInput, DriverDocumentUncheckedCreateWithoutDriverInput> | DriverDocumentCreateWithoutDriverInput[] | DriverDocumentUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: DriverDocumentCreateOrConnectWithoutDriverInput | DriverDocumentCreateOrConnectWithoutDriverInput[]
    upsert?: DriverDocumentUpsertWithWhereUniqueWithoutDriverInput | DriverDocumentUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: DriverDocumentCreateManyDriverInputEnvelope
    set?: DriverDocumentWhereUniqueInput | DriverDocumentWhereUniqueInput[]
    disconnect?: DriverDocumentWhereUniqueInput | DriverDocumentWhereUniqueInput[]
    delete?: DriverDocumentWhereUniqueInput | DriverDocumentWhereUniqueInput[]
    connect?: DriverDocumentWhereUniqueInput | DriverDocumentWhereUniqueInput[]
    update?: DriverDocumentUpdateWithWhereUniqueWithoutDriverInput | DriverDocumentUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: DriverDocumentUpdateManyWithWhereWithoutDriverInput | DriverDocumentUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: DriverDocumentScalarWhereInput | DriverDocumentScalarWhereInput[]
  }

  export type DriverViolationUpdateManyWithoutDriverNestedInput = {
    create?: XOR<DriverViolationCreateWithoutDriverInput, DriverViolationUncheckedCreateWithoutDriverInput> | DriverViolationCreateWithoutDriverInput[] | DriverViolationUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: DriverViolationCreateOrConnectWithoutDriverInput | DriverViolationCreateOrConnectWithoutDriverInput[]
    upsert?: DriverViolationUpsertWithWhereUniqueWithoutDriverInput | DriverViolationUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: DriverViolationCreateManyDriverInputEnvelope
    set?: DriverViolationWhereUniqueInput | DriverViolationWhereUniqueInput[]
    disconnect?: DriverViolationWhereUniqueInput | DriverViolationWhereUniqueInput[]
    delete?: DriverViolationWhereUniqueInput | DriverViolationWhereUniqueInput[]
    connect?: DriverViolationWhereUniqueInput | DriverViolationWhereUniqueInput[]
    update?: DriverViolationUpdateWithWhereUniqueWithoutDriverInput | DriverViolationUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: DriverViolationUpdateManyWithWhereWithoutDriverInput | DriverViolationUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: DriverViolationScalarWhereInput | DriverViolationScalarWhereInput[]
  }

  export type DriverAssignmentUpdateManyWithoutDriverNestedInput = {
    create?: XOR<DriverAssignmentCreateWithoutDriverInput, DriverAssignmentUncheckedCreateWithoutDriverInput> | DriverAssignmentCreateWithoutDriverInput[] | DriverAssignmentUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: DriverAssignmentCreateOrConnectWithoutDriverInput | DriverAssignmentCreateOrConnectWithoutDriverInput[]
    upsert?: DriverAssignmentUpsertWithWhereUniqueWithoutDriverInput | DriverAssignmentUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: DriverAssignmentCreateManyDriverInputEnvelope
    set?: DriverAssignmentWhereUniqueInput | DriverAssignmentWhereUniqueInput[]
    disconnect?: DriverAssignmentWhereUniqueInput | DriverAssignmentWhereUniqueInput[]
    delete?: DriverAssignmentWhereUniqueInput | DriverAssignmentWhereUniqueInput[]
    connect?: DriverAssignmentWhereUniqueInput | DriverAssignmentWhereUniqueInput[]
    update?: DriverAssignmentUpdateWithWhereUniqueWithoutDriverInput | DriverAssignmentUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: DriverAssignmentUpdateManyWithWhereWithoutDriverInput | DriverAssignmentUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: DriverAssignmentScalarWhereInput | DriverAssignmentScalarWhereInput[]
  }

  export type UserUpdateOneWithoutCreatedDriversNestedInput = {
    create?: XOR<UserCreateWithoutCreatedDriversInput, UserUncheckedCreateWithoutCreatedDriversInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedDriversInput
    upsert?: UserUpsertWithoutCreatedDriversInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedDriversInput, UserUpdateWithoutCreatedDriversInput>, UserUncheckedUpdateWithoutCreatedDriversInput>
  }

  export type UserUpdateOneWithoutUpdatedDriversNestedInput = {
    create?: XOR<UserCreateWithoutUpdatedDriversInput, UserUncheckedCreateWithoutUpdatedDriversInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedDriversInput
    upsert?: UserUpsertWithoutUpdatedDriversInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUpdatedDriversInput, UserUpdateWithoutUpdatedDriversInput>, UserUncheckedUpdateWithoutUpdatedDriversInput>
  }

  export type DriverWorkExperienceUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: XOR<DriverWorkExperienceCreateWithoutDriverInput, DriverWorkExperienceUncheckedCreateWithoutDriverInput> | DriverWorkExperienceCreateWithoutDriverInput[] | DriverWorkExperienceUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: DriverWorkExperienceCreateOrConnectWithoutDriverInput | DriverWorkExperienceCreateOrConnectWithoutDriverInput[]
    upsert?: DriverWorkExperienceUpsertWithWhereUniqueWithoutDriverInput | DriverWorkExperienceUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: DriverWorkExperienceCreateManyDriverInputEnvelope
    set?: DriverWorkExperienceWhereUniqueInput | DriverWorkExperienceWhereUniqueInput[]
    disconnect?: DriverWorkExperienceWhereUniqueInput | DriverWorkExperienceWhereUniqueInput[]
    delete?: DriverWorkExperienceWhereUniqueInput | DriverWorkExperienceWhereUniqueInput[]
    connect?: DriverWorkExperienceWhereUniqueInput | DriverWorkExperienceWhereUniqueInput[]
    update?: DriverWorkExperienceUpdateWithWhereUniqueWithoutDriverInput | DriverWorkExperienceUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: DriverWorkExperienceUpdateManyWithWhereWithoutDriverInput | DriverWorkExperienceUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: DriverWorkExperienceScalarWhereInput | DriverWorkExperienceScalarWhereInput[]
  }

  export type DriverReferenceUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: XOR<DriverReferenceCreateWithoutDriverInput, DriverReferenceUncheckedCreateWithoutDriverInput> | DriverReferenceCreateWithoutDriverInput[] | DriverReferenceUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: DriverReferenceCreateOrConnectWithoutDriverInput | DriverReferenceCreateOrConnectWithoutDriverInput[]
    upsert?: DriverReferenceUpsertWithWhereUniqueWithoutDriverInput | DriverReferenceUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: DriverReferenceCreateManyDriverInputEnvelope
    set?: DriverReferenceWhereUniqueInput | DriverReferenceWhereUniqueInput[]
    disconnect?: DriverReferenceWhereUniqueInput | DriverReferenceWhereUniqueInput[]
    delete?: DriverReferenceWhereUniqueInput | DriverReferenceWhereUniqueInput[]
    connect?: DriverReferenceWhereUniqueInput | DriverReferenceWhereUniqueInput[]
    update?: DriverReferenceUpdateWithWhereUniqueWithoutDriverInput | DriverReferenceUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: DriverReferenceUpdateManyWithWhereWithoutDriverInput | DriverReferenceUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: DriverReferenceScalarWhereInput | DriverReferenceScalarWhereInput[]
  }

  export type DriverDocumentUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: XOR<DriverDocumentCreateWithoutDriverInput, DriverDocumentUncheckedCreateWithoutDriverInput> | DriverDocumentCreateWithoutDriverInput[] | DriverDocumentUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: DriverDocumentCreateOrConnectWithoutDriverInput | DriverDocumentCreateOrConnectWithoutDriverInput[]
    upsert?: DriverDocumentUpsertWithWhereUniqueWithoutDriverInput | DriverDocumentUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: DriverDocumentCreateManyDriverInputEnvelope
    set?: DriverDocumentWhereUniqueInput | DriverDocumentWhereUniqueInput[]
    disconnect?: DriverDocumentWhereUniqueInput | DriverDocumentWhereUniqueInput[]
    delete?: DriverDocumentWhereUniqueInput | DriverDocumentWhereUniqueInput[]
    connect?: DriverDocumentWhereUniqueInput | DriverDocumentWhereUniqueInput[]
    update?: DriverDocumentUpdateWithWhereUniqueWithoutDriverInput | DriverDocumentUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: DriverDocumentUpdateManyWithWhereWithoutDriverInput | DriverDocumentUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: DriverDocumentScalarWhereInput | DriverDocumentScalarWhereInput[]
  }

  export type DriverViolationUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: XOR<DriverViolationCreateWithoutDriverInput, DriverViolationUncheckedCreateWithoutDriverInput> | DriverViolationCreateWithoutDriverInput[] | DriverViolationUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: DriverViolationCreateOrConnectWithoutDriverInput | DriverViolationCreateOrConnectWithoutDriverInput[]
    upsert?: DriverViolationUpsertWithWhereUniqueWithoutDriverInput | DriverViolationUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: DriverViolationCreateManyDriverInputEnvelope
    set?: DriverViolationWhereUniqueInput | DriverViolationWhereUniqueInput[]
    disconnect?: DriverViolationWhereUniqueInput | DriverViolationWhereUniqueInput[]
    delete?: DriverViolationWhereUniqueInput | DriverViolationWhereUniqueInput[]
    connect?: DriverViolationWhereUniqueInput | DriverViolationWhereUniqueInput[]
    update?: DriverViolationUpdateWithWhereUniqueWithoutDriverInput | DriverViolationUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: DriverViolationUpdateManyWithWhereWithoutDriverInput | DriverViolationUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: DriverViolationScalarWhereInput | DriverViolationScalarWhereInput[]
  }

  export type DriverAssignmentUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: XOR<DriverAssignmentCreateWithoutDriverInput, DriverAssignmentUncheckedCreateWithoutDriverInput> | DriverAssignmentCreateWithoutDriverInput[] | DriverAssignmentUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: DriverAssignmentCreateOrConnectWithoutDriverInput | DriverAssignmentCreateOrConnectWithoutDriverInput[]
    upsert?: DriverAssignmentUpsertWithWhereUniqueWithoutDriverInput | DriverAssignmentUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: DriverAssignmentCreateManyDriverInputEnvelope
    set?: DriverAssignmentWhereUniqueInput | DriverAssignmentWhereUniqueInput[]
    disconnect?: DriverAssignmentWhereUniqueInput | DriverAssignmentWhereUniqueInput[]
    delete?: DriverAssignmentWhereUniqueInput | DriverAssignmentWhereUniqueInput[]
    connect?: DriverAssignmentWhereUniqueInput | DriverAssignmentWhereUniqueInput[]
    update?: DriverAssignmentUpdateWithWhereUniqueWithoutDriverInput | DriverAssignmentUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: DriverAssignmentUpdateManyWithWhereWithoutDriverInput | DriverAssignmentUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: DriverAssignmentScalarWhereInput | DriverAssignmentScalarWhereInput[]
  }

  export type DriverCreateNestedOneWithoutWorkExperiencesInput = {
    create?: XOR<DriverCreateWithoutWorkExperiencesInput, DriverUncheckedCreateWithoutWorkExperiencesInput>
    connectOrCreate?: DriverCreateOrConnectWithoutWorkExperiencesInput
    connect?: DriverWhereUniqueInput
  }

  export type DriverUpdateOneRequiredWithoutWorkExperiencesNestedInput = {
    create?: XOR<DriverCreateWithoutWorkExperiencesInput, DriverUncheckedCreateWithoutWorkExperiencesInput>
    connectOrCreate?: DriverCreateOrConnectWithoutWorkExperiencesInput
    upsert?: DriverUpsertWithoutWorkExperiencesInput
    connect?: DriverWhereUniqueInput
    update?: XOR<XOR<DriverUpdateToOneWithWhereWithoutWorkExperiencesInput, DriverUpdateWithoutWorkExperiencesInput>, DriverUncheckedUpdateWithoutWorkExperiencesInput>
  }

  export type DriverCreateNestedOneWithoutReferencesInput = {
    create?: XOR<DriverCreateWithoutReferencesInput, DriverUncheckedCreateWithoutReferencesInput>
    connectOrCreate?: DriverCreateOrConnectWithoutReferencesInput
    connect?: DriverWhereUniqueInput
  }

  export type DriverUpdateOneRequiredWithoutReferencesNestedInput = {
    create?: XOR<DriverCreateWithoutReferencesInput, DriverUncheckedCreateWithoutReferencesInput>
    connectOrCreate?: DriverCreateOrConnectWithoutReferencesInput
    upsert?: DriverUpsertWithoutReferencesInput
    connect?: DriverWhereUniqueInput
    update?: XOR<XOR<DriverUpdateToOneWithWhereWithoutReferencesInput, DriverUpdateWithoutReferencesInput>, DriverUncheckedUpdateWithoutReferencesInput>
  }

  export type DriverCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<DriverCreateWithoutDocumentsInput, DriverUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: DriverCreateOrConnectWithoutDocumentsInput
    connect?: DriverWhereUniqueInput
  }

  export type DriverUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<DriverCreateWithoutDocumentsInput, DriverUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: DriverCreateOrConnectWithoutDocumentsInput
    upsert?: DriverUpsertWithoutDocumentsInput
    connect?: DriverWhereUniqueInput
    update?: XOR<XOR<DriverUpdateToOneWithWhereWithoutDocumentsInput, DriverUpdateWithoutDocumentsInput>, DriverUncheckedUpdateWithoutDocumentsInput>
  }

  export type DriverCreateNestedOneWithoutViolationsInput = {
    create?: XOR<DriverCreateWithoutViolationsInput, DriverUncheckedCreateWithoutViolationsInput>
    connectOrCreate?: DriverCreateOrConnectWithoutViolationsInput
    connect?: DriverWhereUniqueInput
  }

  export type DriverUpdateOneRequiredWithoutViolationsNestedInput = {
    create?: XOR<DriverCreateWithoutViolationsInput, DriverUncheckedCreateWithoutViolationsInput>
    connectOrCreate?: DriverCreateOrConnectWithoutViolationsInput
    upsert?: DriverUpsertWithoutViolationsInput
    connect?: DriverWhereUniqueInput
    update?: XOR<XOR<DriverUpdateToOneWithWhereWithoutViolationsInput, DriverUpdateWithoutViolationsInput>, DriverUncheckedUpdateWithoutViolationsInput>
  }

  export type DriverCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<DriverCreateWithoutAssignmentsInput, DriverUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: DriverCreateOrConnectWithoutAssignmentsInput
    connect?: DriverWhereUniqueInput
  }

  export type DriverUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<DriverCreateWithoutAssignmentsInput, DriverUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: DriverCreateOrConnectWithoutAssignmentsInput
    upsert?: DriverUpsertWithoutAssignmentsInput
    connect?: DriverWhereUniqueInput
    update?: XOR<XOR<DriverUpdateToOneWithWhereWithoutAssignmentsInput, DriverUpdateWithoutAssignmentsInput>, DriverUncheckedUpdateWithoutAssignmentsInput>
  }

  export type DriverCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<DriverCreateWithoutCreatedByInput, DriverUncheckedCreateWithoutCreatedByInput> | DriverCreateWithoutCreatedByInput[] | DriverUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DriverCreateOrConnectWithoutCreatedByInput | DriverCreateOrConnectWithoutCreatedByInput[]
    createMany?: DriverCreateManyCreatedByInputEnvelope
    connect?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
  }

  export type DriverCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<DriverCreateWithoutUpdatedByInput, DriverUncheckedCreateWithoutUpdatedByInput> | DriverCreateWithoutUpdatedByInput[] | DriverUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: DriverCreateOrConnectWithoutUpdatedByInput | DriverCreateOrConnectWithoutUpdatedByInput[]
    createMany?: DriverCreateManyUpdatedByInputEnvelope
    connect?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
  }

  export type DriverUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<DriverCreateWithoutCreatedByInput, DriverUncheckedCreateWithoutCreatedByInput> | DriverCreateWithoutCreatedByInput[] | DriverUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DriverCreateOrConnectWithoutCreatedByInput | DriverCreateOrConnectWithoutCreatedByInput[]
    createMany?: DriverCreateManyCreatedByInputEnvelope
    connect?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
  }

  export type DriverUncheckedCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<DriverCreateWithoutUpdatedByInput, DriverUncheckedCreateWithoutUpdatedByInput> | DriverCreateWithoutUpdatedByInput[] | DriverUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: DriverCreateOrConnectWithoutUpdatedByInput | DriverCreateOrConnectWithoutUpdatedByInput[]
    createMany?: DriverCreateManyUpdatedByInputEnvelope
    connect?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DriverUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<DriverCreateWithoutCreatedByInput, DriverUncheckedCreateWithoutCreatedByInput> | DriverCreateWithoutCreatedByInput[] | DriverUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DriverCreateOrConnectWithoutCreatedByInput | DriverCreateOrConnectWithoutCreatedByInput[]
    upsert?: DriverUpsertWithWhereUniqueWithoutCreatedByInput | DriverUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: DriverCreateManyCreatedByInputEnvelope
    set?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    disconnect?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    delete?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    connect?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    update?: DriverUpdateWithWhereUniqueWithoutCreatedByInput | DriverUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: DriverUpdateManyWithWhereWithoutCreatedByInput | DriverUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: DriverScalarWhereInput | DriverScalarWhereInput[]
  }

  export type DriverUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<DriverCreateWithoutUpdatedByInput, DriverUncheckedCreateWithoutUpdatedByInput> | DriverCreateWithoutUpdatedByInput[] | DriverUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: DriverCreateOrConnectWithoutUpdatedByInput | DriverCreateOrConnectWithoutUpdatedByInput[]
    upsert?: DriverUpsertWithWhereUniqueWithoutUpdatedByInput | DriverUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: DriverCreateManyUpdatedByInputEnvelope
    set?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    disconnect?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    delete?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    connect?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    update?: DriverUpdateWithWhereUniqueWithoutUpdatedByInput | DriverUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: DriverUpdateManyWithWhereWithoutUpdatedByInput | DriverUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: DriverScalarWhereInput | DriverScalarWhereInput[]
  }

  export type DriverUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<DriverCreateWithoutCreatedByInput, DriverUncheckedCreateWithoutCreatedByInput> | DriverCreateWithoutCreatedByInput[] | DriverUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DriverCreateOrConnectWithoutCreatedByInput | DriverCreateOrConnectWithoutCreatedByInput[]
    upsert?: DriverUpsertWithWhereUniqueWithoutCreatedByInput | DriverUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: DriverCreateManyCreatedByInputEnvelope
    set?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    disconnect?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    delete?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    connect?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    update?: DriverUpdateWithWhereUniqueWithoutCreatedByInput | DriverUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: DriverUpdateManyWithWhereWithoutCreatedByInput | DriverUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: DriverScalarWhereInput | DriverScalarWhereInput[]
  }

  export type DriverUncheckedUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<DriverCreateWithoutUpdatedByInput, DriverUncheckedCreateWithoutUpdatedByInput> | DriverCreateWithoutUpdatedByInput[] | DriverUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: DriverCreateOrConnectWithoutUpdatedByInput | DriverCreateOrConnectWithoutUpdatedByInput[]
    upsert?: DriverUpsertWithWhereUniqueWithoutUpdatedByInput | DriverUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: DriverCreateManyUpdatedByInputEnvelope
    set?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    disconnect?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    delete?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    connect?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    update?: DriverUpdateWithWhereUniqueWithoutUpdatedByInput | DriverUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: DriverUpdateManyWithWhereWithoutUpdatedByInput | DriverUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: DriverScalarWhereInput | DriverScalarWhereInput[]
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedEnumMaritalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalStatus | EnumMaritalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMaritalStatusFilter<$PrismaModel> | $Enums.MaritalStatus
  }

  export type NestedEnumBloodGroupFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodGroup | EnumBloodGroupFieldRefInput<$PrismaModel>
    in?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel>
    notIn?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel>
    not?: NestedEnumBloodGroupFilter<$PrismaModel> | $Enums.BloodGroup
  }

  export type NestedEnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus
  }

  export type NestedEnumEducationLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.EducationLevel | EnumEducationLevelFieldRefInput<$PrismaModel>
    in?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumEducationLevelFilter<$PrismaModel> | $Enums.EducationLevel
  }

  export type NestedEnumPreviousJobFilter<$PrismaModel = never> = {
    equals?: $Enums.PreviousJob | EnumPreviousJobFieldRefInput<$PrismaModel>
    in?: $Enums.PreviousJob[] | ListEnumPreviousJobFieldRefInput<$PrismaModel>
    notIn?: $Enums.PreviousJob[] | ListEnumPreviousJobFieldRefInput<$PrismaModel>
    not?: NestedEnumPreviousJobFilter<$PrismaModel> | $Enums.PreviousJob
  }

  export type NestedEnumVehicleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | EnumVehicleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleTypeFilter<$PrismaModel> | $Enums.VehicleType
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumYesNoFilter<$PrismaModel = never> = {
    equals?: $Enums.YesNo | EnumYesNoFieldRefInput<$PrismaModel>
    in?: $Enums.YesNo[] | ListEnumYesNoFieldRefInput<$PrismaModel>
    notIn?: $Enums.YesNo[] | ListEnumYesNoFieldRefInput<$PrismaModel>
    not?: NestedEnumYesNoFilter<$PrismaModel> | $Enums.YesNo
  }

  export type NestedEnumLicenseTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LicenseType | EnumLicenseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LicenseType[] | ListEnumLicenseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LicenseType[] | ListEnumLicenseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLicenseTypeFilter<$PrismaModel> | $Enums.LicenseType
  }

  export type NestedEnumCovidVaccinationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CovidVaccinationStatus | EnumCovidVaccinationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CovidVaccinationStatus[] | ListEnumCovidVaccinationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CovidVaccinationStatus[] | ListEnumCovidVaccinationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCovidVaccinationStatusFilter<$PrismaModel> | $Enums.CovidVaccinationStatus
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

  export type NestedEnumBoosterStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BoosterStatus | EnumBoosterStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.BoosterStatus[] | ListEnumBoosterStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BoosterStatus[] | ListEnumBoosterStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBoosterStatusNullableFilter<$PrismaModel> | $Enums.BoosterStatus | null
  }

  export type NestedEnumMedicalStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MedicalStatus | EnumMedicalStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.MedicalStatus[] | ListEnumMedicalStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MedicalStatus[] | ListEnumMedicalStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMedicalStatusNullableFilter<$PrismaModel> | $Enums.MedicalStatus | null
  }

  export type NestedEnumDDCStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.DDCStatus | EnumDDCStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.DDCStatus[] | ListEnumDDCStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DDCStatus[] | ListEnumDDCStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDDCStatusNullableFilter<$PrismaModel> | $Enums.DDCStatus | null
  }

  export type NestedEnumDDCResultNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.DDCResult | EnumDDCResultFieldRefInput<$PrismaModel> | null
    in?: $Enums.DDCResult[] | ListEnumDDCResultFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DDCResult[] | ListEnumDDCResultFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDDCResultNullableFilter<$PrismaModel> | $Enums.DDCResult | null
  }

  export type NestedEnumDrugAlcoholStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.DrugAlcoholStatus | EnumDrugAlcoholStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.DrugAlcoholStatus[] | ListEnumDrugAlcoholStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DrugAlcoholStatus[] | ListEnumDrugAlcoholStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDrugAlcoholStatusNullableFilter<$PrismaModel> | $Enums.DrugAlcoholStatus | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedEnumMaritalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalStatus | EnumMaritalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMaritalStatusWithAggregatesFilter<$PrismaModel> | $Enums.MaritalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMaritalStatusFilter<$PrismaModel>
    _max?: NestedEnumMaritalStatusFilter<$PrismaModel>
  }

  export type NestedEnumBloodGroupWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodGroup | EnumBloodGroupFieldRefInput<$PrismaModel>
    in?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel>
    notIn?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel>
    not?: NestedEnumBloodGroupWithAggregatesFilter<$PrismaModel> | $Enums.BloodGroup
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBloodGroupFilter<$PrismaModel>
    _max?: NestedEnumBloodGroupFilter<$PrismaModel>
  }

  export type NestedEnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobStatusFilter<$PrismaModel>
    _max?: NestedEnumJobStatusFilter<$PrismaModel>
  }

  export type NestedEnumEducationLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EducationLevel | EnumEducationLevelFieldRefInput<$PrismaModel>
    in?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumEducationLevelWithAggregatesFilter<$PrismaModel> | $Enums.EducationLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEducationLevelFilter<$PrismaModel>
    _max?: NestedEnumEducationLevelFilter<$PrismaModel>
  }

  export type NestedEnumPreviousJobWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PreviousJob | EnumPreviousJobFieldRefInput<$PrismaModel>
    in?: $Enums.PreviousJob[] | ListEnumPreviousJobFieldRefInput<$PrismaModel>
    notIn?: $Enums.PreviousJob[] | ListEnumPreviousJobFieldRefInput<$PrismaModel>
    not?: NestedEnumPreviousJobWithAggregatesFilter<$PrismaModel> | $Enums.PreviousJob
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPreviousJobFilter<$PrismaModel>
    _max?: NestedEnumPreviousJobFilter<$PrismaModel>
  }

  export type NestedEnumVehicleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | EnumVehicleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleTypeWithAggregatesFilter<$PrismaModel> | $Enums.VehicleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVehicleTypeFilter<$PrismaModel>
    _max?: NestedEnumVehicleTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumYesNoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.YesNo | EnumYesNoFieldRefInput<$PrismaModel>
    in?: $Enums.YesNo[] | ListEnumYesNoFieldRefInput<$PrismaModel>
    notIn?: $Enums.YesNo[] | ListEnumYesNoFieldRefInput<$PrismaModel>
    not?: NestedEnumYesNoWithAggregatesFilter<$PrismaModel> | $Enums.YesNo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumYesNoFilter<$PrismaModel>
    _max?: NestedEnumYesNoFilter<$PrismaModel>
  }

  export type NestedEnumLicenseTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LicenseType | EnumLicenseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LicenseType[] | ListEnumLicenseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LicenseType[] | ListEnumLicenseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLicenseTypeWithAggregatesFilter<$PrismaModel> | $Enums.LicenseType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLicenseTypeFilter<$PrismaModel>
    _max?: NestedEnumLicenseTypeFilter<$PrismaModel>
  }

  export type NestedEnumCovidVaccinationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CovidVaccinationStatus | EnumCovidVaccinationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CovidVaccinationStatus[] | ListEnumCovidVaccinationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CovidVaccinationStatus[] | ListEnumCovidVaccinationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCovidVaccinationStatusWithAggregatesFilter<$PrismaModel> | $Enums.CovidVaccinationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCovidVaccinationStatusFilter<$PrismaModel>
    _max?: NestedEnumCovidVaccinationStatusFilter<$PrismaModel>
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

  export type NestedEnumBoosterStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BoosterStatus | EnumBoosterStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.BoosterStatus[] | ListEnumBoosterStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BoosterStatus[] | ListEnumBoosterStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBoosterStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.BoosterStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumBoosterStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumBoosterStatusNullableFilter<$PrismaModel>
  }

  export type NestedEnumMedicalStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MedicalStatus | EnumMedicalStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.MedicalStatus[] | ListEnumMedicalStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MedicalStatus[] | ListEnumMedicalStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMedicalStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.MedicalStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMedicalStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumMedicalStatusNullableFilter<$PrismaModel>
  }

  export type NestedEnumDDCStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DDCStatus | EnumDDCStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.DDCStatus[] | ListEnumDDCStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DDCStatus[] | ListEnumDDCStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDDCStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.DDCStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDDCStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumDDCStatusNullableFilter<$PrismaModel>
  }

  export type NestedEnumDDCResultNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DDCResult | EnumDDCResultFieldRefInput<$PrismaModel> | null
    in?: $Enums.DDCResult[] | ListEnumDDCResultFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DDCResult[] | ListEnumDDCResultFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDDCResultNullableWithAggregatesFilter<$PrismaModel> | $Enums.DDCResult | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDDCResultNullableFilter<$PrismaModel>
    _max?: NestedEnumDDCResultNullableFilter<$PrismaModel>
  }

  export type NestedEnumDrugAlcoholStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DrugAlcoholStatus | EnumDrugAlcoholStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.DrugAlcoholStatus[] | ListEnumDrugAlcoholStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DrugAlcoholStatus[] | ListEnumDrugAlcoholStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDrugAlcoholStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.DrugAlcoholStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDrugAlcoholStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumDrugAlcoholStatusNullableFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DriverWorkExperienceCreateWithoutDriverInput = {
    id?: string
    companyName: string
    dateFrom: Date | string
    dateTo?: Date | string | null
    jobTill: string
    responsibility: string
    salary?: number | null
    reasonForLeaving?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DriverWorkExperienceUncheckedCreateWithoutDriverInput = {
    id?: string
    companyName: string
    dateFrom: Date | string
    dateTo?: Date | string | null
    jobTill: string
    responsibility: string
    salary?: number | null
    reasonForLeaving?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DriverWorkExperienceCreateOrConnectWithoutDriverInput = {
    where: DriverWorkExperienceWhereUniqueInput
    create: XOR<DriverWorkExperienceCreateWithoutDriverInput, DriverWorkExperienceUncheckedCreateWithoutDriverInput>
  }

  export type DriverWorkExperienceCreateManyDriverInputEnvelope = {
    data: DriverWorkExperienceCreateManyDriverInput | DriverWorkExperienceCreateManyDriverInput[]
    skipDuplicates?: boolean
  }

  export type DriverReferenceCreateWithoutDriverInput = {
    id?: string
    referenceName: string
    referenceAddress: string
    referencePhone: string
    referenceRelation: string
    referenceEmail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DriverReferenceUncheckedCreateWithoutDriverInput = {
    id?: string
    referenceName: string
    referenceAddress: string
    referencePhone: string
    referenceRelation: string
    referenceEmail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DriverReferenceCreateOrConnectWithoutDriverInput = {
    where: DriverReferenceWhereUniqueInput
    create: XOR<DriverReferenceCreateWithoutDriverInput, DriverReferenceUncheckedCreateWithoutDriverInput>
  }

  export type DriverReferenceCreateManyDriverInputEnvelope = {
    data: DriverReferenceCreateManyDriverInput | DriverReferenceCreateManyDriverInput[]
    skipDuplicates?: boolean
  }

  export type DriverDocumentCreateWithoutDriverInput = {
    id?: string
    documentType: string
    documentName: string
    documentUrl: string
    issueDate?: Date | string | null
    expiryDate?: Date | string | null
    isVerified?: boolean
    verifiedBy?: string | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DriverDocumentUncheckedCreateWithoutDriverInput = {
    id?: string
    documentType: string
    documentName: string
    documentUrl: string
    issueDate?: Date | string | null
    expiryDate?: Date | string | null
    isVerified?: boolean
    verifiedBy?: string | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DriverDocumentCreateOrConnectWithoutDriverInput = {
    where: DriverDocumentWhereUniqueInput
    create: XOR<DriverDocumentCreateWithoutDriverInput, DriverDocumentUncheckedCreateWithoutDriverInput>
  }

  export type DriverDocumentCreateManyDriverInputEnvelope = {
    data: DriverDocumentCreateManyDriverInput | DriverDocumentCreateManyDriverInput[]
    skipDuplicates?: boolean
  }

  export type DriverViolationCreateWithoutDriverInput = {
    id?: string
    violationType: string
    violationDate: Date | string
    location?: string | null
    description?: string | null
    fineAmount?: number | null
    isPaid?: boolean
    points?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DriverViolationUncheckedCreateWithoutDriverInput = {
    id?: string
    violationType: string
    violationDate: Date | string
    location?: string | null
    description?: string | null
    fineAmount?: number | null
    isPaid?: boolean
    points?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DriverViolationCreateOrConnectWithoutDriverInput = {
    where: DriverViolationWhereUniqueInput
    create: XOR<DriverViolationCreateWithoutDriverInput, DriverViolationUncheckedCreateWithoutDriverInput>
  }

  export type DriverViolationCreateManyDriverInputEnvelope = {
    data: DriverViolationCreateManyDriverInput | DriverViolationCreateManyDriverInput[]
    skipDuplicates?: boolean
  }

  export type DriverAssignmentCreateWithoutDriverInput = {
    id?: string
    vehicleId?: string | null
    routeId?: string | null
    assignmentDate: Date | string
    endDate?: Date | string | null
    status: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DriverAssignmentUncheckedCreateWithoutDriverInput = {
    id?: string
    vehicleId?: string | null
    routeId?: string | null
    assignmentDate: Date | string
    endDate?: Date | string | null
    status: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DriverAssignmentCreateOrConnectWithoutDriverInput = {
    where: DriverAssignmentWhereUniqueInput
    create: XOR<DriverAssignmentCreateWithoutDriverInput, DriverAssignmentUncheckedCreateWithoutDriverInput>
  }

  export type DriverAssignmentCreateManyDriverInputEnvelope = {
    data: DriverAssignmentCreateManyDriverInput | DriverAssignmentCreateManyDriverInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutCreatedDriversInput = {
    id?: string
    clerkId: string
    email: string
    firstName: string
    lastName: string
    imageUrl?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedDrivers?: DriverCreateNestedManyWithoutUpdatedByInput
  }

  export type UserUncheckedCreateWithoutCreatedDriversInput = {
    id?: string
    clerkId: string
    email: string
    firstName: string
    lastName: string
    imageUrl?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedDrivers?: DriverUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type UserCreateOrConnectWithoutCreatedDriversInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedDriversInput, UserUncheckedCreateWithoutCreatedDriversInput>
  }

  export type UserCreateWithoutUpdatedDriversInput = {
    id?: string
    clerkId: string
    email: string
    firstName: string
    lastName: string
    imageUrl?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdDrivers?: DriverCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutUpdatedDriversInput = {
    id?: string
    clerkId: string
    email: string
    firstName: string
    lastName: string
    imageUrl?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdDrivers?: DriverUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutUpdatedDriversInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUpdatedDriversInput, UserUncheckedCreateWithoutUpdatedDriversInput>
  }

  export type DriverWorkExperienceUpsertWithWhereUniqueWithoutDriverInput = {
    where: DriverWorkExperienceWhereUniqueInput
    update: XOR<DriverWorkExperienceUpdateWithoutDriverInput, DriverWorkExperienceUncheckedUpdateWithoutDriverInput>
    create: XOR<DriverWorkExperienceCreateWithoutDriverInput, DriverWorkExperienceUncheckedCreateWithoutDriverInput>
  }

  export type DriverWorkExperienceUpdateWithWhereUniqueWithoutDriverInput = {
    where: DriverWorkExperienceWhereUniqueInput
    data: XOR<DriverWorkExperienceUpdateWithoutDriverInput, DriverWorkExperienceUncheckedUpdateWithoutDriverInput>
  }

  export type DriverWorkExperienceUpdateManyWithWhereWithoutDriverInput = {
    where: DriverWorkExperienceScalarWhereInput
    data: XOR<DriverWorkExperienceUpdateManyMutationInput, DriverWorkExperienceUncheckedUpdateManyWithoutDriverInput>
  }

  export type DriverWorkExperienceScalarWhereInput = {
    AND?: DriverWorkExperienceScalarWhereInput | DriverWorkExperienceScalarWhereInput[]
    OR?: DriverWorkExperienceScalarWhereInput[]
    NOT?: DriverWorkExperienceScalarWhereInput | DriverWorkExperienceScalarWhereInput[]
    id?: StringFilter<"DriverWorkExperience"> | string
    driverId?: StringFilter<"DriverWorkExperience"> | string
    companyName?: StringFilter<"DriverWorkExperience"> | string
    dateFrom?: DateTimeFilter<"DriverWorkExperience"> | Date | string
    dateTo?: DateTimeNullableFilter<"DriverWorkExperience"> | Date | string | null
    jobTill?: StringFilter<"DriverWorkExperience"> | string
    responsibility?: StringFilter<"DriverWorkExperience"> | string
    salary?: FloatNullableFilter<"DriverWorkExperience"> | number | null
    reasonForLeaving?: StringNullableFilter<"DriverWorkExperience"> | string | null
    createdAt?: DateTimeFilter<"DriverWorkExperience"> | Date | string
    updatedAt?: DateTimeFilter<"DriverWorkExperience"> | Date | string
  }

  export type DriverReferenceUpsertWithWhereUniqueWithoutDriverInput = {
    where: DriverReferenceWhereUniqueInput
    update: XOR<DriverReferenceUpdateWithoutDriverInput, DriverReferenceUncheckedUpdateWithoutDriverInput>
    create: XOR<DriverReferenceCreateWithoutDriverInput, DriverReferenceUncheckedCreateWithoutDriverInput>
  }

  export type DriverReferenceUpdateWithWhereUniqueWithoutDriverInput = {
    where: DriverReferenceWhereUniqueInput
    data: XOR<DriverReferenceUpdateWithoutDriverInput, DriverReferenceUncheckedUpdateWithoutDriverInput>
  }

  export type DriverReferenceUpdateManyWithWhereWithoutDriverInput = {
    where: DriverReferenceScalarWhereInput
    data: XOR<DriverReferenceUpdateManyMutationInput, DriverReferenceUncheckedUpdateManyWithoutDriverInput>
  }

  export type DriverReferenceScalarWhereInput = {
    AND?: DriverReferenceScalarWhereInput | DriverReferenceScalarWhereInput[]
    OR?: DriverReferenceScalarWhereInput[]
    NOT?: DriverReferenceScalarWhereInput | DriverReferenceScalarWhereInput[]
    id?: StringFilter<"DriverReference"> | string
    driverId?: StringFilter<"DriverReference"> | string
    referenceName?: StringFilter<"DriverReference"> | string
    referenceAddress?: StringFilter<"DriverReference"> | string
    referencePhone?: StringFilter<"DriverReference"> | string
    referenceRelation?: StringFilter<"DriverReference"> | string
    referenceEmail?: StringNullableFilter<"DriverReference"> | string | null
    createdAt?: DateTimeFilter<"DriverReference"> | Date | string
    updatedAt?: DateTimeFilter<"DriverReference"> | Date | string
  }

  export type DriverDocumentUpsertWithWhereUniqueWithoutDriverInput = {
    where: DriverDocumentWhereUniqueInput
    update: XOR<DriverDocumentUpdateWithoutDriverInput, DriverDocumentUncheckedUpdateWithoutDriverInput>
    create: XOR<DriverDocumentCreateWithoutDriverInput, DriverDocumentUncheckedCreateWithoutDriverInput>
  }

  export type DriverDocumentUpdateWithWhereUniqueWithoutDriverInput = {
    where: DriverDocumentWhereUniqueInput
    data: XOR<DriverDocumentUpdateWithoutDriverInput, DriverDocumentUncheckedUpdateWithoutDriverInput>
  }

  export type DriverDocumentUpdateManyWithWhereWithoutDriverInput = {
    where: DriverDocumentScalarWhereInput
    data: XOR<DriverDocumentUpdateManyMutationInput, DriverDocumentUncheckedUpdateManyWithoutDriverInput>
  }

  export type DriverDocumentScalarWhereInput = {
    AND?: DriverDocumentScalarWhereInput | DriverDocumentScalarWhereInput[]
    OR?: DriverDocumentScalarWhereInput[]
    NOT?: DriverDocumentScalarWhereInput | DriverDocumentScalarWhereInput[]
    id?: StringFilter<"DriverDocument"> | string
    driverId?: StringFilter<"DriverDocument"> | string
    documentType?: StringFilter<"DriverDocument"> | string
    documentName?: StringFilter<"DriverDocument"> | string
    documentUrl?: StringFilter<"DriverDocument"> | string
    issueDate?: DateTimeNullableFilter<"DriverDocument"> | Date | string | null
    expiryDate?: DateTimeNullableFilter<"DriverDocument"> | Date | string | null
    isVerified?: BoolFilter<"DriverDocument"> | boolean
    verifiedBy?: StringNullableFilter<"DriverDocument"> | string | null
    verifiedAt?: DateTimeNullableFilter<"DriverDocument"> | Date | string | null
    createdAt?: DateTimeFilter<"DriverDocument"> | Date | string
    updatedAt?: DateTimeFilter<"DriverDocument"> | Date | string
  }

  export type DriverViolationUpsertWithWhereUniqueWithoutDriverInput = {
    where: DriverViolationWhereUniqueInput
    update: XOR<DriverViolationUpdateWithoutDriverInput, DriverViolationUncheckedUpdateWithoutDriverInput>
    create: XOR<DriverViolationCreateWithoutDriverInput, DriverViolationUncheckedCreateWithoutDriverInput>
  }

  export type DriverViolationUpdateWithWhereUniqueWithoutDriverInput = {
    where: DriverViolationWhereUniqueInput
    data: XOR<DriverViolationUpdateWithoutDriverInput, DriverViolationUncheckedUpdateWithoutDriverInput>
  }

  export type DriverViolationUpdateManyWithWhereWithoutDriverInput = {
    where: DriverViolationScalarWhereInput
    data: XOR<DriverViolationUpdateManyMutationInput, DriverViolationUncheckedUpdateManyWithoutDriverInput>
  }

  export type DriverViolationScalarWhereInput = {
    AND?: DriverViolationScalarWhereInput | DriverViolationScalarWhereInput[]
    OR?: DriverViolationScalarWhereInput[]
    NOT?: DriverViolationScalarWhereInput | DriverViolationScalarWhereInput[]
    id?: StringFilter<"DriverViolation"> | string
    driverId?: StringFilter<"DriverViolation"> | string
    violationType?: StringFilter<"DriverViolation"> | string
    violationDate?: DateTimeFilter<"DriverViolation"> | Date | string
    location?: StringNullableFilter<"DriverViolation"> | string | null
    description?: StringNullableFilter<"DriverViolation"> | string | null
    fineAmount?: FloatNullableFilter<"DriverViolation"> | number | null
    isPaid?: BoolFilter<"DriverViolation"> | boolean
    points?: IntNullableFilter<"DriverViolation"> | number | null
    createdAt?: DateTimeFilter<"DriverViolation"> | Date | string
    updatedAt?: DateTimeFilter<"DriverViolation"> | Date | string
  }

  export type DriverAssignmentUpsertWithWhereUniqueWithoutDriverInput = {
    where: DriverAssignmentWhereUniqueInput
    update: XOR<DriverAssignmentUpdateWithoutDriverInput, DriverAssignmentUncheckedUpdateWithoutDriverInput>
    create: XOR<DriverAssignmentCreateWithoutDriverInput, DriverAssignmentUncheckedCreateWithoutDriverInput>
  }

  export type DriverAssignmentUpdateWithWhereUniqueWithoutDriverInput = {
    where: DriverAssignmentWhereUniqueInput
    data: XOR<DriverAssignmentUpdateWithoutDriverInput, DriverAssignmentUncheckedUpdateWithoutDriverInput>
  }

  export type DriverAssignmentUpdateManyWithWhereWithoutDriverInput = {
    where: DriverAssignmentScalarWhereInput
    data: XOR<DriverAssignmentUpdateManyMutationInput, DriverAssignmentUncheckedUpdateManyWithoutDriverInput>
  }

  export type DriverAssignmentScalarWhereInput = {
    AND?: DriverAssignmentScalarWhereInput | DriverAssignmentScalarWhereInput[]
    OR?: DriverAssignmentScalarWhereInput[]
    NOT?: DriverAssignmentScalarWhereInput | DriverAssignmentScalarWhereInput[]
    id?: StringFilter<"DriverAssignment"> | string
    driverId?: StringFilter<"DriverAssignment"> | string
    vehicleId?: StringNullableFilter<"DriverAssignment"> | string | null
    routeId?: StringNullableFilter<"DriverAssignment"> | string | null
    assignmentDate?: DateTimeFilter<"DriverAssignment"> | Date | string
    endDate?: DateTimeNullableFilter<"DriverAssignment"> | Date | string | null
    status?: StringFilter<"DriverAssignment"> | string
    notes?: StringNullableFilter<"DriverAssignment"> | string | null
    createdAt?: DateTimeFilter<"DriverAssignment"> | Date | string
    updatedAt?: DateTimeFilter<"DriverAssignment"> | Date | string
  }

  export type UserUpsertWithoutCreatedDriversInput = {
    update: XOR<UserUpdateWithoutCreatedDriversInput, UserUncheckedUpdateWithoutCreatedDriversInput>
    create: XOR<UserCreateWithoutCreatedDriversInput, UserUncheckedCreateWithoutCreatedDriversInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedDriversInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedDriversInput, UserUncheckedUpdateWithoutCreatedDriversInput>
  }

  export type UserUpdateWithoutCreatedDriversInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDrivers?: DriverUpdateManyWithoutUpdatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedDriversInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDrivers?: DriverUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type UserUpsertWithoutUpdatedDriversInput = {
    update: XOR<UserUpdateWithoutUpdatedDriversInput, UserUncheckedUpdateWithoutUpdatedDriversInput>
    create: XOR<UserCreateWithoutUpdatedDriversInput, UserUncheckedCreateWithoutUpdatedDriversInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUpdatedDriversInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUpdatedDriversInput, UserUncheckedUpdateWithoutUpdatedDriversInput>
  }

  export type UserUpdateWithoutUpdatedDriversInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdDrivers?: DriverUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutUpdatedDriversInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdDrivers?: DriverUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type DriverCreateWithoutWorkExperiencesInput = {
    id?: string
    driverImage?: string | null
    driverName: string
    fatherName: string
    dateOfBirth: Date | string
    age: number
    gender: $Enums.Gender
    placeOfBirth: string
    address: string
    maritalStatus: $Enums.MaritalStatus
    bloodGroup: $Enums.BloodGroup
    contactNo: string
    emergencyContact?: string | null
    emergencyContactName?: string | null
    driverId: number
    pkCode: string
    vehicleNo: string
    inductionDate: Date | string
    jobStatus?: $Enums.JobStatus
    education: $Enums.EducationLevel
    previousJob: $Enums.PreviousJob
    typeOfVehicle: $Enums.VehicleType
    experienceYear?: number | null
    experienceMonth?: number | null
    currentJob: string
    salary?: number | null
    cnicNo: string
    cnicFront: string
    cnicBack: string
    cnicIssueDate: Date | string
    cnicExpiryDate: Date | string
    cnicVerified?: $Enums.YesNo
    licenseNo: string
    licenseIssueDate: Date | string
    licenseExpiryDate: Date | string
    licenseStatus: string
    typeOfLicense: $Enums.LicenseType
    drivingSince: number
    licenseOnlineVerification?: $Enums.YesNo
    covid19Vaccination: $Enums.CovidVaccinationStatus
    firstDoseExpiry?: Date | string | null
    secondDoseExpiry?: Date | string | null
    boosterDose?: Date | string | null
    boosterStatus?: $Enums.BoosterStatus | null
    medicalCheck: $Enums.YesNo
    medicalIssueDate?: Date | string | null
    medicalExpiryDate?: Date | string | null
    medicalStatus?: $Enums.MedicalStatus | null
    medicalCertificate?: string | null
    ddcNHMP: $Enums.YesNo
    ddcNHMPIssueDate?: Date | string | null
    ddcNHMPExpiryDate?: Date | string | null
    ddcNHMPStatus?: $Enums.DDCStatus | null
    ddcNHMPResult?: $Enums.DDCResult | null
    ddcCertificate?: string | null
    randomDrugAlcoholDate?: Date | string | null
    randomDrugAlcoholCount?: number | null
    randomDrugAlcoholStatus?: $Enums.DrugAlcoholStatus | null
    drugTestCertificate?: string | null
    policeVF: $Enums.YesNo
    policeVFCertificate?: string | null
    tpplPolicy: $Enums.YesNo
    securityClearance?: $Enums.YesNo
    languages: JsonNullValueInput | InputJsonValue
    notes?: string | null
    isActive?: boolean
    lastLogin?: Date | string | null
    passwordHash?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    references?: DriverReferenceCreateNestedManyWithoutDriverInput
    documents?: DriverDocumentCreateNestedManyWithoutDriverInput
    violations?: DriverViolationCreateNestedManyWithoutDriverInput
    assignments?: DriverAssignmentCreateNestedManyWithoutDriverInput
    createdBy?: UserCreateNestedOneWithoutCreatedDriversInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedDriversInput
  }

  export type DriverUncheckedCreateWithoutWorkExperiencesInput = {
    id?: string
    driverImage?: string | null
    driverName: string
    fatherName: string
    dateOfBirth: Date | string
    age: number
    gender: $Enums.Gender
    placeOfBirth: string
    address: string
    maritalStatus: $Enums.MaritalStatus
    bloodGroup: $Enums.BloodGroup
    contactNo: string
    emergencyContact?: string | null
    emergencyContactName?: string | null
    driverId: number
    pkCode: string
    vehicleNo: string
    inductionDate: Date | string
    jobStatus?: $Enums.JobStatus
    education: $Enums.EducationLevel
    previousJob: $Enums.PreviousJob
    typeOfVehicle: $Enums.VehicleType
    experienceYear?: number | null
    experienceMonth?: number | null
    currentJob: string
    salary?: number | null
    cnicNo: string
    cnicFront: string
    cnicBack: string
    cnicIssueDate: Date | string
    cnicExpiryDate: Date | string
    cnicVerified?: $Enums.YesNo
    licenseNo: string
    licenseIssueDate: Date | string
    licenseExpiryDate: Date | string
    licenseStatus: string
    typeOfLicense: $Enums.LicenseType
    drivingSince: number
    licenseOnlineVerification?: $Enums.YesNo
    covid19Vaccination: $Enums.CovidVaccinationStatus
    firstDoseExpiry?: Date | string | null
    secondDoseExpiry?: Date | string | null
    boosterDose?: Date | string | null
    boosterStatus?: $Enums.BoosterStatus | null
    medicalCheck: $Enums.YesNo
    medicalIssueDate?: Date | string | null
    medicalExpiryDate?: Date | string | null
    medicalStatus?: $Enums.MedicalStatus | null
    medicalCertificate?: string | null
    ddcNHMP: $Enums.YesNo
    ddcNHMPIssueDate?: Date | string | null
    ddcNHMPExpiryDate?: Date | string | null
    ddcNHMPStatus?: $Enums.DDCStatus | null
    ddcNHMPResult?: $Enums.DDCResult | null
    ddcCertificate?: string | null
    randomDrugAlcoholDate?: Date | string | null
    randomDrugAlcoholCount?: number | null
    randomDrugAlcoholStatus?: $Enums.DrugAlcoholStatus | null
    drugTestCertificate?: string | null
    policeVF: $Enums.YesNo
    policeVFCertificate?: string | null
    tpplPolicy: $Enums.YesNo
    securityClearance?: $Enums.YesNo
    languages: JsonNullValueInput | InputJsonValue
    notes?: string | null
    isActive?: boolean
    lastLogin?: Date | string | null
    passwordHash?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById?: string | null
    updatedById?: string | null
    references?: DriverReferenceUncheckedCreateNestedManyWithoutDriverInput
    documents?: DriverDocumentUncheckedCreateNestedManyWithoutDriverInput
    violations?: DriverViolationUncheckedCreateNestedManyWithoutDriverInput
    assignments?: DriverAssignmentUncheckedCreateNestedManyWithoutDriverInput
  }

  export type DriverCreateOrConnectWithoutWorkExperiencesInput = {
    where: DriverWhereUniqueInput
    create: XOR<DriverCreateWithoutWorkExperiencesInput, DriverUncheckedCreateWithoutWorkExperiencesInput>
  }

  export type DriverUpsertWithoutWorkExperiencesInput = {
    update: XOR<DriverUpdateWithoutWorkExperiencesInput, DriverUncheckedUpdateWithoutWorkExperiencesInput>
    create: XOR<DriverCreateWithoutWorkExperiencesInput, DriverUncheckedCreateWithoutWorkExperiencesInput>
    where?: DriverWhereInput
  }

  export type DriverUpdateToOneWithWhereWithoutWorkExperiencesInput = {
    where?: DriverWhereInput
    data: XOR<DriverUpdateWithoutWorkExperiencesInput, DriverUncheckedUpdateWithoutWorkExperiencesInput>
  }

  export type DriverUpdateWithoutWorkExperiencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverImage?: NullableStringFieldUpdateOperationsInput | string | null
    driverName?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    placeOfBirth?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    bloodGroup?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    contactNo?: StringFieldUpdateOperationsInput | string
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    driverId?: IntFieldUpdateOperationsInput | number
    pkCode?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    inductionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jobStatus?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    education?: EnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel
    previousJob?: EnumPreviousJobFieldUpdateOperationsInput | $Enums.PreviousJob
    typeOfVehicle?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    experienceYear?: NullableIntFieldUpdateOperationsInput | number | null
    experienceMonth?: NullableIntFieldUpdateOperationsInput | number | null
    currentJob?: StringFieldUpdateOperationsInput | string
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    cnicNo?: StringFieldUpdateOperationsInput | string
    cnicFront?: StringFieldUpdateOperationsInput | string
    cnicBack?: StringFieldUpdateOperationsInput | string
    cnicIssueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cnicExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cnicVerified?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    licenseNo?: StringFieldUpdateOperationsInput | string
    licenseIssueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    licenseExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    licenseStatus?: StringFieldUpdateOperationsInput | string
    typeOfLicense?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    drivingSince?: IntFieldUpdateOperationsInput | number
    licenseOnlineVerification?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    covid19Vaccination?: EnumCovidVaccinationStatusFieldUpdateOperationsInput | $Enums.CovidVaccinationStatus
    firstDoseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondDoseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boosterDose?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boosterStatus?: NullableEnumBoosterStatusFieldUpdateOperationsInput | $Enums.BoosterStatus | null
    medicalCheck?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    medicalIssueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalStatus?: NullableEnumMedicalStatusFieldUpdateOperationsInput | $Enums.MedicalStatus | null
    medicalCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    ddcNHMP?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    ddcNHMPIssueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ddcNHMPExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ddcNHMPStatus?: NullableEnumDDCStatusFieldUpdateOperationsInput | $Enums.DDCStatus | null
    ddcNHMPResult?: NullableEnumDDCResultFieldUpdateOperationsInput | $Enums.DDCResult | null
    ddcCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    randomDrugAlcoholDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    randomDrugAlcoholCount?: NullableIntFieldUpdateOperationsInput | number | null
    randomDrugAlcoholStatus?: NullableEnumDrugAlcoholStatusFieldUpdateOperationsInput | $Enums.DrugAlcoholStatus | null
    drugTestCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    policeVF?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    policeVFCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    tpplPolicy?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    securityClearance?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    languages?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    references?: DriverReferenceUpdateManyWithoutDriverNestedInput
    documents?: DriverDocumentUpdateManyWithoutDriverNestedInput
    violations?: DriverViolationUpdateManyWithoutDriverNestedInput
    assignments?: DriverAssignmentUpdateManyWithoutDriverNestedInput
    createdBy?: UserUpdateOneWithoutCreatedDriversNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedDriversNestedInput
  }

  export type DriverUncheckedUpdateWithoutWorkExperiencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverImage?: NullableStringFieldUpdateOperationsInput | string | null
    driverName?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    placeOfBirth?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    bloodGroup?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    contactNo?: StringFieldUpdateOperationsInput | string
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    driverId?: IntFieldUpdateOperationsInput | number
    pkCode?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    inductionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jobStatus?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    education?: EnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel
    previousJob?: EnumPreviousJobFieldUpdateOperationsInput | $Enums.PreviousJob
    typeOfVehicle?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    experienceYear?: NullableIntFieldUpdateOperationsInput | number | null
    experienceMonth?: NullableIntFieldUpdateOperationsInput | number | null
    currentJob?: StringFieldUpdateOperationsInput | string
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    cnicNo?: StringFieldUpdateOperationsInput | string
    cnicFront?: StringFieldUpdateOperationsInput | string
    cnicBack?: StringFieldUpdateOperationsInput | string
    cnicIssueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cnicExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cnicVerified?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    licenseNo?: StringFieldUpdateOperationsInput | string
    licenseIssueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    licenseExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    licenseStatus?: StringFieldUpdateOperationsInput | string
    typeOfLicense?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    drivingSince?: IntFieldUpdateOperationsInput | number
    licenseOnlineVerification?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    covid19Vaccination?: EnumCovidVaccinationStatusFieldUpdateOperationsInput | $Enums.CovidVaccinationStatus
    firstDoseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondDoseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boosterDose?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boosterStatus?: NullableEnumBoosterStatusFieldUpdateOperationsInput | $Enums.BoosterStatus | null
    medicalCheck?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    medicalIssueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalStatus?: NullableEnumMedicalStatusFieldUpdateOperationsInput | $Enums.MedicalStatus | null
    medicalCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    ddcNHMP?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    ddcNHMPIssueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ddcNHMPExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ddcNHMPStatus?: NullableEnumDDCStatusFieldUpdateOperationsInput | $Enums.DDCStatus | null
    ddcNHMPResult?: NullableEnumDDCResultFieldUpdateOperationsInput | $Enums.DDCResult | null
    ddcCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    randomDrugAlcoholDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    randomDrugAlcoholCount?: NullableIntFieldUpdateOperationsInput | number | null
    randomDrugAlcoholStatus?: NullableEnumDrugAlcoholStatusFieldUpdateOperationsInput | $Enums.DrugAlcoholStatus | null
    drugTestCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    policeVF?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    policeVFCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    tpplPolicy?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    securityClearance?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    languages?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    references?: DriverReferenceUncheckedUpdateManyWithoutDriverNestedInput
    documents?: DriverDocumentUncheckedUpdateManyWithoutDriverNestedInput
    violations?: DriverViolationUncheckedUpdateManyWithoutDriverNestedInput
    assignments?: DriverAssignmentUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type DriverCreateWithoutReferencesInput = {
    id?: string
    driverImage?: string | null
    driverName: string
    fatherName: string
    dateOfBirth: Date | string
    age: number
    gender: $Enums.Gender
    placeOfBirth: string
    address: string
    maritalStatus: $Enums.MaritalStatus
    bloodGroup: $Enums.BloodGroup
    contactNo: string
    emergencyContact?: string | null
    emergencyContactName?: string | null
    driverId: number
    pkCode: string
    vehicleNo: string
    inductionDate: Date | string
    jobStatus?: $Enums.JobStatus
    education: $Enums.EducationLevel
    previousJob: $Enums.PreviousJob
    typeOfVehicle: $Enums.VehicleType
    experienceYear?: number | null
    experienceMonth?: number | null
    currentJob: string
    salary?: number | null
    cnicNo: string
    cnicFront: string
    cnicBack: string
    cnicIssueDate: Date | string
    cnicExpiryDate: Date | string
    cnicVerified?: $Enums.YesNo
    licenseNo: string
    licenseIssueDate: Date | string
    licenseExpiryDate: Date | string
    licenseStatus: string
    typeOfLicense: $Enums.LicenseType
    drivingSince: number
    licenseOnlineVerification?: $Enums.YesNo
    covid19Vaccination: $Enums.CovidVaccinationStatus
    firstDoseExpiry?: Date | string | null
    secondDoseExpiry?: Date | string | null
    boosterDose?: Date | string | null
    boosterStatus?: $Enums.BoosterStatus | null
    medicalCheck: $Enums.YesNo
    medicalIssueDate?: Date | string | null
    medicalExpiryDate?: Date | string | null
    medicalStatus?: $Enums.MedicalStatus | null
    medicalCertificate?: string | null
    ddcNHMP: $Enums.YesNo
    ddcNHMPIssueDate?: Date | string | null
    ddcNHMPExpiryDate?: Date | string | null
    ddcNHMPStatus?: $Enums.DDCStatus | null
    ddcNHMPResult?: $Enums.DDCResult | null
    ddcCertificate?: string | null
    randomDrugAlcoholDate?: Date | string | null
    randomDrugAlcoholCount?: number | null
    randomDrugAlcoholStatus?: $Enums.DrugAlcoholStatus | null
    drugTestCertificate?: string | null
    policeVF: $Enums.YesNo
    policeVFCertificate?: string | null
    tpplPolicy: $Enums.YesNo
    securityClearance?: $Enums.YesNo
    languages: JsonNullValueInput | InputJsonValue
    notes?: string | null
    isActive?: boolean
    lastLogin?: Date | string | null
    passwordHash?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workExperiences?: DriverWorkExperienceCreateNestedManyWithoutDriverInput
    documents?: DriverDocumentCreateNestedManyWithoutDriverInput
    violations?: DriverViolationCreateNestedManyWithoutDriverInput
    assignments?: DriverAssignmentCreateNestedManyWithoutDriverInput
    createdBy?: UserCreateNestedOneWithoutCreatedDriversInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedDriversInput
  }

  export type DriverUncheckedCreateWithoutReferencesInput = {
    id?: string
    driverImage?: string | null
    driverName: string
    fatherName: string
    dateOfBirth: Date | string
    age: number
    gender: $Enums.Gender
    placeOfBirth: string
    address: string
    maritalStatus: $Enums.MaritalStatus
    bloodGroup: $Enums.BloodGroup
    contactNo: string
    emergencyContact?: string | null
    emergencyContactName?: string | null
    driverId: number
    pkCode: string
    vehicleNo: string
    inductionDate: Date | string
    jobStatus?: $Enums.JobStatus
    education: $Enums.EducationLevel
    previousJob: $Enums.PreviousJob
    typeOfVehicle: $Enums.VehicleType
    experienceYear?: number | null
    experienceMonth?: number | null
    currentJob: string
    salary?: number | null
    cnicNo: string
    cnicFront: string
    cnicBack: string
    cnicIssueDate: Date | string
    cnicExpiryDate: Date | string
    cnicVerified?: $Enums.YesNo
    licenseNo: string
    licenseIssueDate: Date | string
    licenseExpiryDate: Date | string
    licenseStatus: string
    typeOfLicense: $Enums.LicenseType
    drivingSince: number
    licenseOnlineVerification?: $Enums.YesNo
    covid19Vaccination: $Enums.CovidVaccinationStatus
    firstDoseExpiry?: Date | string | null
    secondDoseExpiry?: Date | string | null
    boosterDose?: Date | string | null
    boosterStatus?: $Enums.BoosterStatus | null
    medicalCheck: $Enums.YesNo
    medicalIssueDate?: Date | string | null
    medicalExpiryDate?: Date | string | null
    medicalStatus?: $Enums.MedicalStatus | null
    medicalCertificate?: string | null
    ddcNHMP: $Enums.YesNo
    ddcNHMPIssueDate?: Date | string | null
    ddcNHMPExpiryDate?: Date | string | null
    ddcNHMPStatus?: $Enums.DDCStatus | null
    ddcNHMPResult?: $Enums.DDCResult | null
    ddcCertificate?: string | null
    randomDrugAlcoholDate?: Date | string | null
    randomDrugAlcoholCount?: number | null
    randomDrugAlcoholStatus?: $Enums.DrugAlcoholStatus | null
    drugTestCertificate?: string | null
    policeVF: $Enums.YesNo
    policeVFCertificate?: string | null
    tpplPolicy: $Enums.YesNo
    securityClearance?: $Enums.YesNo
    languages: JsonNullValueInput | InputJsonValue
    notes?: string | null
    isActive?: boolean
    lastLogin?: Date | string | null
    passwordHash?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById?: string | null
    updatedById?: string | null
    workExperiences?: DriverWorkExperienceUncheckedCreateNestedManyWithoutDriverInput
    documents?: DriverDocumentUncheckedCreateNestedManyWithoutDriverInput
    violations?: DriverViolationUncheckedCreateNestedManyWithoutDriverInput
    assignments?: DriverAssignmentUncheckedCreateNestedManyWithoutDriverInput
  }

  export type DriverCreateOrConnectWithoutReferencesInput = {
    where: DriverWhereUniqueInput
    create: XOR<DriverCreateWithoutReferencesInput, DriverUncheckedCreateWithoutReferencesInput>
  }

  export type DriverUpsertWithoutReferencesInput = {
    update: XOR<DriverUpdateWithoutReferencesInput, DriverUncheckedUpdateWithoutReferencesInput>
    create: XOR<DriverCreateWithoutReferencesInput, DriverUncheckedCreateWithoutReferencesInput>
    where?: DriverWhereInput
  }

  export type DriverUpdateToOneWithWhereWithoutReferencesInput = {
    where?: DriverWhereInput
    data: XOR<DriverUpdateWithoutReferencesInput, DriverUncheckedUpdateWithoutReferencesInput>
  }

  export type DriverUpdateWithoutReferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverImage?: NullableStringFieldUpdateOperationsInput | string | null
    driverName?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    placeOfBirth?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    bloodGroup?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    contactNo?: StringFieldUpdateOperationsInput | string
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    driverId?: IntFieldUpdateOperationsInput | number
    pkCode?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    inductionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jobStatus?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    education?: EnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel
    previousJob?: EnumPreviousJobFieldUpdateOperationsInput | $Enums.PreviousJob
    typeOfVehicle?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    experienceYear?: NullableIntFieldUpdateOperationsInput | number | null
    experienceMonth?: NullableIntFieldUpdateOperationsInput | number | null
    currentJob?: StringFieldUpdateOperationsInput | string
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    cnicNo?: StringFieldUpdateOperationsInput | string
    cnicFront?: StringFieldUpdateOperationsInput | string
    cnicBack?: StringFieldUpdateOperationsInput | string
    cnicIssueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cnicExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cnicVerified?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    licenseNo?: StringFieldUpdateOperationsInput | string
    licenseIssueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    licenseExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    licenseStatus?: StringFieldUpdateOperationsInput | string
    typeOfLicense?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    drivingSince?: IntFieldUpdateOperationsInput | number
    licenseOnlineVerification?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    covid19Vaccination?: EnumCovidVaccinationStatusFieldUpdateOperationsInput | $Enums.CovidVaccinationStatus
    firstDoseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondDoseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boosterDose?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boosterStatus?: NullableEnumBoosterStatusFieldUpdateOperationsInput | $Enums.BoosterStatus | null
    medicalCheck?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    medicalIssueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalStatus?: NullableEnumMedicalStatusFieldUpdateOperationsInput | $Enums.MedicalStatus | null
    medicalCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    ddcNHMP?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    ddcNHMPIssueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ddcNHMPExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ddcNHMPStatus?: NullableEnumDDCStatusFieldUpdateOperationsInput | $Enums.DDCStatus | null
    ddcNHMPResult?: NullableEnumDDCResultFieldUpdateOperationsInput | $Enums.DDCResult | null
    ddcCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    randomDrugAlcoholDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    randomDrugAlcoholCount?: NullableIntFieldUpdateOperationsInput | number | null
    randomDrugAlcoholStatus?: NullableEnumDrugAlcoholStatusFieldUpdateOperationsInput | $Enums.DrugAlcoholStatus | null
    drugTestCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    policeVF?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    policeVFCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    tpplPolicy?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    securityClearance?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    languages?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workExperiences?: DriverWorkExperienceUpdateManyWithoutDriverNestedInput
    documents?: DriverDocumentUpdateManyWithoutDriverNestedInput
    violations?: DriverViolationUpdateManyWithoutDriverNestedInput
    assignments?: DriverAssignmentUpdateManyWithoutDriverNestedInput
    createdBy?: UserUpdateOneWithoutCreatedDriversNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedDriversNestedInput
  }

  export type DriverUncheckedUpdateWithoutReferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverImage?: NullableStringFieldUpdateOperationsInput | string | null
    driverName?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    placeOfBirth?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    bloodGroup?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    contactNo?: StringFieldUpdateOperationsInput | string
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    driverId?: IntFieldUpdateOperationsInput | number
    pkCode?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    inductionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jobStatus?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    education?: EnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel
    previousJob?: EnumPreviousJobFieldUpdateOperationsInput | $Enums.PreviousJob
    typeOfVehicle?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    experienceYear?: NullableIntFieldUpdateOperationsInput | number | null
    experienceMonth?: NullableIntFieldUpdateOperationsInput | number | null
    currentJob?: StringFieldUpdateOperationsInput | string
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    cnicNo?: StringFieldUpdateOperationsInput | string
    cnicFront?: StringFieldUpdateOperationsInput | string
    cnicBack?: StringFieldUpdateOperationsInput | string
    cnicIssueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cnicExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cnicVerified?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    licenseNo?: StringFieldUpdateOperationsInput | string
    licenseIssueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    licenseExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    licenseStatus?: StringFieldUpdateOperationsInput | string
    typeOfLicense?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    drivingSince?: IntFieldUpdateOperationsInput | number
    licenseOnlineVerification?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    covid19Vaccination?: EnumCovidVaccinationStatusFieldUpdateOperationsInput | $Enums.CovidVaccinationStatus
    firstDoseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondDoseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boosterDose?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boosterStatus?: NullableEnumBoosterStatusFieldUpdateOperationsInput | $Enums.BoosterStatus | null
    medicalCheck?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    medicalIssueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalStatus?: NullableEnumMedicalStatusFieldUpdateOperationsInput | $Enums.MedicalStatus | null
    medicalCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    ddcNHMP?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    ddcNHMPIssueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ddcNHMPExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ddcNHMPStatus?: NullableEnumDDCStatusFieldUpdateOperationsInput | $Enums.DDCStatus | null
    ddcNHMPResult?: NullableEnumDDCResultFieldUpdateOperationsInput | $Enums.DDCResult | null
    ddcCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    randomDrugAlcoholDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    randomDrugAlcoholCount?: NullableIntFieldUpdateOperationsInput | number | null
    randomDrugAlcoholStatus?: NullableEnumDrugAlcoholStatusFieldUpdateOperationsInput | $Enums.DrugAlcoholStatus | null
    drugTestCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    policeVF?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    policeVFCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    tpplPolicy?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    securityClearance?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    languages?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    workExperiences?: DriverWorkExperienceUncheckedUpdateManyWithoutDriverNestedInput
    documents?: DriverDocumentUncheckedUpdateManyWithoutDriverNestedInput
    violations?: DriverViolationUncheckedUpdateManyWithoutDriverNestedInput
    assignments?: DriverAssignmentUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type DriverCreateWithoutDocumentsInput = {
    id?: string
    driverImage?: string | null
    driverName: string
    fatherName: string
    dateOfBirth: Date | string
    age: number
    gender: $Enums.Gender
    placeOfBirth: string
    address: string
    maritalStatus: $Enums.MaritalStatus
    bloodGroup: $Enums.BloodGroup
    contactNo: string
    emergencyContact?: string | null
    emergencyContactName?: string | null
    driverId: number
    pkCode: string
    vehicleNo: string
    inductionDate: Date | string
    jobStatus?: $Enums.JobStatus
    education: $Enums.EducationLevel
    previousJob: $Enums.PreviousJob
    typeOfVehicle: $Enums.VehicleType
    experienceYear?: number | null
    experienceMonth?: number | null
    currentJob: string
    salary?: number | null
    cnicNo: string
    cnicFront: string
    cnicBack: string
    cnicIssueDate: Date | string
    cnicExpiryDate: Date | string
    cnicVerified?: $Enums.YesNo
    licenseNo: string
    licenseIssueDate: Date | string
    licenseExpiryDate: Date | string
    licenseStatus: string
    typeOfLicense: $Enums.LicenseType
    drivingSince: number
    licenseOnlineVerification?: $Enums.YesNo
    covid19Vaccination: $Enums.CovidVaccinationStatus
    firstDoseExpiry?: Date | string | null
    secondDoseExpiry?: Date | string | null
    boosterDose?: Date | string | null
    boosterStatus?: $Enums.BoosterStatus | null
    medicalCheck: $Enums.YesNo
    medicalIssueDate?: Date | string | null
    medicalExpiryDate?: Date | string | null
    medicalStatus?: $Enums.MedicalStatus | null
    medicalCertificate?: string | null
    ddcNHMP: $Enums.YesNo
    ddcNHMPIssueDate?: Date | string | null
    ddcNHMPExpiryDate?: Date | string | null
    ddcNHMPStatus?: $Enums.DDCStatus | null
    ddcNHMPResult?: $Enums.DDCResult | null
    ddcCertificate?: string | null
    randomDrugAlcoholDate?: Date | string | null
    randomDrugAlcoholCount?: number | null
    randomDrugAlcoholStatus?: $Enums.DrugAlcoholStatus | null
    drugTestCertificate?: string | null
    policeVF: $Enums.YesNo
    policeVFCertificate?: string | null
    tpplPolicy: $Enums.YesNo
    securityClearance?: $Enums.YesNo
    languages: JsonNullValueInput | InputJsonValue
    notes?: string | null
    isActive?: boolean
    lastLogin?: Date | string | null
    passwordHash?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workExperiences?: DriverWorkExperienceCreateNestedManyWithoutDriverInput
    references?: DriverReferenceCreateNestedManyWithoutDriverInput
    violations?: DriverViolationCreateNestedManyWithoutDriverInput
    assignments?: DriverAssignmentCreateNestedManyWithoutDriverInput
    createdBy?: UserCreateNestedOneWithoutCreatedDriversInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedDriversInput
  }

  export type DriverUncheckedCreateWithoutDocumentsInput = {
    id?: string
    driverImage?: string | null
    driverName: string
    fatherName: string
    dateOfBirth: Date | string
    age: number
    gender: $Enums.Gender
    placeOfBirth: string
    address: string
    maritalStatus: $Enums.MaritalStatus
    bloodGroup: $Enums.BloodGroup
    contactNo: string
    emergencyContact?: string | null
    emergencyContactName?: string | null
    driverId: number
    pkCode: string
    vehicleNo: string
    inductionDate: Date | string
    jobStatus?: $Enums.JobStatus
    education: $Enums.EducationLevel
    previousJob: $Enums.PreviousJob
    typeOfVehicle: $Enums.VehicleType
    experienceYear?: number | null
    experienceMonth?: number | null
    currentJob: string
    salary?: number | null
    cnicNo: string
    cnicFront: string
    cnicBack: string
    cnicIssueDate: Date | string
    cnicExpiryDate: Date | string
    cnicVerified?: $Enums.YesNo
    licenseNo: string
    licenseIssueDate: Date | string
    licenseExpiryDate: Date | string
    licenseStatus: string
    typeOfLicense: $Enums.LicenseType
    drivingSince: number
    licenseOnlineVerification?: $Enums.YesNo
    covid19Vaccination: $Enums.CovidVaccinationStatus
    firstDoseExpiry?: Date | string | null
    secondDoseExpiry?: Date | string | null
    boosterDose?: Date | string | null
    boosterStatus?: $Enums.BoosterStatus | null
    medicalCheck: $Enums.YesNo
    medicalIssueDate?: Date | string | null
    medicalExpiryDate?: Date | string | null
    medicalStatus?: $Enums.MedicalStatus | null
    medicalCertificate?: string | null
    ddcNHMP: $Enums.YesNo
    ddcNHMPIssueDate?: Date | string | null
    ddcNHMPExpiryDate?: Date | string | null
    ddcNHMPStatus?: $Enums.DDCStatus | null
    ddcNHMPResult?: $Enums.DDCResult | null
    ddcCertificate?: string | null
    randomDrugAlcoholDate?: Date | string | null
    randomDrugAlcoholCount?: number | null
    randomDrugAlcoholStatus?: $Enums.DrugAlcoholStatus | null
    drugTestCertificate?: string | null
    policeVF: $Enums.YesNo
    policeVFCertificate?: string | null
    tpplPolicy: $Enums.YesNo
    securityClearance?: $Enums.YesNo
    languages: JsonNullValueInput | InputJsonValue
    notes?: string | null
    isActive?: boolean
    lastLogin?: Date | string | null
    passwordHash?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById?: string | null
    updatedById?: string | null
    workExperiences?: DriverWorkExperienceUncheckedCreateNestedManyWithoutDriverInput
    references?: DriverReferenceUncheckedCreateNestedManyWithoutDriverInput
    violations?: DriverViolationUncheckedCreateNestedManyWithoutDriverInput
    assignments?: DriverAssignmentUncheckedCreateNestedManyWithoutDriverInput
  }

  export type DriverCreateOrConnectWithoutDocumentsInput = {
    where: DriverWhereUniqueInput
    create: XOR<DriverCreateWithoutDocumentsInput, DriverUncheckedCreateWithoutDocumentsInput>
  }

  export type DriverUpsertWithoutDocumentsInput = {
    update: XOR<DriverUpdateWithoutDocumentsInput, DriverUncheckedUpdateWithoutDocumentsInput>
    create: XOR<DriverCreateWithoutDocumentsInput, DriverUncheckedCreateWithoutDocumentsInput>
    where?: DriverWhereInput
  }

  export type DriverUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: DriverWhereInput
    data: XOR<DriverUpdateWithoutDocumentsInput, DriverUncheckedUpdateWithoutDocumentsInput>
  }

  export type DriverUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverImage?: NullableStringFieldUpdateOperationsInput | string | null
    driverName?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    placeOfBirth?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    bloodGroup?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    contactNo?: StringFieldUpdateOperationsInput | string
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    driverId?: IntFieldUpdateOperationsInput | number
    pkCode?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    inductionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jobStatus?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    education?: EnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel
    previousJob?: EnumPreviousJobFieldUpdateOperationsInput | $Enums.PreviousJob
    typeOfVehicle?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    experienceYear?: NullableIntFieldUpdateOperationsInput | number | null
    experienceMonth?: NullableIntFieldUpdateOperationsInput | number | null
    currentJob?: StringFieldUpdateOperationsInput | string
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    cnicNo?: StringFieldUpdateOperationsInput | string
    cnicFront?: StringFieldUpdateOperationsInput | string
    cnicBack?: StringFieldUpdateOperationsInput | string
    cnicIssueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cnicExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cnicVerified?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    licenseNo?: StringFieldUpdateOperationsInput | string
    licenseIssueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    licenseExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    licenseStatus?: StringFieldUpdateOperationsInput | string
    typeOfLicense?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    drivingSince?: IntFieldUpdateOperationsInput | number
    licenseOnlineVerification?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    covid19Vaccination?: EnumCovidVaccinationStatusFieldUpdateOperationsInput | $Enums.CovidVaccinationStatus
    firstDoseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondDoseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boosterDose?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boosterStatus?: NullableEnumBoosterStatusFieldUpdateOperationsInput | $Enums.BoosterStatus | null
    medicalCheck?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    medicalIssueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalStatus?: NullableEnumMedicalStatusFieldUpdateOperationsInput | $Enums.MedicalStatus | null
    medicalCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    ddcNHMP?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    ddcNHMPIssueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ddcNHMPExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ddcNHMPStatus?: NullableEnumDDCStatusFieldUpdateOperationsInput | $Enums.DDCStatus | null
    ddcNHMPResult?: NullableEnumDDCResultFieldUpdateOperationsInput | $Enums.DDCResult | null
    ddcCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    randomDrugAlcoholDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    randomDrugAlcoholCount?: NullableIntFieldUpdateOperationsInput | number | null
    randomDrugAlcoholStatus?: NullableEnumDrugAlcoholStatusFieldUpdateOperationsInput | $Enums.DrugAlcoholStatus | null
    drugTestCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    policeVF?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    policeVFCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    tpplPolicy?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    securityClearance?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    languages?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workExperiences?: DriverWorkExperienceUpdateManyWithoutDriverNestedInput
    references?: DriverReferenceUpdateManyWithoutDriverNestedInput
    violations?: DriverViolationUpdateManyWithoutDriverNestedInput
    assignments?: DriverAssignmentUpdateManyWithoutDriverNestedInput
    createdBy?: UserUpdateOneWithoutCreatedDriversNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedDriversNestedInput
  }

  export type DriverUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverImage?: NullableStringFieldUpdateOperationsInput | string | null
    driverName?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    placeOfBirth?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    bloodGroup?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    contactNo?: StringFieldUpdateOperationsInput | string
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    driverId?: IntFieldUpdateOperationsInput | number
    pkCode?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    inductionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jobStatus?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    education?: EnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel
    previousJob?: EnumPreviousJobFieldUpdateOperationsInput | $Enums.PreviousJob
    typeOfVehicle?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    experienceYear?: NullableIntFieldUpdateOperationsInput | number | null
    experienceMonth?: NullableIntFieldUpdateOperationsInput | number | null
    currentJob?: StringFieldUpdateOperationsInput | string
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    cnicNo?: StringFieldUpdateOperationsInput | string
    cnicFront?: StringFieldUpdateOperationsInput | string
    cnicBack?: StringFieldUpdateOperationsInput | string
    cnicIssueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cnicExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cnicVerified?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    licenseNo?: StringFieldUpdateOperationsInput | string
    licenseIssueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    licenseExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    licenseStatus?: StringFieldUpdateOperationsInput | string
    typeOfLicense?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    drivingSince?: IntFieldUpdateOperationsInput | number
    licenseOnlineVerification?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    covid19Vaccination?: EnumCovidVaccinationStatusFieldUpdateOperationsInput | $Enums.CovidVaccinationStatus
    firstDoseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondDoseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boosterDose?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boosterStatus?: NullableEnumBoosterStatusFieldUpdateOperationsInput | $Enums.BoosterStatus | null
    medicalCheck?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    medicalIssueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalStatus?: NullableEnumMedicalStatusFieldUpdateOperationsInput | $Enums.MedicalStatus | null
    medicalCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    ddcNHMP?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    ddcNHMPIssueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ddcNHMPExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ddcNHMPStatus?: NullableEnumDDCStatusFieldUpdateOperationsInput | $Enums.DDCStatus | null
    ddcNHMPResult?: NullableEnumDDCResultFieldUpdateOperationsInput | $Enums.DDCResult | null
    ddcCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    randomDrugAlcoholDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    randomDrugAlcoholCount?: NullableIntFieldUpdateOperationsInput | number | null
    randomDrugAlcoholStatus?: NullableEnumDrugAlcoholStatusFieldUpdateOperationsInput | $Enums.DrugAlcoholStatus | null
    drugTestCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    policeVF?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    policeVFCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    tpplPolicy?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    securityClearance?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    languages?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    workExperiences?: DriverWorkExperienceUncheckedUpdateManyWithoutDriverNestedInput
    references?: DriverReferenceUncheckedUpdateManyWithoutDriverNestedInput
    violations?: DriverViolationUncheckedUpdateManyWithoutDriverNestedInput
    assignments?: DriverAssignmentUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type DriverCreateWithoutViolationsInput = {
    id?: string
    driverImage?: string | null
    driverName: string
    fatherName: string
    dateOfBirth: Date | string
    age: number
    gender: $Enums.Gender
    placeOfBirth: string
    address: string
    maritalStatus: $Enums.MaritalStatus
    bloodGroup: $Enums.BloodGroup
    contactNo: string
    emergencyContact?: string | null
    emergencyContactName?: string | null
    driverId: number
    pkCode: string
    vehicleNo: string
    inductionDate: Date | string
    jobStatus?: $Enums.JobStatus
    education: $Enums.EducationLevel
    previousJob: $Enums.PreviousJob
    typeOfVehicle: $Enums.VehicleType
    experienceYear?: number | null
    experienceMonth?: number | null
    currentJob: string
    salary?: number | null
    cnicNo: string
    cnicFront: string
    cnicBack: string
    cnicIssueDate: Date | string
    cnicExpiryDate: Date | string
    cnicVerified?: $Enums.YesNo
    licenseNo: string
    licenseIssueDate: Date | string
    licenseExpiryDate: Date | string
    licenseStatus: string
    typeOfLicense: $Enums.LicenseType
    drivingSince: number
    licenseOnlineVerification?: $Enums.YesNo
    covid19Vaccination: $Enums.CovidVaccinationStatus
    firstDoseExpiry?: Date | string | null
    secondDoseExpiry?: Date | string | null
    boosterDose?: Date | string | null
    boosterStatus?: $Enums.BoosterStatus | null
    medicalCheck: $Enums.YesNo
    medicalIssueDate?: Date | string | null
    medicalExpiryDate?: Date | string | null
    medicalStatus?: $Enums.MedicalStatus | null
    medicalCertificate?: string | null
    ddcNHMP: $Enums.YesNo
    ddcNHMPIssueDate?: Date | string | null
    ddcNHMPExpiryDate?: Date | string | null
    ddcNHMPStatus?: $Enums.DDCStatus | null
    ddcNHMPResult?: $Enums.DDCResult | null
    ddcCertificate?: string | null
    randomDrugAlcoholDate?: Date | string | null
    randomDrugAlcoholCount?: number | null
    randomDrugAlcoholStatus?: $Enums.DrugAlcoholStatus | null
    drugTestCertificate?: string | null
    policeVF: $Enums.YesNo
    policeVFCertificate?: string | null
    tpplPolicy: $Enums.YesNo
    securityClearance?: $Enums.YesNo
    languages: JsonNullValueInput | InputJsonValue
    notes?: string | null
    isActive?: boolean
    lastLogin?: Date | string | null
    passwordHash?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workExperiences?: DriverWorkExperienceCreateNestedManyWithoutDriverInput
    references?: DriverReferenceCreateNestedManyWithoutDriverInput
    documents?: DriverDocumentCreateNestedManyWithoutDriverInput
    assignments?: DriverAssignmentCreateNestedManyWithoutDriverInput
    createdBy?: UserCreateNestedOneWithoutCreatedDriversInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedDriversInput
  }

  export type DriverUncheckedCreateWithoutViolationsInput = {
    id?: string
    driverImage?: string | null
    driverName: string
    fatherName: string
    dateOfBirth: Date | string
    age: number
    gender: $Enums.Gender
    placeOfBirth: string
    address: string
    maritalStatus: $Enums.MaritalStatus
    bloodGroup: $Enums.BloodGroup
    contactNo: string
    emergencyContact?: string | null
    emergencyContactName?: string | null
    driverId: number
    pkCode: string
    vehicleNo: string
    inductionDate: Date | string
    jobStatus?: $Enums.JobStatus
    education: $Enums.EducationLevel
    previousJob: $Enums.PreviousJob
    typeOfVehicle: $Enums.VehicleType
    experienceYear?: number | null
    experienceMonth?: number | null
    currentJob: string
    salary?: number | null
    cnicNo: string
    cnicFront: string
    cnicBack: string
    cnicIssueDate: Date | string
    cnicExpiryDate: Date | string
    cnicVerified?: $Enums.YesNo
    licenseNo: string
    licenseIssueDate: Date | string
    licenseExpiryDate: Date | string
    licenseStatus: string
    typeOfLicense: $Enums.LicenseType
    drivingSince: number
    licenseOnlineVerification?: $Enums.YesNo
    covid19Vaccination: $Enums.CovidVaccinationStatus
    firstDoseExpiry?: Date | string | null
    secondDoseExpiry?: Date | string | null
    boosterDose?: Date | string | null
    boosterStatus?: $Enums.BoosterStatus | null
    medicalCheck: $Enums.YesNo
    medicalIssueDate?: Date | string | null
    medicalExpiryDate?: Date | string | null
    medicalStatus?: $Enums.MedicalStatus | null
    medicalCertificate?: string | null
    ddcNHMP: $Enums.YesNo
    ddcNHMPIssueDate?: Date | string | null
    ddcNHMPExpiryDate?: Date | string | null
    ddcNHMPStatus?: $Enums.DDCStatus | null
    ddcNHMPResult?: $Enums.DDCResult | null
    ddcCertificate?: string | null
    randomDrugAlcoholDate?: Date | string | null
    randomDrugAlcoholCount?: number | null
    randomDrugAlcoholStatus?: $Enums.DrugAlcoholStatus | null
    drugTestCertificate?: string | null
    policeVF: $Enums.YesNo
    policeVFCertificate?: string | null
    tpplPolicy: $Enums.YesNo
    securityClearance?: $Enums.YesNo
    languages: JsonNullValueInput | InputJsonValue
    notes?: string | null
    isActive?: boolean
    lastLogin?: Date | string | null
    passwordHash?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById?: string | null
    updatedById?: string | null
    workExperiences?: DriverWorkExperienceUncheckedCreateNestedManyWithoutDriverInput
    references?: DriverReferenceUncheckedCreateNestedManyWithoutDriverInput
    documents?: DriverDocumentUncheckedCreateNestedManyWithoutDriverInput
    assignments?: DriverAssignmentUncheckedCreateNestedManyWithoutDriverInput
  }

  export type DriverCreateOrConnectWithoutViolationsInput = {
    where: DriverWhereUniqueInput
    create: XOR<DriverCreateWithoutViolationsInput, DriverUncheckedCreateWithoutViolationsInput>
  }

  export type DriverUpsertWithoutViolationsInput = {
    update: XOR<DriverUpdateWithoutViolationsInput, DriverUncheckedUpdateWithoutViolationsInput>
    create: XOR<DriverCreateWithoutViolationsInput, DriverUncheckedCreateWithoutViolationsInput>
    where?: DriverWhereInput
  }

  export type DriverUpdateToOneWithWhereWithoutViolationsInput = {
    where?: DriverWhereInput
    data: XOR<DriverUpdateWithoutViolationsInput, DriverUncheckedUpdateWithoutViolationsInput>
  }

  export type DriverUpdateWithoutViolationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverImage?: NullableStringFieldUpdateOperationsInput | string | null
    driverName?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    placeOfBirth?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    bloodGroup?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    contactNo?: StringFieldUpdateOperationsInput | string
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    driverId?: IntFieldUpdateOperationsInput | number
    pkCode?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    inductionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jobStatus?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    education?: EnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel
    previousJob?: EnumPreviousJobFieldUpdateOperationsInput | $Enums.PreviousJob
    typeOfVehicle?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    experienceYear?: NullableIntFieldUpdateOperationsInput | number | null
    experienceMonth?: NullableIntFieldUpdateOperationsInput | number | null
    currentJob?: StringFieldUpdateOperationsInput | string
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    cnicNo?: StringFieldUpdateOperationsInput | string
    cnicFront?: StringFieldUpdateOperationsInput | string
    cnicBack?: StringFieldUpdateOperationsInput | string
    cnicIssueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cnicExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cnicVerified?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    licenseNo?: StringFieldUpdateOperationsInput | string
    licenseIssueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    licenseExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    licenseStatus?: StringFieldUpdateOperationsInput | string
    typeOfLicense?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    drivingSince?: IntFieldUpdateOperationsInput | number
    licenseOnlineVerification?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    covid19Vaccination?: EnumCovidVaccinationStatusFieldUpdateOperationsInput | $Enums.CovidVaccinationStatus
    firstDoseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondDoseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boosterDose?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boosterStatus?: NullableEnumBoosterStatusFieldUpdateOperationsInput | $Enums.BoosterStatus | null
    medicalCheck?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    medicalIssueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalStatus?: NullableEnumMedicalStatusFieldUpdateOperationsInput | $Enums.MedicalStatus | null
    medicalCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    ddcNHMP?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    ddcNHMPIssueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ddcNHMPExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ddcNHMPStatus?: NullableEnumDDCStatusFieldUpdateOperationsInput | $Enums.DDCStatus | null
    ddcNHMPResult?: NullableEnumDDCResultFieldUpdateOperationsInput | $Enums.DDCResult | null
    ddcCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    randomDrugAlcoholDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    randomDrugAlcoholCount?: NullableIntFieldUpdateOperationsInput | number | null
    randomDrugAlcoholStatus?: NullableEnumDrugAlcoholStatusFieldUpdateOperationsInput | $Enums.DrugAlcoholStatus | null
    drugTestCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    policeVF?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    policeVFCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    tpplPolicy?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    securityClearance?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    languages?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workExperiences?: DriverWorkExperienceUpdateManyWithoutDriverNestedInput
    references?: DriverReferenceUpdateManyWithoutDriverNestedInput
    documents?: DriverDocumentUpdateManyWithoutDriverNestedInput
    assignments?: DriverAssignmentUpdateManyWithoutDriverNestedInput
    createdBy?: UserUpdateOneWithoutCreatedDriversNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedDriversNestedInput
  }

  export type DriverUncheckedUpdateWithoutViolationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverImage?: NullableStringFieldUpdateOperationsInput | string | null
    driverName?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    placeOfBirth?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    bloodGroup?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    contactNo?: StringFieldUpdateOperationsInput | string
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    driverId?: IntFieldUpdateOperationsInput | number
    pkCode?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    inductionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jobStatus?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    education?: EnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel
    previousJob?: EnumPreviousJobFieldUpdateOperationsInput | $Enums.PreviousJob
    typeOfVehicle?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    experienceYear?: NullableIntFieldUpdateOperationsInput | number | null
    experienceMonth?: NullableIntFieldUpdateOperationsInput | number | null
    currentJob?: StringFieldUpdateOperationsInput | string
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    cnicNo?: StringFieldUpdateOperationsInput | string
    cnicFront?: StringFieldUpdateOperationsInput | string
    cnicBack?: StringFieldUpdateOperationsInput | string
    cnicIssueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cnicExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cnicVerified?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    licenseNo?: StringFieldUpdateOperationsInput | string
    licenseIssueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    licenseExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    licenseStatus?: StringFieldUpdateOperationsInput | string
    typeOfLicense?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    drivingSince?: IntFieldUpdateOperationsInput | number
    licenseOnlineVerification?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    covid19Vaccination?: EnumCovidVaccinationStatusFieldUpdateOperationsInput | $Enums.CovidVaccinationStatus
    firstDoseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondDoseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boosterDose?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boosterStatus?: NullableEnumBoosterStatusFieldUpdateOperationsInput | $Enums.BoosterStatus | null
    medicalCheck?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    medicalIssueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalStatus?: NullableEnumMedicalStatusFieldUpdateOperationsInput | $Enums.MedicalStatus | null
    medicalCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    ddcNHMP?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    ddcNHMPIssueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ddcNHMPExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ddcNHMPStatus?: NullableEnumDDCStatusFieldUpdateOperationsInput | $Enums.DDCStatus | null
    ddcNHMPResult?: NullableEnumDDCResultFieldUpdateOperationsInput | $Enums.DDCResult | null
    ddcCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    randomDrugAlcoholDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    randomDrugAlcoholCount?: NullableIntFieldUpdateOperationsInput | number | null
    randomDrugAlcoholStatus?: NullableEnumDrugAlcoholStatusFieldUpdateOperationsInput | $Enums.DrugAlcoholStatus | null
    drugTestCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    policeVF?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    policeVFCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    tpplPolicy?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    securityClearance?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    languages?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    workExperiences?: DriverWorkExperienceUncheckedUpdateManyWithoutDriverNestedInput
    references?: DriverReferenceUncheckedUpdateManyWithoutDriverNestedInput
    documents?: DriverDocumentUncheckedUpdateManyWithoutDriverNestedInput
    assignments?: DriverAssignmentUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type DriverCreateWithoutAssignmentsInput = {
    id?: string
    driverImage?: string | null
    driverName: string
    fatherName: string
    dateOfBirth: Date | string
    age: number
    gender: $Enums.Gender
    placeOfBirth: string
    address: string
    maritalStatus: $Enums.MaritalStatus
    bloodGroup: $Enums.BloodGroup
    contactNo: string
    emergencyContact?: string | null
    emergencyContactName?: string | null
    driverId: number
    pkCode: string
    vehicleNo: string
    inductionDate: Date | string
    jobStatus?: $Enums.JobStatus
    education: $Enums.EducationLevel
    previousJob: $Enums.PreviousJob
    typeOfVehicle: $Enums.VehicleType
    experienceYear?: number | null
    experienceMonth?: number | null
    currentJob: string
    salary?: number | null
    cnicNo: string
    cnicFront: string
    cnicBack: string
    cnicIssueDate: Date | string
    cnicExpiryDate: Date | string
    cnicVerified?: $Enums.YesNo
    licenseNo: string
    licenseIssueDate: Date | string
    licenseExpiryDate: Date | string
    licenseStatus: string
    typeOfLicense: $Enums.LicenseType
    drivingSince: number
    licenseOnlineVerification?: $Enums.YesNo
    covid19Vaccination: $Enums.CovidVaccinationStatus
    firstDoseExpiry?: Date | string | null
    secondDoseExpiry?: Date | string | null
    boosterDose?: Date | string | null
    boosterStatus?: $Enums.BoosterStatus | null
    medicalCheck: $Enums.YesNo
    medicalIssueDate?: Date | string | null
    medicalExpiryDate?: Date | string | null
    medicalStatus?: $Enums.MedicalStatus | null
    medicalCertificate?: string | null
    ddcNHMP: $Enums.YesNo
    ddcNHMPIssueDate?: Date | string | null
    ddcNHMPExpiryDate?: Date | string | null
    ddcNHMPStatus?: $Enums.DDCStatus | null
    ddcNHMPResult?: $Enums.DDCResult | null
    ddcCertificate?: string | null
    randomDrugAlcoholDate?: Date | string | null
    randomDrugAlcoholCount?: number | null
    randomDrugAlcoholStatus?: $Enums.DrugAlcoholStatus | null
    drugTestCertificate?: string | null
    policeVF: $Enums.YesNo
    policeVFCertificate?: string | null
    tpplPolicy: $Enums.YesNo
    securityClearance?: $Enums.YesNo
    languages: JsonNullValueInput | InputJsonValue
    notes?: string | null
    isActive?: boolean
    lastLogin?: Date | string | null
    passwordHash?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workExperiences?: DriverWorkExperienceCreateNestedManyWithoutDriverInput
    references?: DriverReferenceCreateNestedManyWithoutDriverInput
    documents?: DriverDocumentCreateNestedManyWithoutDriverInput
    violations?: DriverViolationCreateNestedManyWithoutDriverInput
    createdBy?: UserCreateNestedOneWithoutCreatedDriversInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedDriversInput
  }

  export type DriverUncheckedCreateWithoutAssignmentsInput = {
    id?: string
    driverImage?: string | null
    driverName: string
    fatherName: string
    dateOfBirth: Date | string
    age: number
    gender: $Enums.Gender
    placeOfBirth: string
    address: string
    maritalStatus: $Enums.MaritalStatus
    bloodGroup: $Enums.BloodGroup
    contactNo: string
    emergencyContact?: string | null
    emergencyContactName?: string | null
    driverId: number
    pkCode: string
    vehicleNo: string
    inductionDate: Date | string
    jobStatus?: $Enums.JobStatus
    education: $Enums.EducationLevel
    previousJob: $Enums.PreviousJob
    typeOfVehicle: $Enums.VehicleType
    experienceYear?: number | null
    experienceMonth?: number | null
    currentJob: string
    salary?: number | null
    cnicNo: string
    cnicFront: string
    cnicBack: string
    cnicIssueDate: Date | string
    cnicExpiryDate: Date | string
    cnicVerified?: $Enums.YesNo
    licenseNo: string
    licenseIssueDate: Date | string
    licenseExpiryDate: Date | string
    licenseStatus: string
    typeOfLicense: $Enums.LicenseType
    drivingSince: number
    licenseOnlineVerification?: $Enums.YesNo
    covid19Vaccination: $Enums.CovidVaccinationStatus
    firstDoseExpiry?: Date | string | null
    secondDoseExpiry?: Date | string | null
    boosterDose?: Date | string | null
    boosterStatus?: $Enums.BoosterStatus | null
    medicalCheck: $Enums.YesNo
    medicalIssueDate?: Date | string | null
    medicalExpiryDate?: Date | string | null
    medicalStatus?: $Enums.MedicalStatus | null
    medicalCertificate?: string | null
    ddcNHMP: $Enums.YesNo
    ddcNHMPIssueDate?: Date | string | null
    ddcNHMPExpiryDate?: Date | string | null
    ddcNHMPStatus?: $Enums.DDCStatus | null
    ddcNHMPResult?: $Enums.DDCResult | null
    ddcCertificate?: string | null
    randomDrugAlcoholDate?: Date | string | null
    randomDrugAlcoholCount?: number | null
    randomDrugAlcoholStatus?: $Enums.DrugAlcoholStatus | null
    drugTestCertificate?: string | null
    policeVF: $Enums.YesNo
    policeVFCertificate?: string | null
    tpplPolicy: $Enums.YesNo
    securityClearance?: $Enums.YesNo
    languages: JsonNullValueInput | InputJsonValue
    notes?: string | null
    isActive?: boolean
    lastLogin?: Date | string | null
    passwordHash?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById?: string | null
    updatedById?: string | null
    workExperiences?: DriverWorkExperienceUncheckedCreateNestedManyWithoutDriverInput
    references?: DriverReferenceUncheckedCreateNestedManyWithoutDriverInput
    documents?: DriverDocumentUncheckedCreateNestedManyWithoutDriverInput
    violations?: DriverViolationUncheckedCreateNestedManyWithoutDriverInput
  }

  export type DriverCreateOrConnectWithoutAssignmentsInput = {
    where: DriverWhereUniqueInput
    create: XOR<DriverCreateWithoutAssignmentsInput, DriverUncheckedCreateWithoutAssignmentsInput>
  }

  export type DriverUpsertWithoutAssignmentsInput = {
    update: XOR<DriverUpdateWithoutAssignmentsInput, DriverUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<DriverCreateWithoutAssignmentsInput, DriverUncheckedCreateWithoutAssignmentsInput>
    where?: DriverWhereInput
  }

  export type DriverUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: DriverWhereInput
    data: XOR<DriverUpdateWithoutAssignmentsInput, DriverUncheckedUpdateWithoutAssignmentsInput>
  }

  export type DriverUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverImage?: NullableStringFieldUpdateOperationsInput | string | null
    driverName?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    placeOfBirth?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    bloodGroup?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    contactNo?: StringFieldUpdateOperationsInput | string
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    driverId?: IntFieldUpdateOperationsInput | number
    pkCode?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    inductionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jobStatus?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    education?: EnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel
    previousJob?: EnumPreviousJobFieldUpdateOperationsInput | $Enums.PreviousJob
    typeOfVehicle?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    experienceYear?: NullableIntFieldUpdateOperationsInput | number | null
    experienceMonth?: NullableIntFieldUpdateOperationsInput | number | null
    currentJob?: StringFieldUpdateOperationsInput | string
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    cnicNo?: StringFieldUpdateOperationsInput | string
    cnicFront?: StringFieldUpdateOperationsInput | string
    cnicBack?: StringFieldUpdateOperationsInput | string
    cnicIssueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cnicExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cnicVerified?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    licenseNo?: StringFieldUpdateOperationsInput | string
    licenseIssueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    licenseExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    licenseStatus?: StringFieldUpdateOperationsInput | string
    typeOfLicense?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    drivingSince?: IntFieldUpdateOperationsInput | number
    licenseOnlineVerification?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    covid19Vaccination?: EnumCovidVaccinationStatusFieldUpdateOperationsInput | $Enums.CovidVaccinationStatus
    firstDoseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondDoseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boosterDose?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boosterStatus?: NullableEnumBoosterStatusFieldUpdateOperationsInput | $Enums.BoosterStatus | null
    medicalCheck?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    medicalIssueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalStatus?: NullableEnumMedicalStatusFieldUpdateOperationsInput | $Enums.MedicalStatus | null
    medicalCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    ddcNHMP?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    ddcNHMPIssueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ddcNHMPExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ddcNHMPStatus?: NullableEnumDDCStatusFieldUpdateOperationsInput | $Enums.DDCStatus | null
    ddcNHMPResult?: NullableEnumDDCResultFieldUpdateOperationsInput | $Enums.DDCResult | null
    ddcCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    randomDrugAlcoholDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    randomDrugAlcoholCount?: NullableIntFieldUpdateOperationsInput | number | null
    randomDrugAlcoholStatus?: NullableEnumDrugAlcoholStatusFieldUpdateOperationsInput | $Enums.DrugAlcoholStatus | null
    drugTestCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    policeVF?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    policeVFCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    tpplPolicy?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    securityClearance?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    languages?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workExperiences?: DriverWorkExperienceUpdateManyWithoutDriverNestedInput
    references?: DriverReferenceUpdateManyWithoutDriverNestedInput
    documents?: DriverDocumentUpdateManyWithoutDriverNestedInput
    violations?: DriverViolationUpdateManyWithoutDriverNestedInput
    createdBy?: UserUpdateOneWithoutCreatedDriversNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedDriversNestedInput
  }

  export type DriverUncheckedUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverImage?: NullableStringFieldUpdateOperationsInput | string | null
    driverName?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    placeOfBirth?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    bloodGroup?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    contactNo?: StringFieldUpdateOperationsInput | string
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    driverId?: IntFieldUpdateOperationsInput | number
    pkCode?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    inductionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jobStatus?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    education?: EnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel
    previousJob?: EnumPreviousJobFieldUpdateOperationsInput | $Enums.PreviousJob
    typeOfVehicle?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    experienceYear?: NullableIntFieldUpdateOperationsInput | number | null
    experienceMonth?: NullableIntFieldUpdateOperationsInput | number | null
    currentJob?: StringFieldUpdateOperationsInput | string
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    cnicNo?: StringFieldUpdateOperationsInput | string
    cnicFront?: StringFieldUpdateOperationsInput | string
    cnicBack?: StringFieldUpdateOperationsInput | string
    cnicIssueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cnicExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cnicVerified?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    licenseNo?: StringFieldUpdateOperationsInput | string
    licenseIssueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    licenseExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    licenseStatus?: StringFieldUpdateOperationsInput | string
    typeOfLicense?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    drivingSince?: IntFieldUpdateOperationsInput | number
    licenseOnlineVerification?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    covid19Vaccination?: EnumCovidVaccinationStatusFieldUpdateOperationsInput | $Enums.CovidVaccinationStatus
    firstDoseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondDoseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boosterDose?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boosterStatus?: NullableEnumBoosterStatusFieldUpdateOperationsInput | $Enums.BoosterStatus | null
    medicalCheck?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    medicalIssueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalStatus?: NullableEnumMedicalStatusFieldUpdateOperationsInput | $Enums.MedicalStatus | null
    medicalCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    ddcNHMP?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    ddcNHMPIssueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ddcNHMPExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ddcNHMPStatus?: NullableEnumDDCStatusFieldUpdateOperationsInput | $Enums.DDCStatus | null
    ddcNHMPResult?: NullableEnumDDCResultFieldUpdateOperationsInput | $Enums.DDCResult | null
    ddcCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    randomDrugAlcoholDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    randomDrugAlcoholCount?: NullableIntFieldUpdateOperationsInput | number | null
    randomDrugAlcoholStatus?: NullableEnumDrugAlcoholStatusFieldUpdateOperationsInput | $Enums.DrugAlcoholStatus | null
    drugTestCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    policeVF?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    policeVFCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    tpplPolicy?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    securityClearance?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    languages?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    workExperiences?: DriverWorkExperienceUncheckedUpdateManyWithoutDriverNestedInput
    references?: DriverReferenceUncheckedUpdateManyWithoutDriverNestedInput
    documents?: DriverDocumentUncheckedUpdateManyWithoutDriverNestedInput
    violations?: DriverViolationUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type DriverCreateWithoutCreatedByInput = {
    id?: string
    driverImage?: string | null
    driverName: string
    fatherName: string
    dateOfBirth: Date | string
    age: number
    gender: $Enums.Gender
    placeOfBirth: string
    address: string
    maritalStatus: $Enums.MaritalStatus
    bloodGroup: $Enums.BloodGroup
    contactNo: string
    emergencyContact?: string | null
    emergencyContactName?: string | null
    driverId: number
    pkCode: string
    vehicleNo: string
    inductionDate: Date | string
    jobStatus?: $Enums.JobStatus
    education: $Enums.EducationLevel
    previousJob: $Enums.PreviousJob
    typeOfVehicle: $Enums.VehicleType
    experienceYear?: number | null
    experienceMonth?: number | null
    currentJob: string
    salary?: number | null
    cnicNo: string
    cnicFront: string
    cnicBack: string
    cnicIssueDate: Date | string
    cnicExpiryDate: Date | string
    cnicVerified?: $Enums.YesNo
    licenseNo: string
    licenseIssueDate: Date | string
    licenseExpiryDate: Date | string
    licenseStatus: string
    typeOfLicense: $Enums.LicenseType
    drivingSince: number
    licenseOnlineVerification?: $Enums.YesNo
    covid19Vaccination: $Enums.CovidVaccinationStatus
    firstDoseExpiry?: Date | string | null
    secondDoseExpiry?: Date | string | null
    boosterDose?: Date | string | null
    boosterStatus?: $Enums.BoosterStatus | null
    medicalCheck: $Enums.YesNo
    medicalIssueDate?: Date | string | null
    medicalExpiryDate?: Date | string | null
    medicalStatus?: $Enums.MedicalStatus | null
    medicalCertificate?: string | null
    ddcNHMP: $Enums.YesNo
    ddcNHMPIssueDate?: Date | string | null
    ddcNHMPExpiryDate?: Date | string | null
    ddcNHMPStatus?: $Enums.DDCStatus | null
    ddcNHMPResult?: $Enums.DDCResult | null
    ddcCertificate?: string | null
    randomDrugAlcoholDate?: Date | string | null
    randomDrugAlcoholCount?: number | null
    randomDrugAlcoholStatus?: $Enums.DrugAlcoholStatus | null
    drugTestCertificate?: string | null
    policeVF: $Enums.YesNo
    policeVFCertificate?: string | null
    tpplPolicy: $Enums.YesNo
    securityClearance?: $Enums.YesNo
    languages: JsonNullValueInput | InputJsonValue
    notes?: string | null
    isActive?: boolean
    lastLogin?: Date | string | null
    passwordHash?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workExperiences?: DriverWorkExperienceCreateNestedManyWithoutDriverInput
    references?: DriverReferenceCreateNestedManyWithoutDriverInput
    documents?: DriverDocumentCreateNestedManyWithoutDriverInput
    violations?: DriverViolationCreateNestedManyWithoutDriverInput
    assignments?: DriverAssignmentCreateNestedManyWithoutDriverInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedDriversInput
  }

  export type DriverUncheckedCreateWithoutCreatedByInput = {
    id?: string
    driverImage?: string | null
    driverName: string
    fatherName: string
    dateOfBirth: Date | string
    age: number
    gender: $Enums.Gender
    placeOfBirth: string
    address: string
    maritalStatus: $Enums.MaritalStatus
    bloodGroup: $Enums.BloodGroup
    contactNo: string
    emergencyContact?: string | null
    emergencyContactName?: string | null
    driverId: number
    pkCode: string
    vehicleNo: string
    inductionDate: Date | string
    jobStatus?: $Enums.JobStatus
    education: $Enums.EducationLevel
    previousJob: $Enums.PreviousJob
    typeOfVehicle: $Enums.VehicleType
    experienceYear?: number | null
    experienceMonth?: number | null
    currentJob: string
    salary?: number | null
    cnicNo: string
    cnicFront: string
    cnicBack: string
    cnicIssueDate: Date | string
    cnicExpiryDate: Date | string
    cnicVerified?: $Enums.YesNo
    licenseNo: string
    licenseIssueDate: Date | string
    licenseExpiryDate: Date | string
    licenseStatus: string
    typeOfLicense: $Enums.LicenseType
    drivingSince: number
    licenseOnlineVerification?: $Enums.YesNo
    covid19Vaccination: $Enums.CovidVaccinationStatus
    firstDoseExpiry?: Date | string | null
    secondDoseExpiry?: Date | string | null
    boosterDose?: Date | string | null
    boosterStatus?: $Enums.BoosterStatus | null
    medicalCheck: $Enums.YesNo
    medicalIssueDate?: Date | string | null
    medicalExpiryDate?: Date | string | null
    medicalStatus?: $Enums.MedicalStatus | null
    medicalCertificate?: string | null
    ddcNHMP: $Enums.YesNo
    ddcNHMPIssueDate?: Date | string | null
    ddcNHMPExpiryDate?: Date | string | null
    ddcNHMPStatus?: $Enums.DDCStatus | null
    ddcNHMPResult?: $Enums.DDCResult | null
    ddcCertificate?: string | null
    randomDrugAlcoholDate?: Date | string | null
    randomDrugAlcoholCount?: number | null
    randomDrugAlcoholStatus?: $Enums.DrugAlcoholStatus | null
    drugTestCertificate?: string | null
    policeVF: $Enums.YesNo
    policeVFCertificate?: string | null
    tpplPolicy: $Enums.YesNo
    securityClearance?: $Enums.YesNo
    languages: JsonNullValueInput | InputJsonValue
    notes?: string | null
    isActive?: boolean
    lastLogin?: Date | string | null
    passwordHash?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedById?: string | null
    workExperiences?: DriverWorkExperienceUncheckedCreateNestedManyWithoutDriverInput
    references?: DriverReferenceUncheckedCreateNestedManyWithoutDriverInput
    documents?: DriverDocumentUncheckedCreateNestedManyWithoutDriverInput
    violations?: DriverViolationUncheckedCreateNestedManyWithoutDriverInput
    assignments?: DriverAssignmentUncheckedCreateNestedManyWithoutDriverInput
  }

  export type DriverCreateOrConnectWithoutCreatedByInput = {
    where: DriverWhereUniqueInput
    create: XOR<DriverCreateWithoutCreatedByInput, DriverUncheckedCreateWithoutCreatedByInput>
  }

  export type DriverCreateManyCreatedByInputEnvelope = {
    data: DriverCreateManyCreatedByInput | DriverCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type DriverCreateWithoutUpdatedByInput = {
    id?: string
    driverImage?: string | null
    driverName: string
    fatherName: string
    dateOfBirth: Date | string
    age: number
    gender: $Enums.Gender
    placeOfBirth: string
    address: string
    maritalStatus: $Enums.MaritalStatus
    bloodGroup: $Enums.BloodGroup
    contactNo: string
    emergencyContact?: string | null
    emergencyContactName?: string | null
    driverId: number
    pkCode: string
    vehicleNo: string
    inductionDate: Date | string
    jobStatus?: $Enums.JobStatus
    education: $Enums.EducationLevel
    previousJob: $Enums.PreviousJob
    typeOfVehicle: $Enums.VehicleType
    experienceYear?: number | null
    experienceMonth?: number | null
    currentJob: string
    salary?: number | null
    cnicNo: string
    cnicFront: string
    cnicBack: string
    cnicIssueDate: Date | string
    cnicExpiryDate: Date | string
    cnicVerified?: $Enums.YesNo
    licenseNo: string
    licenseIssueDate: Date | string
    licenseExpiryDate: Date | string
    licenseStatus: string
    typeOfLicense: $Enums.LicenseType
    drivingSince: number
    licenseOnlineVerification?: $Enums.YesNo
    covid19Vaccination: $Enums.CovidVaccinationStatus
    firstDoseExpiry?: Date | string | null
    secondDoseExpiry?: Date | string | null
    boosterDose?: Date | string | null
    boosterStatus?: $Enums.BoosterStatus | null
    medicalCheck: $Enums.YesNo
    medicalIssueDate?: Date | string | null
    medicalExpiryDate?: Date | string | null
    medicalStatus?: $Enums.MedicalStatus | null
    medicalCertificate?: string | null
    ddcNHMP: $Enums.YesNo
    ddcNHMPIssueDate?: Date | string | null
    ddcNHMPExpiryDate?: Date | string | null
    ddcNHMPStatus?: $Enums.DDCStatus | null
    ddcNHMPResult?: $Enums.DDCResult | null
    ddcCertificate?: string | null
    randomDrugAlcoholDate?: Date | string | null
    randomDrugAlcoholCount?: number | null
    randomDrugAlcoholStatus?: $Enums.DrugAlcoholStatus | null
    drugTestCertificate?: string | null
    policeVF: $Enums.YesNo
    policeVFCertificate?: string | null
    tpplPolicy: $Enums.YesNo
    securityClearance?: $Enums.YesNo
    languages: JsonNullValueInput | InputJsonValue
    notes?: string | null
    isActive?: boolean
    lastLogin?: Date | string | null
    passwordHash?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workExperiences?: DriverWorkExperienceCreateNestedManyWithoutDriverInput
    references?: DriverReferenceCreateNestedManyWithoutDriverInput
    documents?: DriverDocumentCreateNestedManyWithoutDriverInput
    violations?: DriverViolationCreateNestedManyWithoutDriverInput
    assignments?: DriverAssignmentCreateNestedManyWithoutDriverInput
    createdBy?: UserCreateNestedOneWithoutCreatedDriversInput
  }

  export type DriverUncheckedCreateWithoutUpdatedByInput = {
    id?: string
    driverImage?: string | null
    driverName: string
    fatherName: string
    dateOfBirth: Date | string
    age: number
    gender: $Enums.Gender
    placeOfBirth: string
    address: string
    maritalStatus: $Enums.MaritalStatus
    bloodGroup: $Enums.BloodGroup
    contactNo: string
    emergencyContact?: string | null
    emergencyContactName?: string | null
    driverId: number
    pkCode: string
    vehicleNo: string
    inductionDate: Date | string
    jobStatus?: $Enums.JobStatus
    education: $Enums.EducationLevel
    previousJob: $Enums.PreviousJob
    typeOfVehicle: $Enums.VehicleType
    experienceYear?: number | null
    experienceMonth?: number | null
    currentJob: string
    salary?: number | null
    cnicNo: string
    cnicFront: string
    cnicBack: string
    cnicIssueDate: Date | string
    cnicExpiryDate: Date | string
    cnicVerified?: $Enums.YesNo
    licenseNo: string
    licenseIssueDate: Date | string
    licenseExpiryDate: Date | string
    licenseStatus: string
    typeOfLicense: $Enums.LicenseType
    drivingSince: number
    licenseOnlineVerification?: $Enums.YesNo
    covid19Vaccination: $Enums.CovidVaccinationStatus
    firstDoseExpiry?: Date | string | null
    secondDoseExpiry?: Date | string | null
    boosterDose?: Date | string | null
    boosterStatus?: $Enums.BoosterStatus | null
    medicalCheck: $Enums.YesNo
    medicalIssueDate?: Date | string | null
    medicalExpiryDate?: Date | string | null
    medicalStatus?: $Enums.MedicalStatus | null
    medicalCertificate?: string | null
    ddcNHMP: $Enums.YesNo
    ddcNHMPIssueDate?: Date | string | null
    ddcNHMPExpiryDate?: Date | string | null
    ddcNHMPStatus?: $Enums.DDCStatus | null
    ddcNHMPResult?: $Enums.DDCResult | null
    ddcCertificate?: string | null
    randomDrugAlcoholDate?: Date | string | null
    randomDrugAlcoholCount?: number | null
    randomDrugAlcoholStatus?: $Enums.DrugAlcoholStatus | null
    drugTestCertificate?: string | null
    policeVF: $Enums.YesNo
    policeVFCertificate?: string | null
    tpplPolicy: $Enums.YesNo
    securityClearance?: $Enums.YesNo
    languages: JsonNullValueInput | InputJsonValue
    notes?: string | null
    isActive?: boolean
    lastLogin?: Date | string | null
    passwordHash?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById?: string | null
    workExperiences?: DriverWorkExperienceUncheckedCreateNestedManyWithoutDriverInput
    references?: DriverReferenceUncheckedCreateNestedManyWithoutDriverInput
    documents?: DriverDocumentUncheckedCreateNestedManyWithoutDriverInput
    violations?: DriverViolationUncheckedCreateNestedManyWithoutDriverInput
    assignments?: DriverAssignmentUncheckedCreateNestedManyWithoutDriverInput
  }

  export type DriverCreateOrConnectWithoutUpdatedByInput = {
    where: DriverWhereUniqueInput
    create: XOR<DriverCreateWithoutUpdatedByInput, DriverUncheckedCreateWithoutUpdatedByInput>
  }

  export type DriverCreateManyUpdatedByInputEnvelope = {
    data: DriverCreateManyUpdatedByInput | DriverCreateManyUpdatedByInput[]
    skipDuplicates?: boolean
  }

  export type DriverUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: DriverWhereUniqueInput
    update: XOR<DriverUpdateWithoutCreatedByInput, DriverUncheckedUpdateWithoutCreatedByInput>
    create: XOR<DriverCreateWithoutCreatedByInput, DriverUncheckedCreateWithoutCreatedByInput>
  }

  export type DriverUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: DriverWhereUniqueInput
    data: XOR<DriverUpdateWithoutCreatedByInput, DriverUncheckedUpdateWithoutCreatedByInput>
  }

  export type DriverUpdateManyWithWhereWithoutCreatedByInput = {
    where: DriverScalarWhereInput
    data: XOR<DriverUpdateManyMutationInput, DriverUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type DriverScalarWhereInput = {
    AND?: DriverScalarWhereInput | DriverScalarWhereInput[]
    OR?: DriverScalarWhereInput[]
    NOT?: DriverScalarWhereInput | DriverScalarWhereInput[]
    id?: StringFilter<"Driver"> | string
    driverImage?: StringNullableFilter<"Driver"> | string | null
    driverName?: StringFilter<"Driver"> | string
    fatherName?: StringFilter<"Driver"> | string
    dateOfBirth?: DateTimeFilter<"Driver"> | Date | string
    age?: IntFilter<"Driver"> | number
    gender?: EnumGenderFilter<"Driver"> | $Enums.Gender
    placeOfBirth?: StringFilter<"Driver"> | string
    address?: StringFilter<"Driver"> | string
    maritalStatus?: EnumMaritalStatusFilter<"Driver"> | $Enums.MaritalStatus
    bloodGroup?: EnumBloodGroupFilter<"Driver"> | $Enums.BloodGroup
    contactNo?: StringFilter<"Driver"> | string
    emergencyContact?: StringNullableFilter<"Driver"> | string | null
    emergencyContactName?: StringNullableFilter<"Driver"> | string | null
    driverId?: IntFilter<"Driver"> | number
    pkCode?: StringFilter<"Driver"> | string
    vehicleNo?: StringFilter<"Driver"> | string
    inductionDate?: DateTimeFilter<"Driver"> | Date | string
    jobStatus?: EnumJobStatusFilter<"Driver"> | $Enums.JobStatus
    education?: EnumEducationLevelFilter<"Driver"> | $Enums.EducationLevel
    previousJob?: EnumPreviousJobFilter<"Driver"> | $Enums.PreviousJob
    typeOfVehicle?: EnumVehicleTypeFilter<"Driver"> | $Enums.VehicleType
    experienceYear?: IntNullableFilter<"Driver"> | number | null
    experienceMonth?: IntNullableFilter<"Driver"> | number | null
    currentJob?: StringFilter<"Driver"> | string
    salary?: FloatNullableFilter<"Driver"> | number | null
    cnicNo?: StringFilter<"Driver"> | string
    cnicFront?: StringFilter<"Driver"> | string
    cnicBack?: StringFilter<"Driver"> | string
    cnicIssueDate?: DateTimeFilter<"Driver"> | Date | string
    cnicExpiryDate?: DateTimeFilter<"Driver"> | Date | string
    cnicVerified?: EnumYesNoFilter<"Driver"> | $Enums.YesNo
    licenseNo?: StringFilter<"Driver"> | string
    licenseIssueDate?: DateTimeFilter<"Driver"> | Date | string
    licenseExpiryDate?: DateTimeFilter<"Driver"> | Date | string
    licenseStatus?: StringFilter<"Driver"> | string
    typeOfLicense?: EnumLicenseTypeFilter<"Driver"> | $Enums.LicenseType
    drivingSince?: IntFilter<"Driver"> | number
    licenseOnlineVerification?: EnumYesNoFilter<"Driver"> | $Enums.YesNo
    covid19Vaccination?: EnumCovidVaccinationStatusFilter<"Driver"> | $Enums.CovidVaccinationStatus
    firstDoseExpiry?: DateTimeNullableFilter<"Driver"> | Date | string | null
    secondDoseExpiry?: DateTimeNullableFilter<"Driver"> | Date | string | null
    boosterDose?: DateTimeNullableFilter<"Driver"> | Date | string | null
    boosterStatus?: EnumBoosterStatusNullableFilter<"Driver"> | $Enums.BoosterStatus | null
    medicalCheck?: EnumYesNoFilter<"Driver"> | $Enums.YesNo
    medicalIssueDate?: DateTimeNullableFilter<"Driver"> | Date | string | null
    medicalExpiryDate?: DateTimeNullableFilter<"Driver"> | Date | string | null
    medicalStatus?: EnumMedicalStatusNullableFilter<"Driver"> | $Enums.MedicalStatus | null
    medicalCertificate?: StringNullableFilter<"Driver"> | string | null
    ddcNHMP?: EnumYesNoFilter<"Driver"> | $Enums.YesNo
    ddcNHMPIssueDate?: DateTimeNullableFilter<"Driver"> | Date | string | null
    ddcNHMPExpiryDate?: DateTimeNullableFilter<"Driver"> | Date | string | null
    ddcNHMPStatus?: EnumDDCStatusNullableFilter<"Driver"> | $Enums.DDCStatus | null
    ddcNHMPResult?: EnumDDCResultNullableFilter<"Driver"> | $Enums.DDCResult | null
    ddcCertificate?: StringNullableFilter<"Driver"> | string | null
    randomDrugAlcoholDate?: DateTimeNullableFilter<"Driver"> | Date | string | null
    randomDrugAlcoholCount?: IntNullableFilter<"Driver"> | number | null
    randomDrugAlcoholStatus?: EnumDrugAlcoholStatusNullableFilter<"Driver"> | $Enums.DrugAlcoholStatus | null
    drugTestCertificate?: StringNullableFilter<"Driver"> | string | null
    policeVF?: EnumYesNoFilter<"Driver"> | $Enums.YesNo
    policeVFCertificate?: StringNullableFilter<"Driver"> | string | null
    tpplPolicy?: EnumYesNoFilter<"Driver"> | $Enums.YesNo
    securityClearance?: EnumYesNoFilter<"Driver"> | $Enums.YesNo
    languages?: JsonFilter<"Driver">
    notes?: StringNullableFilter<"Driver"> | string | null
    isActive?: BoolFilter<"Driver"> | boolean
    lastLogin?: DateTimeNullableFilter<"Driver"> | Date | string | null
    passwordHash?: StringNullableFilter<"Driver"> | string | null
    email?: StringNullableFilter<"Driver"> | string | null
    createdAt?: DateTimeFilter<"Driver"> | Date | string
    updatedAt?: DateTimeFilter<"Driver"> | Date | string
    createdById?: StringNullableFilter<"Driver"> | string | null
    updatedById?: StringNullableFilter<"Driver"> | string | null
  }

  export type DriverUpsertWithWhereUniqueWithoutUpdatedByInput = {
    where: DriverWhereUniqueInput
    update: XOR<DriverUpdateWithoutUpdatedByInput, DriverUncheckedUpdateWithoutUpdatedByInput>
    create: XOR<DriverCreateWithoutUpdatedByInput, DriverUncheckedCreateWithoutUpdatedByInput>
  }

  export type DriverUpdateWithWhereUniqueWithoutUpdatedByInput = {
    where: DriverWhereUniqueInput
    data: XOR<DriverUpdateWithoutUpdatedByInput, DriverUncheckedUpdateWithoutUpdatedByInput>
  }

  export type DriverUpdateManyWithWhereWithoutUpdatedByInput = {
    where: DriverScalarWhereInput
    data: XOR<DriverUpdateManyMutationInput, DriverUncheckedUpdateManyWithoutUpdatedByInput>
  }

  export type DriverWorkExperienceCreateManyDriverInput = {
    id?: string
    companyName: string
    dateFrom: Date | string
    dateTo?: Date | string | null
    jobTill: string
    responsibility: string
    salary?: number | null
    reasonForLeaving?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DriverReferenceCreateManyDriverInput = {
    id?: string
    referenceName: string
    referenceAddress: string
    referencePhone: string
    referenceRelation: string
    referenceEmail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DriverDocumentCreateManyDriverInput = {
    id?: string
    documentType: string
    documentName: string
    documentUrl: string
    issueDate?: Date | string | null
    expiryDate?: Date | string | null
    isVerified?: boolean
    verifiedBy?: string | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DriverViolationCreateManyDriverInput = {
    id?: string
    violationType: string
    violationDate: Date | string
    location?: string | null
    description?: string | null
    fineAmount?: number | null
    isPaid?: boolean
    points?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DriverAssignmentCreateManyDriverInput = {
    id?: string
    vehicleId?: string | null
    routeId?: string | null
    assignmentDate: Date | string
    endDate?: Date | string | null
    status: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DriverWorkExperienceUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    dateFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobTill?: StringFieldUpdateOperationsInput | string
    responsibility?: StringFieldUpdateOperationsInput | string
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    reasonForLeaving?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverWorkExperienceUncheckedUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    dateFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobTill?: StringFieldUpdateOperationsInput | string
    responsibility?: StringFieldUpdateOperationsInput | string
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    reasonForLeaving?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverWorkExperienceUncheckedUpdateManyWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    dateFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    dateTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobTill?: StringFieldUpdateOperationsInput | string
    responsibility?: StringFieldUpdateOperationsInput | string
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    reasonForLeaving?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverReferenceUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceName?: StringFieldUpdateOperationsInput | string
    referenceAddress?: StringFieldUpdateOperationsInput | string
    referencePhone?: StringFieldUpdateOperationsInput | string
    referenceRelation?: StringFieldUpdateOperationsInput | string
    referenceEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverReferenceUncheckedUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceName?: StringFieldUpdateOperationsInput | string
    referenceAddress?: StringFieldUpdateOperationsInput | string
    referencePhone?: StringFieldUpdateOperationsInput | string
    referenceRelation?: StringFieldUpdateOperationsInput | string
    referenceEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverReferenceUncheckedUpdateManyWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceName?: StringFieldUpdateOperationsInput | string
    referenceAddress?: StringFieldUpdateOperationsInput | string
    referencePhone?: StringFieldUpdateOperationsInput | string
    referenceRelation?: StringFieldUpdateOperationsInput | string
    referenceEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverDocumentUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    documentName?: StringFieldUpdateOperationsInput | string
    documentUrl?: StringFieldUpdateOperationsInput | string
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverDocumentUncheckedUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    documentName?: StringFieldUpdateOperationsInput | string
    documentUrl?: StringFieldUpdateOperationsInput | string
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverDocumentUncheckedUpdateManyWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: StringFieldUpdateOperationsInput | string
    documentName?: StringFieldUpdateOperationsInput | string
    documentUrl?: StringFieldUpdateOperationsInput | string
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableStringFieldUpdateOperationsInput | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverViolationUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    violationType?: StringFieldUpdateOperationsInput | string
    violationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fineAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    points?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverViolationUncheckedUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    violationType?: StringFieldUpdateOperationsInput | string
    violationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fineAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    points?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverViolationUncheckedUpdateManyWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    violationType?: StringFieldUpdateOperationsInput | string
    violationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fineAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    points?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverAssignmentUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: NullableStringFieldUpdateOperationsInput | string | null
    routeId?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverAssignmentUncheckedUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: NullableStringFieldUpdateOperationsInput | string | null
    routeId?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverAssignmentUncheckedUpdateManyWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: NullableStringFieldUpdateOperationsInput | string | null
    routeId?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverCreateManyCreatedByInput = {
    id?: string
    driverImage?: string | null
    driverName: string
    fatherName: string
    dateOfBirth: Date | string
    age: number
    gender: $Enums.Gender
    placeOfBirth: string
    address: string
    maritalStatus: $Enums.MaritalStatus
    bloodGroup: $Enums.BloodGroup
    contactNo: string
    emergencyContact?: string | null
    emergencyContactName?: string | null
    driverId: number
    pkCode: string
    vehicleNo: string
    inductionDate: Date | string
    jobStatus?: $Enums.JobStatus
    education: $Enums.EducationLevel
    previousJob: $Enums.PreviousJob
    typeOfVehicle: $Enums.VehicleType
    experienceYear?: number | null
    experienceMonth?: number | null
    currentJob: string
    salary?: number | null
    cnicNo: string
    cnicFront: string
    cnicBack: string
    cnicIssueDate: Date | string
    cnicExpiryDate: Date | string
    cnicVerified?: $Enums.YesNo
    licenseNo: string
    licenseIssueDate: Date | string
    licenseExpiryDate: Date | string
    licenseStatus: string
    typeOfLicense: $Enums.LicenseType
    drivingSince: number
    licenseOnlineVerification?: $Enums.YesNo
    covid19Vaccination: $Enums.CovidVaccinationStatus
    firstDoseExpiry?: Date | string | null
    secondDoseExpiry?: Date | string | null
    boosterDose?: Date | string | null
    boosterStatus?: $Enums.BoosterStatus | null
    medicalCheck: $Enums.YesNo
    medicalIssueDate?: Date | string | null
    medicalExpiryDate?: Date | string | null
    medicalStatus?: $Enums.MedicalStatus | null
    medicalCertificate?: string | null
    ddcNHMP: $Enums.YesNo
    ddcNHMPIssueDate?: Date | string | null
    ddcNHMPExpiryDate?: Date | string | null
    ddcNHMPStatus?: $Enums.DDCStatus | null
    ddcNHMPResult?: $Enums.DDCResult | null
    ddcCertificate?: string | null
    randomDrugAlcoholDate?: Date | string | null
    randomDrugAlcoholCount?: number | null
    randomDrugAlcoholStatus?: $Enums.DrugAlcoholStatus | null
    drugTestCertificate?: string | null
    policeVF: $Enums.YesNo
    policeVFCertificate?: string | null
    tpplPolicy: $Enums.YesNo
    securityClearance?: $Enums.YesNo
    languages: JsonNullValueInput | InputJsonValue
    notes?: string | null
    isActive?: boolean
    lastLogin?: Date | string | null
    passwordHash?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedById?: string | null
  }

  export type DriverCreateManyUpdatedByInput = {
    id?: string
    driverImage?: string | null
    driverName: string
    fatherName: string
    dateOfBirth: Date | string
    age: number
    gender: $Enums.Gender
    placeOfBirth: string
    address: string
    maritalStatus: $Enums.MaritalStatus
    bloodGroup: $Enums.BloodGroup
    contactNo: string
    emergencyContact?: string | null
    emergencyContactName?: string | null
    driverId: number
    pkCode: string
    vehicleNo: string
    inductionDate: Date | string
    jobStatus?: $Enums.JobStatus
    education: $Enums.EducationLevel
    previousJob: $Enums.PreviousJob
    typeOfVehicle: $Enums.VehicleType
    experienceYear?: number | null
    experienceMonth?: number | null
    currentJob: string
    salary?: number | null
    cnicNo: string
    cnicFront: string
    cnicBack: string
    cnicIssueDate: Date | string
    cnicExpiryDate: Date | string
    cnicVerified?: $Enums.YesNo
    licenseNo: string
    licenseIssueDate: Date | string
    licenseExpiryDate: Date | string
    licenseStatus: string
    typeOfLicense: $Enums.LicenseType
    drivingSince: number
    licenseOnlineVerification?: $Enums.YesNo
    covid19Vaccination: $Enums.CovidVaccinationStatus
    firstDoseExpiry?: Date | string | null
    secondDoseExpiry?: Date | string | null
    boosterDose?: Date | string | null
    boosterStatus?: $Enums.BoosterStatus | null
    medicalCheck: $Enums.YesNo
    medicalIssueDate?: Date | string | null
    medicalExpiryDate?: Date | string | null
    medicalStatus?: $Enums.MedicalStatus | null
    medicalCertificate?: string | null
    ddcNHMP: $Enums.YesNo
    ddcNHMPIssueDate?: Date | string | null
    ddcNHMPExpiryDate?: Date | string | null
    ddcNHMPStatus?: $Enums.DDCStatus | null
    ddcNHMPResult?: $Enums.DDCResult | null
    ddcCertificate?: string | null
    randomDrugAlcoholDate?: Date | string | null
    randomDrugAlcoholCount?: number | null
    randomDrugAlcoholStatus?: $Enums.DrugAlcoholStatus | null
    drugTestCertificate?: string | null
    policeVF: $Enums.YesNo
    policeVFCertificate?: string | null
    tpplPolicy: $Enums.YesNo
    securityClearance?: $Enums.YesNo
    languages: JsonNullValueInput | InputJsonValue
    notes?: string | null
    isActive?: boolean
    lastLogin?: Date | string | null
    passwordHash?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById?: string | null
  }

  export type DriverUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverImage?: NullableStringFieldUpdateOperationsInput | string | null
    driverName?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    placeOfBirth?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    bloodGroup?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    contactNo?: StringFieldUpdateOperationsInput | string
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    driverId?: IntFieldUpdateOperationsInput | number
    pkCode?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    inductionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jobStatus?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    education?: EnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel
    previousJob?: EnumPreviousJobFieldUpdateOperationsInput | $Enums.PreviousJob
    typeOfVehicle?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    experienceYear?: NullableIntFieldUpdateOperationsInput | number | null
    experienceMonth?: NullableIntFieldUpdateOperationsInput | number | null
    currentJob?: StringFieldUpdateOperationsInput | string
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    cnicNo?: StringFieldUpdateOperationsInput | string
    cnicFront?: StringFieldUpdateOperationsInput | string
    cnicBack?: StringFieldUpdateOperationsInput | string
    cnicIssueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cnicExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cnicVerified?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    licenseNo?: StringFieldUpdateOperationsInput | string
    licenseIssueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    licenseExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    licenseStatus?: StringFieldUpdateOperationsInput | string
    typeOfLicense?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    drivingSince?: IntFieldUpdateOperationsInput | number
    licenseOnlineVerification?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    covid19Vaccination?: EnumCovidVaccinationStatusFieldUpdateOperationsInput | $Enums.CovidVaccinationStatus
    firstDoseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondDoseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boosterDose?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boosterStatus?: NullableEnumBoosterStatusFieldUpdateOperationsInput | $Enums.BoosterStatus | null
    medicalCheck?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    medicalIssueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalStatus?: NullableEnumMedicalStatusFieldUpdateOperationsInput | $Enums.MedicalStatus | null
    medicalCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    ddcNHMP?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    ddcNHMPIssueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ddcNHMPExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ddcNHMPStatus?: NullableEnumDDCStatusFieldUpdateOperationsInput | $Enums.DDCStatus | null
    ddcNHMPResult?: NullableEnumDDCResultFieldUpdateOperationsInput | $Enums.DDCResult | null
    ddcCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    randomDrugAlcoholDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    randomDrugAlcoholCount?: NullableIntFieldUpdateOperationsInput | number | null
    randomDrugAlcoholStatus?: NullableEnumDrugAlcoholStatusFieldUpdateOperationsInput | $Enums.DrugAlcoholStatus | null
    drugTestCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    policeVF?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    policeVFCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    tpplPolicy?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    securityClearance?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    languages?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workExperiences?: DriverWorkExperienceUpdateManyWithoutDriverNestedInput
    references?: DriverReferenceUpdateManyWithoutDriverNestedInput
    documents?: DriverDocumentUpdateManyWithoutDriverNestedInput
    violations?: DriverViolationUpdateManyWithoutDriverNestedInput
    assignments?: DriverAssignmentUpdateManyWithoutDriverNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedDriversNestedInput
  }

  export type DriverUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverImage?: NullableStringFieldUpdateOperationsInput | string | null
    driverName?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    placeOfBirth?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    bloodGroup?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    contactNo?: StringFieldUpdateOperationsInput | string
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    driverId?: IntFieldUpdateOperationsInput | number
    pkCode?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    inductionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jobStatus?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    education?: EnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel
    previousJob?: EnumPreviousJobFieldUpdateOperationsInput | $Enums.PreviousJob
    typeOfVehicle?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    experienceYear?: NullableIntFieldUpdateOperationsInput | number | null
    experienceMonth?: NullableIntFieldUpdateOperationsInput | number | null
    currentJob?: StringFieldUpdateOperationsInput | string
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    cnicNo?: StringFieldUpdateOperationsInput | string
    cnicFront?: StringFieldUpdateOperationsInput | string
    cnicBack?: StringFieldUpdateOperationsInput | string
    cnicIssueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cnicExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cnicVerified?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    licenseNo?: StringFieldUpdateOperationsInput | string
    licenseIssueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    licenseExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    licenseStatus?: StringFieldUpdateOperationsInput | string
    typeOfLicense?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    drivingSince?: IntFieldUpdateOperationsInput | number
    licenseOnlineVerification?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    covid19Vaccination?: EnumCovidVaccinationStatusFieldUpdateOperationsInput | $Enums.CovidVaccinationStatus
    firstDoseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondDoseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boosterDose?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boosterStatus?: NullableEnumBoosterStatusFieldUpdateOperationsInput | $Enums.BoosterStatus | null
    medicalCheck?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    medicalIssueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalStatus?: NullableEnumMedicalStatusFieldUpdateOperationsInput | $Enums.MedicalStatus | null
    medicalCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    ddcNHMP?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    ddcNHMPIssueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ddcNHMPExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ddcNHMPStatus?: NullableEnumDDCStatusFieldUpdateOperationsInput | $Enums.DDCStatus | null
    ddcNHMPResult?: NullableEnumDDCResultFieldUpdateOperationsInput | $Enums.DDCResult | null
    ddcCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    randomDrugAlcoholDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    randomDrugAlcoholCount?: NullableIntFieldUpdateOperationsInput | number | null
    randomDrugAlcoholStatus?: NullableEnumDrugAlcoholStatusFieldUpdateOperationsInput | $Enums.DrugAlcoholStatus | null
    drugTestCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    policeVF?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    policeVFCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    tpplPolicy?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    securityClearance?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    languages?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    workExperiences?: DriverWorkExperienceUncheckedUpdateManyWithoutDriverNestedInput
    references?: DriverReferenceUncheckedUpdateManyWithoutDriverNestedInput
    documents?: DriverDocumentUncheckedUpdateManyWithoutDriverNestedInput
    violations?: DriverViolationUncheckedUpdateManyWithoutDriverNestedInput
    assignments?: DriverAssignmentUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type DriverUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverImage?: NullableStringFieldUpdateOperationsInput | string | null
    driverName?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    placeOfBirth?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    bloodGroup?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    contactNo?: StringFieldUpdateOperationsInput | string
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    driverId?: IntFieldUpdateOperationsInput | number
    pkCode?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    inductionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jobStatus?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    education?: EnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel
    previousJob?: EnumPreviousJobFieldUpdateOperationsInput | $Enums.PreviousJob
    typeOfVehicle?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    experienceYear?: NullableIntFieldUpdateOperationsInput | number | null
    experienceMonth?: NullableIntFieldUpdateOperationsInput | number | null
    currentJob?: StringFieldUpdateOperationsInput | string
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    cnicNo?: StringFieldUpdateOperationsInput | string
    cnicFront?: StringFieldUpdateOperationsInput | string
    cnicBack?: StringFieldUpdateOperationsInput | string
    cnicIssueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cnicExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cnicVerified?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    licenseNo?: StringFieldUpdateOperationsInput | string
    licenseIssueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    licenseExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    licenseStatus?: StringFieldUpdateOperationsInput | string
    typeOfLicense?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    drivingSince?: IntFieldUpdateOperationsInput | number
    licenseOnlineVerification?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    covid19Vaccination?: EnumCovidVaccinationStatusFieldUpdateOperationsInput | $Enums.CovidVaccinationStatus
    firstDoseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondDoseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boosterDose?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boosterStatus?: NullableEnumBoosterStatusFieldUpdateOperationsInput | $Enums.BoosterStatus | null
    medicalCheck?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    medicalIssueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalStatus?: NullableEnumMedicalStatusFieldUpdateOperationsInput | $Enums.MedicalStatus | null
    medicalCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    ddcNHMP?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    ddcNHMPIssueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ddcNHMPExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ddcNHMPStatus?: NullableEnumDDCStatusFieldUpdateOperationsInput | $Enums.DDCStatus | null
    ddcNHMPResult?: NullableEnumDDCResultFieldUpdateOperationsInput | $Enums.DDCResult | null
    ddcCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    randomDrugAlcoholDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    randomDrugAlcoholCount?: NullableIntFieldUpdateOperationsInput | number | null
    randomDrugAlcoholStatus?: NullableEnumDrugAlcoholStatusFieldUpdateOperationsInput | $Enums.DrugAlcoholStatus | null
    drugTestCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    policeVF?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    policeVFCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    tpplPolicy?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    securityClearance?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    languages?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DriverUpdateWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverImage?: NullableStringFieldUpdateOperationsInput | string | null
    driverName?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    placeOfBirth?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    bloodGroup?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    contactNo?: StringFieldUpdateOperationsInput | string
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    driverId?: IntFieldUpdateOperationsInput | number
    pkCode?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    inductionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jobStatus?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    education?: EnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel
    previousJob?: EnumPreviousJobFieldUpdateOperationsInput | $Enums.PreviousJob
    typeOfVehicle?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    experienceYear?: NullableIntFieldUpdateOperationsInput | number | null
    experienceMonth?: NullableIntFieldUpdateOperationsInput | number | null
    currentJob?: StringFieldUpdateOperationsInput | string
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    cnicNo?: StringFieldUpdateOperationsInput | string
    cnicFront?: StringFieldUpdateOperationsInput | string
    cnicBack?: StringFieldUpdateOperationsInput | string
    cnicIssueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cnicExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cnicVerified?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    licenseNo?: StringFieldUpdateOperationsInput | string
    licenseIssueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    licenseExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    licenseStatus?: StringFieldUpdateOperationsInput | string
    typeOfLicense?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    drivingSince?: IntFieldUpdateOperationsInput | number
    licenseOnlineVerification?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    covid19Vaccination?: EnumCovidVaccinationStatusFieldUpdateOperationsInput | $Enums.CovidVaccinationStatus
    firstDoseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondDoseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boosterDose?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boosterStatus?: NullableEnumBoosterStatusFieldUpdateOperationsInput | $Enums.BoosterStatus | null
    medicalCheck?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    medicalIssueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalStatus?: NullableEnumMedicalStatusFieldUpdateOperationsInput | $Enums.MedicalStatus | null
    medicalCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    ddcNHMP?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    ddcNHMPIssueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ddcNHMPExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ddcNHMPStatus?: NullableEnumDDCStatusFieldUpdateOperationsInput | $Enums.DDCStatus | null
    ddcNHMPResult?: NullableEnumDDCResultFieldUpdateOperationsInput | $Enums.DDCResult | null
    ddcCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    randomDrugAlcoholDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    randomDrugAlcoholCount?: NullableIntFieldUpdateOperationsInput | number | null
    randomDrugAlcoholStatus?: NullableEnumDrugAlcoholStatusFieldUpdateOperationsInput | $Enums.DrugAlcoholStatus | null
    drugTestCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    policeVF?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    policeVFCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    tpplPolicy?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    securityClearance?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    languages?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workExperiences?: DriverWorkExperienceUpdateManyWithoutDriverNestedInput
    references?: DriverReferenceUpdateManyWithoutDriverNestedInput
    documents?: DriverDocumentUpdateManyWithoutDriverNestedInput
    violations?: DriverViolationUpdateManyWithoutDriverNestedInput
    assignments?: DriverAssignmentUpdateManyWithoutDriverNestedInput
    createdBy?: UserUpdateOneWithoutCreatedDriversNestedInput
  }

  export type DriverUncheckedUpdateWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverImage?: NullableStringFieldUpdateOperationsInput | string | null
    driverName?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    placeOfBirth?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    bloodGroup?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    contactNo?: StringFieldUpdateOperationsInput | string
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    driverId?: IntFieldUpdateOperationsInput | number
    pkCode?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    inductionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jobStatus?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    education?: EnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel
    previousJob?: EnumPreviousJobFieldUpdateOperationsInput | $Enums.PreviousJob
    typeOfVehicle?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    experienceYear?: NullableIntFieldUpdateOperationsInput | number | null
    experienceMonth?: NullableIntFieldUpdateOperationsInput | number | null
    currentJob?: StringFieldUpdateOperationsInput | string
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    cnicNo?: StringFieldUpdateOperationsInput | string
    cnicFront?: StringFieldUpdateOperationsInput | string
    cnicBack?: StringFieldUpdateOperationsInput | string
    cnicIssueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cnicExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cnicVerified?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    licenseNo?: StringFieldUpdateOperationsInput | string
    licenseIssueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    licenseExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    licenseStatus?: StringFieldUpdateOperationsInput | string
    typeOfLicense?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    drivingSince?: IntFieldUpdateOperationsInput | number
    licenseOnlineVerification?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    covid19Vaccination?: EnumCovidVaccinationStatusFieldUpdateOperationsInput | $Enums.CovidVaccinationStatus
    firstDoseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondDoseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boosterDose?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boosterStatus?: NullableEnumBoosterStatusFieldUpdateOperationsInput | $Enums.BoosterStatus | null
    medicalCheck?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    medicalIssueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalStatus?: NullableEnumMedicalStatusFieldUpdateOperationsInput | $Enums.MedicalStatus | null
    medicalCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    ddcNHMP?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    ddcNHMPIssueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ddcNHMPExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ddcNHMPStatus?: NullableEnumDDCStatusFieldUpdateOperationsInput | $Enums.DDCStatus | null
    ddcNHMPResult?: NullableEnumDDCResultFieldUpdateOperationsInput | $Enums.DDCResult | null
    ddcCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    randomDrugAlcoholDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    randomDrugAlcoholCount?: NullableIntFieldUpdateOperationsInput | number | null
    randomDrugAlcoholStatus?: NullableEnumDrugAlcoholStatusFieldUpdateOperationsInput | $Enums.DrugAlcoholStatus | null
    drugTestCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    policeVF?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    policeVFCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    tpplPolicy?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    securityClearance?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    languages?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    workExperiences?: DriverWorkExperienceUncheckedUpdateManyWithoutDriverNestedInput
    references?: DriverReferenceUncheckedUpdateManyWithoutDriverNestedInput
    documents?: DriverDocumentUncheckedUpdateManyWithoutDriverNestedInput
    violations?: DriverViolationUncheckedUpdateManyWithoutDriverNestedInput
    assignments?: DriverAssignmentUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type DriverUncheckedUpdateManyWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverImage?: NullableStringFieldUpdateOperationsInput | string | null
    driverName?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    placeOfBirth?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    maritalStatus?: EnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus
    bloodGroup?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    contactNo?: StringFieldUpdateOperationsInput | string
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    driverId?: IntFieldUpdateOperationsInput | number
    pkCode?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    inductionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jobStatus?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    education?: EnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel
    previousJob?: EnumPreviousJobFieldUpdateOperationsInput | $Enums.PreviousJob
    typeOfVehicle?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    experienceYear?: NullableIntFieldUpdateOperationsInput | number | null
    experienceMonth?: NullableIntFieldUpdateOperationsInput | number | null
    currentJob?: StringFieldUpdateOperationsInput | string
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    cnicNo?: StringFieldUpdateOperationsInput | string
    cnicFront?: StringFieldUpdateOperationsInput | string
    cnicBack?: StringFieldUpdateOperationsInput | string
    cnicIssueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cnicExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cnicVerified?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    licenseNo?: StringFieldUpdateOperationsInput | string
    licenseIssueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    licenseExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    licenseStatus?: StringFieldUpdateOperationsInput | string
    typeOfLicense?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    drivingSince?: IntFieldUpdateOperationsInput | number
    licenseOnlineVerification?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    covid19Vaccination?: EnumCovidVaccinationStatusFieldUpdateOperationsInput | $Enums.CovidVaccinationStatus
    firstDoseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondDoseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boosterDose?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    boosterStatus?: NullableEnumBoosterStatusFieldUpdateOperationsInput | $Enums.BoosterStatus | null
    medicalCheck?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    medicalIssueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalStatus?: NullableEnumMedicalStatusFieldUpdateOperationsInput | $Enums.MedicalStatus | null
    medicalCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    ddcNHMP?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    ddcNHMPIssueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ddcNHMPExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ddcNHMPStatus?: NullableEnumDDCStatusFieldUpdateOperationsInput | $Enums.DDCStatus | null
    ddcNHMPResult?: NullableEnumDDCResultFieldUpdateOperationsInput | $Enums.DDCResult | null
    ddcCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    randomDrugAlcoholDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    randomDrugAlcoholCount?: NullableIntFieldUpdateOperationsInput | number | null
    randomDrugAlcoholStatus?: NullableEnumDrugAlcoholStatusFieldUpdateOperationsInput | $Enums.DrugAlcoholStatus | null
    drugTestCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    policeVF?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    policeVFCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    tpplPolicy?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    securityClearance?: EnumYesNoFieldUpdateOperationsInput | $Enums.YesNo
    languages?: JsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
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