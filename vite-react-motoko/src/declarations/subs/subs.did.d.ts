import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Account {
  'owner' : Principal,
  'subaccount' : [] | [Uint8Array | number[]],
}
export interface Account__1 {
  'owner' : Principal,
  'subaccount' : [] | [Uint8Array | number[]],
}
export interface Action {
  'aSync' : [] | [bigint],
  'actionType' : string,
  'params' : Uint8Array | number[],
  'retries' : bigint,
}
export interface ActionId { 'id' : bigint, 'time' : Time }
export interface ActionId__1 { 'id' : bigint, 'time' : Time }
export interface ArchivedTransactionResponse {
  'args' : Array<TransactionRange>,
  'callback' : GetTransactionsFn,
}
export type Args = [] | [InitArgs];
export type Args__1 = [] | [InitArgs__1];
export type Args__2 = [] | [
  {
    'nextCycleActionId' : [] | [bigint],
    'maxExecutions' : [] | [bigint],
    'nextActionId' : bigint,
    'lastActionIdReported' : [] | [bigint],
    'lastCycleReport' : [] | [bigint],
    'initialTimers' : Array<[ActionId__1, Action]>,
    'expectedExecutionTime' : Time,
    'lastExecutionTime' : Time,
  }
];
export interface Asset { 'class' : AssetClass, 'symbol' : string }
export type AssetClass = { 'Cryptocurrency' : null } |
  { 'FiatCurrency' : null };
export type AssetClass__1 = { 'Cryptocurrency' : null } |
  { 'FiatCurrency' : null };
export interface Asset__1 { 'class' : AssetClass__1, 'symbol' : string }
export interface BlockType { 'url' : string, 'block_type' : string }
export interface BlockType__1 { 'url' : string, 'block_type' : string }
export type CancelError = { 'InvalidStatus' : SubStatus__1 } |
  { 'NotFound' : null } |
  { 'Unauthorized' : null } |
  { 'Other' : { 'code' : bigint, 'message' : string } };
export type CancelResult = [] | [{ 'Ok' : bigint } | { 'Err' : CancelError }];
export interface CheckRate { 'decimals' : number, 'rate' : bigint }
export interface CheckRate__1 { 'decimals' : number, 'rate' : bigint }
export interface ConfirmRequests {
  'subscriptionId' : bigint,
  'checkRate' : [] | [CheckRate__1],
}
export type ConfirmResult = [] | [
  { 'Ok' : bigint } |
    { 'Err' : SubscriptionError }
];
export interface DataCertificate {
  'certificate' : Uint8Array | number[],
  'hash_tree' : Uint8Array | number[],
}
export interface ExchangeRate {
  'metadata' : ExchangeRateMetadata,
  'rate' : bigint,
  'timestamp' : bigint,
  'quote_asset' : Asset__1,
  'base_asset' : Asset__1,
}
export type ExchangeRateError = { 'AnonymousPrincipalNotAllowed' : null } |
  { 'CryptoQuoteAssetNotFound' : null } |
  { 'FailedToAcceptCycles' : null } |
  { 'ForexBaseAssetNotFound' : null } |
  { 'CryptoBaseAssetNotFound' : null } |
  { 'StablecoinRateTooFewRates' : null } |
  { 'ForexAssetsNotFound' : null } |
  { 'InconsistentRatesReceived' : null } |
  { 'RateLimited' : null } |
  { 'StablecoinRateZeroRate' : null } |
  { 'Other' : { 'code' : number, 'description' : string } } |
  { 'ForexInvalidTimestamp' : null } |
  { 'NotEnoughCycles' : null } |
  { 'ForexQuoteAssetNotFound' : null } |
  { 'StablecoinRateNotFound' : null } |
  { 'Pending' : null };
export interface ExchangeRateMetadata {
  'decimals' : number,
  'forex_timestamp' : [] | [bigint],
  'quote_asset_num_received_rates' : bigint,
  'base_asset_num_received_rates' : bigint,
  'base_asset_num_queried_sources' : bigint,
  'standard_deviation' : bigint,
  'quote_asset_num_queried_sources' : bigint,
}
export interface GetArchivesArgs { 'from' : [] | [Principal] }
export type GetArchivesResult = Array<GetArchivesResultItem>;
export interface GetArchivesResultItem {
  'end' : bigint,
  'canister_id' : Principal,
  'start' : bigint,
}
export type GetBlocksArgs = Array<TransactionRange>;
export interface GetBlocksResult {
  'log_length' : bigint,
  'blocks' : Array<{ 'id' : bigint, 'block' : Value__1 }>,
  'archived_blocks' : Array<ArchivedTransactionResponse>,
}
export type GetTransactionsFn = ActorMethod<
  [Array<TransactionRange>],
  GetTransactionsResult
>;
export interface GetTransactionsResult {
  'log_length' : bigint,
  'blocks' : Array<{ 'id' : bigint, 'block' : Value__1 }>,
  'archived_blocks' : Array<ArchivedTransactionResponse>,
}
export type IndexType = { 'Stable' : null } |
  { 'StableTyped' : null } |
  { 'Managed' : null };
export interface InitArgs {
  'maxRecordsToArchive' : bigint,
  'archiveIndexType' : IndexType,
  'maxArchivePages' : bigint,
  'settleToRecords' : bigint,
  'archiveCycles' : bigint,
  'maxActiveRecords' : bigint,
  'maxRecordsInArchiveInstance' : bigint,
  'archiveControllers' : [] | [[] | [Array<Principal>]],
  'supportedBlocks' : Array<BlockType>,
}
export interface InitArgs__1 {
  'maxQueries' : [] | [bigint],
  'maxUpdates' : [] | [bigint],
  'trxWindow' : [] | [bigint],
  'defaultTake' : [] | [bigint],
  'feeBPS' : [] | [bigint],
  'nextSubscriptionId' : [] | [bigint],
  'existingSubscriptions' : Array<SubscriptionStateShared>,
  'tokenInfo' : [] | [
    Array<[[Principal, [] | [Uint8Array | number[]]], TokenInfo]>
  ],
  'nextPaymentId' : [] | [bigint],
  'nextNotificationId' : [] | [bigint],
  'maxTake' : [] | [bigint],
  'publicGoodsAccount' : [] | [Account],
  'minDrift' : [] | [bigint],
  'maxMemoSize' : [] | [bigint],
}
export type Interval = { 'Hourly' : null } |
  { 'Interval' : bigint } |
  { 'Days' : bigint } |
  { 'Weekly' : null } |
  { 'Weeks' : bigint } |
  { 'Daily' : null } |
  { 'Monthly' : null } |
  { 'Months' : bigint } |
  { 'Yearly' : null };
export type Interval__1 = { 'Hourly' : null } |
  { 'Interval' : bigint } |
  { 'Days' : bigint } |
  { 'Weekly' : null } |
  { 'Weeks' : bigint } |
  { 'Daily' : null } |
  { 'Monthly' : null } |
  { 'Months' : bigint } |
  { 'Yearly' : null };
export type PauseError = { 'InvalidStatus' : SubStatus__1 } |
  { 'NotFound' : null } |
  { 'Unauthorized' : null } |
  { 'Other' : { 'code' : bigint, 'message' : string } };
export type PauseRequest = Array<PauseRequestItem>;
export interface PauseRequestItem {
  'active' : boolean,
  'subscriptionId' : bigint,
  'reason' : string,
}
export type PauseResult = [] | [{ 'Ok' : bigint } | { 'Err' : PauseError }];
export interface PaymentRecord {
  'fee' : [] | [bigint],
  'result' : { 'Ok' : null } |
    { 'Err' : { 'code' : bigint, 'message' : string } },
  'feeTransactionId' : [] | [bigint],
  'date' : bigint,
  'rate' : [] | [ExchangeRate],
  'ledgerTransactionId' : [] | [bigint],
  'subscriptionId' : bigint,
  'brokerFee' : [] | [bigint],
  'paymentId' : bigint,
  'amount' : bigint,
  'brokerTransactionId' : [] | [bigint],
  'transactionId' : [] | [bigint],
}
export interface PendingPayment {
  'nextPaymentAmount' : [] | [bigint],
  'subscription' : Subscription,
  'nextPaymentDate' : [] | [bigint],
}
export interface ServiceNotification {
  'principal' : Principal,
  'date' : bigint,
  'notification' : ServiceNotificationType,
}
export type ServiceNotificationType = {
    'SubscriptionPaused' : {
      'principal' : Principal,
      'subscriptionId' : bigint,
      'reason' : string,
    }
  } |
  {
    'ExchangeRateError' : {
      'rate' : ExchangeRate,
      'rate_error' : [] | [ExchangeRateError],
      'subscriptionId' : bigint,
      'reason' : [] | [string],
    }
  } |
  {
    'SubscriptionEnded' : {
      'principal' : Principal,
      'subscriptionId' : bigint,
      'reason' : string,
    }
  } |
  {
    'SubscriptionActivated' : {
      'principal' : Principal,
      'subscriptionId' : bigint,
      'reason' : string,
    }
  } |
  {
    'LedgerError' : {
      'rescheduled' : [] | [bigint],
      'error' : string,
      'subscriptionId' : bigint,
    }
  } |
  {
    'AllowanceInsufficient' : {
      'principal' : Principal,
      'subscriptionId' : bigint,
    }
  };
export interface ServiceSubscriptionFilter {
  'status' : [] | [SubStatusFilter],
  'subscriptions' : [] | [Array<bigint>],
  'products' : [] | [Array<[] | [bigint]>],
}
export interface ServiceSubscriptionFilter__1 {
  'status' : [] | [SubStatusFilter],
  'subscriptions' : [] | [Array<bigint>],
  'products' : [] | [Array<[] | [bigint]>],
}
export type SubStatus = { 'Paused' : [bigint, Principal, string] } |
  { 'Active' : null } |
  { 'WillCancel' : [bigint, Principal, string] } |
  { 'Canceled' : [bigint, bigint, Principal, string] };
export type SubStatusFilter = { 'Paused' : null } |
  { 'Active' : null } |
  { 'WillCancel' : null } |
  { 'Canceled' : null };
export type SubStatus__1 = { 'Paused' : [bigint, Principal, string] } |
  { 'Active' : null } |
  { 'WillCancel' : [bigint, Principal, string] } |
  { 'Canceled' : [bigint, bigint, Principal, string] };
export interface Subs {
  'add_blocked_service' : ActorMethod<[Principal, boolean], undefined>,
  'add_token' : ActorMethod<
    [Principal, [] | [Uint8Array | number[]]],
    [] | [TokenInfo__1]
  >,
  'get_token_info' : ActorMethod<[], Array<TokenInfo__1>>,
  'icrc10_supported_standards' : ActorMethod<
    [],
    Array<{ 'url' : string, 'name' : string }>
  >,
  'icrc3_get_archives' : ActorMethod<[GetArchivesArgs], GetArchivesResult>,
  'icrc3_get_blocks' : ActorMethod<[GetBlocksArgs], GetBlocksResult>,
  'icrc3_get_tip_certificate' : ActorMethod<[], [] | [DataCertificate]>,
  'icrc3_supported_block_types' : ActorMethod<[], Array<BlockType__1>>,
  'icrc79_cancel_subscription' : ActorMethod<
    [Array<{ 'subscriptionId' : bigint, 'reason' : string }>],
    Array<CancelResult>
  >,
  'icrc79_cancel_subscription_0_0_1' : ActorMethod<
    [Array<{ 'subscriptionId' : bigint, 'reason' : string }>],
    Array<CancelResult>
  >,
  'icrc79_confirm_subscription' : ActorMethod<
    [Array<ConfirmRequests>],
    Array<ConfirmResult>
  >,
  'icrc79_confirm_subscription_0_0_1' : ActorMethod<
    [Array<ConfirmRequests>],
    Array<ConfirmResult>
  >,
  'icrc79_default_take_value' : ActorMethod<[], bigint>,
  'icrc79_default_take_value_0_0_1' : ActorMethod<[], bigint>,
  'icrc79_get_payments_pending' : ActorMethod<
    [Array<bigint>],
    Array<[] | [PendingPayment]>
  >,
  'icrc79_get_payments_pending_0_0_1' : ActorMethod<
    [Array<bigint>],
    Array<[] | [PendingPayment]>
  >,
  'icrc79_get_service_notifications' : ActorMethod<
    [Principal, [] | [bigint], [] | [bigint]],
    Array<ServiceNotification>
  >,
  'icrc79_get_service_notifications_0_0_1' : ActorMethod<
    [Principal, [] | [bigint], [] | [bigint]],
    Array<ServiceNotification>
  >,
  'icrc79_get_service_payments' : ActorMethod<
    [
      Principal,
      [] | [ServiceSubscriptionFilter__1],
      [] | [bigint],
      [] | [bigint],
    ],
    Array<PaymentRecord>
  >,
  'icrc79_get_service_payments_0_0_1' : ActorMethod<
    [
      Principal,
      [] | [ServiceSubscriptionFilter__1],
      [] | [bigint],
      [] | [bigint],
    ],
    Array<PaymentRecord>
  >,
  'icrc79_get_service_subscriptions' : ActorMethod<
    [Principal, [] | [ServiceSubscriptionFilter], [] | [bigint], [] | [bigint]],
    Array<Subscription>
  >,
  'icrc79_get_service_subscriptions_0_0_1' : ActorMethod<
    [Principal, [] | [ServiceSubscriptionFilter], [] | [bigint], [] | [bigint]],
    Array<Subscription>
  >,
  'icrc79_get_user_payments' : ActorMethod<
    [[] | [UserSubscriptionsFilter], [] | [bigint], [] | [bigint]],
    Array<PaymentRecord>
  >,
  'icrc79_get_user_payments_0_0_1' : ActorMethod<
    [[] | [UserSubscriptionsFilter], [] | [bigint], [] | [bigint]],
    Array<PaymentRecord>
  >,
  'icrc79_get_user_subscriptions' : ActorMethod<
    [[] | [UserSubscriptionsFilter], [] | [bigint], [] | [bigint]],
    Array<Subscription>
  >,
  'icrc79_get_user_subscriptions_0_0_1' : ActorMethod<
    [[] | [UserSubscriptionsFilter], [] | [bigint], [] | [bigint]],
    Array<Subscription>
  >,
  'icrc79_max_memo_size' : ActorMethod<[], bigint>,
  'icrc79_max_memo_size_0_0_1' : ActorMethod<[], bigint>,
  'icrc79_max_query_batch_size' : ActorMethod<[], bigint>,
  'icrc79_max_query_batch_size_0_0_1' : ActorMethod<[], bigint>,
  'icrc79_max_take_value' : ActorMethod<[], bigint>,
  'icrc79_max_take_value_0_0_1' : ActorMethod<[], bigint>,
  'icrc79_max_update_batch_size' : ActorMethod<[], bigint>,
  'icrc79_max_update_batch_size_0_0_1' : ActorMethod<[], bigint>,
  'icrc79_metadata' : ActorMethod<[], Array<[string, Value]>>,
  'icrc79_metadata_0_0_1' : ActorMethod<[], Array<[string, Value]>>,
  'icrc79_pause_subscription' : ActorMethod<[PauseRequest], Array<PauseResult>>,
  'icrc79_pause_subscription_0_0_1' : ActorMethod<
    [PauseRequest],
    Array<PauseResult>
  >,
  'icrc79_permitted_drift' : ActorMethod<[], bigint>,
  'icrc79_permitted_drift_0_0_1' : ActorMethod<[], bigint>,
  'icrc79_subscribe' : ActorMethod<[SubscriptionRequest], SubscriptionResult>,
  'icrc79_subscribe_0_0_1' : ActorMethod<
    [SubscriptionRequest],
    SubscriptionResult
  >,
  'icrc79_tx_window' : ActorMethod<[], bigint>,
  'icrc79_tx_window_0_0_1' : ActorMethod<[], bigint>,
  'init' : ActorMethod<[], undefined>,
}
export interface Subscription {
  'serviceCanister' : Principal,
  'status' : SubStatus__1,
  'endDate' : [] | [bigint],
  'interval' : Interval__1,
  'productId' : [] | [bigint],
  'subscriptionId' : bigint,
  'baseRateAsset' : [] | [Asset__1],
  'account' : Account__1,
  'brokerId' : [] | [Principal],
  'amountPerInterval' : bigint,
  'targetAccount' : [] | [Account__1],
  'tokenCanister' : Principal,
  'tokenPointer' : [] | [Uint8Array | number[]],
}
export type SubscriptionError = { 'TokenNotFound' : null } |
  { 'InsufficientAllowance' : bigint } |
  { 'SubscriptionNotFound' : null } |
  { 'Duplicate' : null } |
  { 'FoundActiveSubscription' : bigint } |
  { 'InvalidDate' : null } |
  { 'Unauthorized' : null } |
  { 'Other' : { 'code' : bigint, 'message' : string } } |
  { 'InvalidInterval' : null };
export type SubscriptionRequest = Array<Array<SubscriptionRequestItem>>;
export type SubscriptionRequestItem = { 'serviceCanister' : Principal } |
  { 'firstPayment' : bigint } |
  { 'broker' : Principal } |
  { 'endDate' : bigint } |
  { 'interval' : Interval__1 } |
  { 'memo' : Uint8Array | number[] } |
  { 'subaccount' : Uint8Array | number[] } |
  { 'createdAtTime' : bigint } |
  { 'productId' : bigint } |
  { 'nowPayment' : bigint } |
  { 'baseRateAsset' : [Asset__1, CheckRate__1] } |
  { 'amountPerInterval' : bigint } |
  { 'targetAccount' : Account__1 } |
  { 'tokenCanister' : Principal } |
  { 'tokenPointer' : TokenPointer };
export interface SubscriptionResponse {
  'subscriptionId' : bigint,
  'transactionId' : bigint,
}
export type SubscriptionResult = Array<SubscriptionResultItem>;
export type SubscriptionResultItem = [] | [
  { 'Ok' : SubscriptionResponse } |
    { 'Err' : SubscriptionError }
];
export interface SubscriptionStateShared {
  'serviceCanister' : Principal,
  'status' : SubStatus,
  'nextPaymentAmount' : [] | [bigint],
  'endDate' : [] | [bigint],
  'interval' : Interval,
  'history' : Array<bigint>,
  'productId' : [] | [bigint],
  'subscriptionId' : bigint,
  'baseRateAsset' : [] | [Asset],
  'checkRate' : [] | [CheckRate],
  'account' : Account,
  'brokerId' : [] | [Principal],
  'nextTimerId' : [] | [ActionId],
  'nextPayment' : [] | [bigint],
  'amountPerInterval' : bigint,
  'targetAccount' : [] | [Account],
  'tokenCanister' : Principal,
  'tokenPointer' : [] | [Uint8Array | number[]],
}
export type Time = bigint;
export interface TokenInfo {
  'tokenFee' : [] | [bigint],
  'standards' : Array<string>,
  'tokenTotalSupply' : bigint,
  'tokenDecimals' : number,
  'tokenSymbol' : string,
  'tokenCanister' : Principal,
  'tokenPointer' : [] | [bigint],
}
export interface TokenInfo__1 {
  'tokenFee' : [] | [bigint],
  'standards' : Array<string>,
  'tokenTotalSupply' : bigint,
  'tokenDecimals' : number,
  'tokenSymbol' : string,
  'tokenCanister' : Principal,
  'tokenPointer' : [] | [bigint],
}
export type TokenPointer = Uint8Array | number[];
export interface TransactionRange { 'start' : bigint, 'length' : bigint }
export interface UserSubscriptionsFilter {
  'status' : [] | [SubStatusFilter],
  'subscriptions' : [] | [Array<bigint>],
  'subaccounts' : [] | [Array<[] | [Uint8Array | number[]]>],
  'products' : [] | [Array<[] | [bigint]>],
  'services' : [] | [Array<Principal>],
}
export type Value = { 'Int' : bigint } |
  { 'Map' : Array<[string, Value]> } |
  { 'Nat' : bigint } |
  { 'Blob' : Uint8Array | number[] } |
  { 'Text' : string } |
  { 'Array' : Array<Value> };
export type Value__1 = { 'Int' : bigint } |
  { 'Map' : Array<[string, Value__1]> } |
  { 'Nat' : bigint } |
  { 'Blob' : Uint8Array | number[] } |
  { 'Text' : string } |
  { 'Array' : Array<Value__1> };
export interface _SERVICE extends Subs {}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
