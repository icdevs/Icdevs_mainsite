export const idlFactory = ({ IDL }) => {
  const ArchivedTransactionResponse = IDL.Rec();
  const Value = IDL.Rec();
  const Value__1 = IDL.Rec();
  const SubStatus = IDL.Variant({
    'Paused' : IDL.Tuple(IDL.Nat, IDL.Principal, IDL.Text),
    'Active' : IDL.Null,
    'WillCancel' : IDL.Tuple(IDL.Nat, IDL.Principal, IDL.Text),
    'Canceled' : IDL.Tuple(IDL.Nat, IDL.Nat, IDL.Principal, IDL.Text),
  });
  const Interval = IDL.Variant({
    'Hourly' : IDL.Null,
    'Interval' : IDL.Nat,
    'Days' : IDL.Nat,
    'Weekly' : IDL.Null,
    'Weeks' : IDL.Nat,
    'Daily' : IDL.Null,
    'Monthly' : IDL.Null,
    'Months' : IDL.Nat,
    'Yearly' : IDL.Null,
  });
  const AssetClass = IDL.Variant({
    'Cryptocurrency' : IDL.Null,
    'FiatCurrency' : IDL.Null,
  });
  const Asset = IDL.Record({ 'class' : AssetClass, 'symbol' : IDL.Text });
  const CheckRate = IDL.Record({ 'decimals' : IDL.Nat32, 'rate' : IDL.Nat64 });
  const Account = IDL.Record({
    'owner' : IDL.Principal,
    'subaccount' : IDL.Opt(IDL.Vec(IDL.Nat8)),
  });
  const Time = IDL.Nat;
  const ActionId = IDL.Record({ 'id' : IDL.Nat, 'time' : Time });
  const SubscriptionStateShared = IDL.Record({
    'serviceCanister' : IDL.Principal,
    'status' : SubStatus,
    'nextPaymentAmount' : IDL.Opt(IDL.Nat),
    'endDate' : IDL.Opt(IDL.Nat),
    'interval' : Interval,
    'history' : IDL.Vec(IDL.Nat),
    'productId' : IDL.Opt(IDL.Nat),
    'subscriptionId' : IDL.Nat,
    'baseRateAsset' : IDL.Opt(Asset),
    'checkRate' : IDL.Opt(CheckRate),
    'account' : Account,
    'brokerId' : IDL.Opt(Account),
    'nextTimerId' : IDL.Opt(ActionId),
    'nextPayment' : IDL.Opt(IDL.Nat),
    'amountPerInterval' : IDL.Nat,
    'targetAccount' : IDL.Opt(Account),
    'tokenCanister' : IDL.Principal,
    'tokenPointer' : IDL.Opt(IDL.Vec(IDL.Nat8)),
  });
  const TokenInfo = IDL.Record({
    'tokenFee' : IDL.Opt(IDL.Nat),
    'standards' : IDL.Vec(IDL.Text),
    'tokenTotalSupply' : IDL.Nat,
    'tokenDecimals' : IDL.Nat8,
    'tokenSymbol' : IDL.Text,
    'tokenCanister' : IDL.Principal,
    'tokenPointer' : IDL.Opt(IDL.Nat),
  });
  const InitArgs__1 = IDL.Record({
    'maxQueries' : IDL.Opt(IDL.Nat),
    'maxUpdates' : IDL.Opt(IDL.Nat),
    'trxWindow' : IDL.Opt(IDL.Nat),
    'defaultTake' : IDL.Opt(IDL.Nat),
    'feeBPS' : IDL.Opt(IDL.Nat),
    'nextSubscriptionId' : IDL.Opt(IDL.Nat),
    'existingSubscriptions' : IDL.Vec(SubscriptionStateShared),
    'tokenInfo' : IDL.Opt(
      IDL.Vec(
        IDL.Tuple(
          IDL.Tuple(IDL.Principal, IDL.Opt(IDL.Vec(IDL.Nat8))),
          TokenInfo,
        )
      )
    ),
    'nextPaymentId' : IDL.Opt(IDL.Nat),
    'nextNotificationId' : IDL.Opt(IDL.Nat),
    'maxTake' : IDL.Opt(IDL.Nat),
    'publicGoodsAccount' : IDL.Opt(Account),
    'minDrift' : IDL.Opt(IDL.Nat),
    'maxMemoSize' : IDL.Opt(IDL.Nat),
  });
  const Args__1 = IDL.Opt(InitArgs__1);
  const ActionId__1 = IDL.Record({ 'id' : IDL.Nat, 'time' : Time });
  const Action = IDL.Record({
    'aSync' : IDL.Opt(IDL.Nat),
    'actionType' : IDL.Text,
    'params' : IDL.Vec(IDL.Nat8),
    'retries' : IDL.Nat,
  });
  const Args__2 = IDL.Opt(
    IDL.Record({
      'nextCycleActionId' : IDL.Opt(IDL.Nat),
      'maxExecutions' : IDL.Opt(IDL.Nat),
      'nextActionId' : IDL.Nat,
      'lastActionIdReported' : IDL.Opt(IDL.Nat),
      'lastCycleReport' : IDL.Opt(IDL.Nat),
      'initialTimers' : IDL.Vec(IDL.Tuple(ActionId__1, Action)),
      'expectedExecutionTime' : Time,
      'lastExecutionTime' : Time,
    })
  );
  const IndexType = IDL.Variant({
    'Stable' : IDL.Null,
    'StableTyped' : IDL.Null,
    'Managed' : IDL.Null,
  });
  const BlockType = IDL.Record({ 'url' : IDL.Text, 'block_type' : IDL.Text });
  const InitArgs = IDL.Record({
    'maxRecordsToArchive' : IDL.Nat,
    'archiveIndexType' : IndexType,
    'maxArchivePages' : IDL.Nat,
    'settleToRecords' : IDL.Nat,
    'archiveCycles' : IDL.Nat,
    'maxActiveRecords' : IDL.Nat,
    'maxRecordsInArchiveInstance' : IDL.Nat,
    'archiveControllers' : IDL.Opt(IDL.Opt(IDL.Vec(IDL.Principal))),
    'supportedBlocks' : IDL.Vec(BlockType),
  });
  const Args = IDL.Opt(InitArgs);
  const TokenInfo__1 = IDL.Record({
    'tokenFee' : IDL.Opt(IDL.Nat),
    'standards' : IDL.Vec(IDL.Text),
    'tokenTotalSupply' : IDL.Nat,
    'tokenDecimals' : IDL.Nat8,
    'tokenSymbol' : IDL.Text,
    'tokenCanister' : IDL.Principal,
    'tokenPointer' : IDL.Opt(IDL.Nat),
  });
  const GetArchivesArgs = IDL.Record({ 'from' : IDL.Opt(IDL.Principal) });
  const GetArchivesResultItem = IDL.Record({
    'end' : IDL.Nat,
    'canister_id' : IDL.Principal,
    'start' : IDL.Nat,
  });
  const GetArchivesResult = IDL.Vec(GetArchivesResultItem);
  const TransactionRange = IDL.Record({
    'start' : IDL.Nat,
    'length' : IDL.Nat,
  });
  const GetBlocksArgs = IDL.Vec(TransactionRange);
  Value__1.fill(
    IDL.Variant({
      'Int' : IDL.Int,
      'Map' : IDL.Vec(IDL.Tuple(IDL.Text, Value__1)),
      'Nat' : IDL.Nat,
      'Blob' : IDL.Vec(IDL.Nat8),
      'Text' : IDL.Text,
      'Array' : IDL.Vec(Value__1),
    })
  );
  const GetTransactionsResult = IDL.Record({
    'log_length' : IDL.Nat,
    'blocks' : IDL.Vec(IDL.Record({ 'id' : IDL.Nat, 'block' : Value__1 })),
    'archived_blocks' : IDL.Vec(ArchivedTransactionResponse),
  });
  const GetTransactionsFn = IDL.Func(
      [IDL.Vec(TransactionRange)],
      [GetTransactionsResult],
      ['query'],
    );
  ArchivedTransactionResponse.fill(
    IDL.Record({
      'args' : IDL.Vec(TransactionRange),
      'callback' : GetTransactionsFn,
    })
  );
  const GetBlocksResult = IDL.Record({
    'log_length' : IDL.Nat,
    'blocks' : IDL.Vec(IDL.Record({ 'id' : IDL.Nat, 'block' : Value__1 })),
    'archived_blocks' : IDL.Vec(ArchivedTransactionResponse),
  });
  const DataCertificate = IDL.Record({
    'certificate' : IDL.Vec(IDL.Nat8),
    'hash_tree' : IDL.Vec(IDL.Nat8),
  });
  const BlockType__1 = IDL.Record({
    'url' : IDL.Text,
    'block_type' : IDL.Text,
  });
  const SubStatus__1 = IDL.Variant({
    'Paused' : IDL.Tuple(IDL.Nat, IDL.Principal, IDL.Text),
    'Active' : IDL.Null,
    'WillCancel' : IDL.Tuple(IDL.Nat, IDL.Principal, IDL.Text),
    'Canceled' : IDL.Tuple(IDL.Nat, IDL.Nat, IDL.Principal, IDL.Text),
  });
  const CancelError = IDL.Variant({
    'InvalidStatus' : SubStatus__1,
    'NotFound' : IDL.Null,
    'Unauthorized' : IDL.Null,
    'Other' : IDL.Record({ 'code' : IDL.Nat, 'message' : IDL.Text }),
  });
  const CancelResult = IDL.Opt(
    IDL.Variant({ 'Ok' : IDL.Nat, 'Err' : CancelError })
  );
  const CheckRate__1 = IDL.Record({
    'decimals' : IDL.Nat32,
    'rate' : IDL.Nat64,
  });
  const ConfirmRequests = IDL.Record({
    'subscriptionId' : IDL.Nat,
    'checkRate' : IDL.Opt(CheckRate__1),
  });
  const SubscriptionError = IDL.Variant({
    'TokenNotFound' : IDL.Null,
    'InsufficientAllowance' : IDL.Nat,
    'SubscriptionNotFound' : IDL.Null,
    'Duplicate' : IDL.Null,
    'FoundActiveSubscription' : IDL.Nat,
    'InsufficientBalance' : IDL.Nat,
    'InvalidDate' : IDL.Null,
    'Unauthorized' : IDL.Null,
    'Other' : IDL.Record({ 'code' : IDL.Nat, 'message' : IDL.Text }),
    'InvalidInterval' : IDL.Null,
  });
  const ConfirmResult = IDL.Opt(
    IDL.Variant({ 'Ok' : IDL.Nat, 'Err' : SubscriptionError })
  );
  const Interval__1 = IDL.Variant({
    'Hourly' : IDL.Null,
    'Interval' : IDL.Nat,
    'Days' : IDL.Nat,
    'Weekly' : IDL.Null,
    'Weeks' : IDL.Nat,
    'Daily' : IDL.Null,
    'Monthly' : IDL.Null,
    'Months' : IDL.Nat,
    'Yearly' : IDL.Null,
  });
  const AssetClass__1 = IDL.Variant({
    'Cryptocurrency' : IDL.Null,
    'FiatCurrency' : IDL.Null,
  });
  const Asset__1 = IDL.Record({ 'class' : AssetClass__1, 'symbol' : IDL.Text });
  const Account__1 = IDL.Record({
    'owner' : IDL.Principal,
    'subaccount' : IDL.Opt(IDL.Vec(IDL.Nat8)),
  });
  const Subscription = IDL.Record({
    'serviceCanister' : IDL.Principal,
    'status' : SubStatus__1,
    'endDate' : IDL.Opt(IDL.Nat),
    'interval' : Interval__1,
    'productId' : IDL.Opt(IDL.Nat),
    'subscriptionId' : IDL.Nat,
    'baseRateAsset' : IDL.Opt(Asset__1),
    'account' : Account__1,
    'brokerId' : IDL.Opt(Account__1),
    'amountPerInterval' : IDL.Nat,
    'targetAccount' : IDL.Opt(Account__1),
    'tokenCanister' : IDL.Principal,
    'tokenPointer' : IDL.Opt(IDL.Vec(IDL.Nat8)),
  });
  const PendingPayment = IDL.Record({
    'nextPaymentAmount' : IDL.Opt(IDL.Nat),
    'subscription' : Subscription,
    'nextPaymentDate' : IDL.Opt(IDL.Nat),
  });
  const ExchangeRateMetadata = IDL.Record({
    'decimals' : IDL.Nat32,
    'forex_timestamp' : IDL.Opt(IDL.Nat64),
    'quote_asset_num_received_rates' : IDL.Nat64,
    'base_asset_num_received_rates' : IDL.Nat64,
    'base_asset_num_queried_sources' : IDL.Nat64,
    'standard_deviation' : IDL.Nat64,
    'quote_asset_num_queried_sources' : IDL.Nat64,
  });
  const ExchangeRate = IDL.Record({
    'metadata' : ExchangeRateMetadata,
    'rate' : IDL.Nat64,
    'timestamp' : IDL.Nat64,
    'quote_asset' : Asset__1,
    'base_asset' : Asset__1,
  });
  const ExchangeRateError = IDL.Variant({
    'AnonymousPrincipalNotAllowed' : IDL.Null,
    'CryptoQuoteAssetNotFound' : IDL.Null,
    'FailedToAcceptCycles' : IDL.Null,
    'ForexBaseAssetNotFound' : IDL.Null,
    'CryptoBaseAssetNotFound' : IDL.Null,
    'StablecoinRateTooFewRates' : IDL.Null,
    'ForexAssetsNotFound' : IDL.Null,
    'InconsistentRatesReceived' : IDL.Null,
    'RateLimited' : IDL.Null,
    'StablecoinRateZeroRate' : IDL.Null,
    'Other' : IDL.Record({ 'code' : IDL.Nat32, 'description' : IDL.Text }),
    'ForexInvalidTimestamp' : IDL.Null,
    'NotEnoughCycles' : IDL.Null,
    'ForexQuoteAssetNotFound' : IDL.Null,
    'StablecoinRateNotFound' : IDL.Null,
    'Pending' : IDL.Null,
  });
  const ServiceNotificationType = IDL.Variant({
    'SubscriptionPaused' : IDL.Record({
      'principal' : IDL.Principal,
      'subscriptionId' : IDL.Nat,
      'reason' : IDL.Text,
    }),
    'ExchangeRateError' : IDL.Record({
      'rate' : ExchangeRate,
      'rate_error' : IDL.Opt(ExchangeRateError),
      'subscriptionId' : IDL.Nat,
      'reason' : IDL.Opt(IDL.Text),
    }),
    'SubscriptionEnded' : IDL.Record({
      'principal' : IDL.Principal,
      'subscriptionId' : IDL.Nat,
      'reason' : IDL.Text,
    }),
    'SubscriptionActivated' : IDL.Record({
      'principal' : IDL.Principal,
      'subscriptionId' : IDL.Nat,
      'reason' : IDL.Text,
    }),
    'LedgerError' : IDL.Record({
      'rescheduled' : IDL.Opt(IDL.Nat),
      'error' : IDL.Text,
      'subscriptionId' : IDL.Nat,
    }),
    'AllowanceInsufficient' : IDL.Record({
      'principal' : IDL.Principal,
      'subscriptionId' : IDL.Nat,
    }),
  });
  const ServiceNotification = IDL.Record({
    'principal' : IDL.Principal,
    'date' : IDL.Nat,
    'notification' : ServiceNotificationType,
  });
  const SubStatusFilter = IDL.Variant({
    'Paused' : IDL.Null,
    'Active' : IDL.Null,
    'WillCancel' : IDL.Null,
    'Canceled' : IDL.Null,
  });
  const ServiceSubscriptionFilter__1 = IDL.Record({
    'status' : IDL.Opt(SubStatusFilter),
    'subscriptions' : IDL.Opt(IDL.Vec(IDL.Nat)),
    'products' : IDL.Opt(IDL.Vec(IDL.Opt(IDL.Nat))),
  });
  const PaymentRecord = IDL.Record({
    'fee' : IDL.Opt(IDL.Nat),
    'result' : IDL.Variant({
      'Ok' : IDL.Null,
      'Err' : IDL.Record({ 'code' : IDL.Nat, 'message' : IDL.Text }),
    }),
    'feeTransactionId' : IDL.Opt(IDL.Nat),
    'date' : IDL.Nat,
    'rate' : IDL.Opt(ExchangeRate),
    'ledgerTransactionId' : IDL.Opt(IDL.Nat),
    'subscriptionId' : IDL.Nat,
    'brokerFee' : IDL.Opt(IDL.Nat),
    'paymentId' : IDL.Nat,
    'amount' : IDL.Nat,
    'brokerTransactionId' : IDL.Opt(IDL.Nat),
    'transactionId' : IDL.Opt(IDL.Nat),
  });
  const ServiceSubscriptionFilter = IDL.Record({
    'status' : IDL.Opt(SubStatusFilter),
    'subscriptions' : IDL.Opt(IDL.Vec(IDL.Nat)),
    'products' : IDL.Opt(IDL.Vec(IDL.Opt(IDL.Nat))),
  });
  const UserSubscriptionsFilter = IDL.Record({
    'status' : IDL.Opt(SubStatusFilter),
    'subscriptions' : IDL.Opt(IDL.Vec(IDL.Nat)),
    'subaccounts' : IDL.Opt(IDL.Vec(IDL.Opt(IDL.Vec(IDL.Nat8)))),
    'products' : IDL.Opt(IDL.Vec(IDL.Opt(IDL.Nat))),
    'services' : IDL.Opt(IDL.Vec(IDL.Principal)),
  });
  Value.fill(
    IDL.Variant({
      'Int' : IDL.Int,
      'Map' : IDL.Vec(IDL.Tuple(IDL.Text, Value)),
      'Nat' : IDL.Nat,
      'Blob' : IDL.Vec(IDL.Nat8),
      'Text' : IDL.Text,
      'Array' : IDL.Vec(Value),
    })
  );
  const PauseRequestItem = IDL.Record({
    'active' : IDL.Bool,
    'subscriptionId' : IDL.Nat,
    'reason' : IDL.Text,
  });
  const PauseRequest = IDL.Vec(PauseRequestItem);
  const PauseError = IDL.Variant({
    'InvalidStatus' : SubStatus__1,
    'NotFound' : IDL.Null,
    'Unauthorized' : IDL.Null,
    'Other' : IDL.Record({ 'code' : IDL.Nat, 'message' : IDL.Text }),
  });
  const PauseResult = IDL.Opt(
    IDL.Variant({ 'Ok' : IDL.Nat, 'Err' : PauseError })
  );
  const TokenPointer = IDL.Vec(IDL.Nat8);
  const SubscriptionRequestItem = IDL.Variant({
    'serviceCanister' : IDL.Principal,
    'firstPayment' : IDL.Nat,
    'broker' : Account__1,
    'endDate' : IDL.Nat,
    'interval' : Interval__1,
    'memo' : IDL.Vec(IDL.Nat8),
    'subaccount' : IDL.Vec(IDL.Nat8),
    'createdAtTime' : IDL.Nat,
    'productId' : IDL.Nat,
    'nowPayment' : IDL.Nat,
    'baseRateAsset' : IDL.Tuple(Asset__1, CheckRate__1),
    'amountPerInterval' : IDL.Nat,
    'targetAccount' : Account__1,
    'tokenCanister' : IDL.Principal,
    'tokenPointer' : TokenPointer,
  });
  const SubscriptionRequest = IDL.Vec(IDL.Vec(SubscriptionRequestItem));
  const SubscriptionResponse = IDL.Record({
    'subscriptionId' : IDL.Nat,
    'transactionId' : IDL.Nat,
  });
  const SubscriptionResultItem = IDL.Opt(
    IDL.Variant({ 'Ok' : SubscriptionResponse, 'Err' : SubscriptionError })
  );
  const SubscriptionResult = IDL.Vec(SubscriptionResultItem);
  const Subs = IDL.Service({
    'add_blocked_service' : IDL.Func([IDL.Principal, IDL.Bool], [], []),
    'add_token' : IDL.Func(
        [IDL.Principal, IDL.Opt(IDL.Vec(IDL.Nat8))],
        [IDL.Opt(TokenInfo__1)],
        [],
      ),
    'get_token_info' : IDL.Func([], [IDL.Vec(TokenInfo__1)], ['query']),
    'icrc10_supported_standards' : IDL.Func(
        [],
        [IDL.Vec(IDL.Record({ 'url' : IDL.Text, 'name' : IDL.Text }))],
        ['query'],
      ),
    'icrc3_get_archives' : IDL.Func(
        [GetArchivesArgs],
        [GetArchivesResult],
        ['query'],
      ),
    'icrc3_get_blocks' : IDL.Func(
        [GetBlocksArgs],
        [GetBlocksResult],
        ['query'],
      ),
    'icrc3_get_tip_certificate' : IDL.Func(
        [],
        [IDL.Opt(DataCertificate)],
        ['query'],
      ),
    'icrc3_supported_block_types' : IDL.Func(
        [],
        [IDL.Vec(BlockType__1)],
        ['query'],
      ),
    'icrc79_cancel_subscription' : IDL.Func(
        [
          IDL.Vec(
            IDL.Record({ 'subscriptionId' : IDL.Nat, 'reason' : IDL.Text })
          ),
        ],
        [IDL.Vec(CancelResult)],
        [],
      ),
    'icrc79_cancel_subscription_0_0_1' : IDL.Func(
        [
          IDL.Vec(
            IDL.Record({ 'subscriptionId' : IDL.Nat, 'reason' : IDL.Text })
          ),
        ],
        [IDL.Vec(CancelResult)],
        [],
      ),
    'icrc79_confirm_subscription' : IDL.Func(
        [IDL.Vec(ConfirmRequests)],
        [IDL.Vec(ConfirmResult)],
        [],
      ),
    'icrc79_confirm_subscription_0_0_1' : IDL.Func(
        [IDL.Vec(ConfirmRequests)],
        [IDL.Vec(ConfirmResult)],
        [],
      ),
    'icrc79_default_take_value' : IDL.Func([], [IDL.Nat], ['query']),
    'icrc79_default_take_value_0_0_1' : IDL.Func([], [IDL.Nat], ['query']),
    'icrc79_get_payments_pending' : IDL.Func(
        [IDL.Vec(IDL.Nat)],
        [IDL.Vec(IDL.Opt(PendingPayment))],
        ['query'],
      ),
    'icrc79_get_payments_pending_0_0_1' : IDL.Func(
        [IDL.Vec(IDL.Nat)],
        [IDL.Vec(IDL.Opt(PendingPayment))],
        ['query'],
      ),
    'icrc79_get_service_notifications' : IDL.Func(
        [IDL.Principal, IDL.Opt(IDL.Nat), IDL.Opt(IDL.Nat)],
        [IDL.Vec(ServiceNotification)],
        ['query'],
      ),
    'icrc79_get_service_notifications_0_0_1' : IDL.Func(
        [IDL.Principal, IDL.Opt(IDL.Nat), IDL.Opt(IDL.Nat)],
        [IDL.Vec(ServiceNotification)],
        ['query'],
      ),
    'icrc79_get_service_payments' : IDL.Func(
        [
          IDL.Principal,
          IDL.Opt(ServiceSubscriptionFilter__1),
          IDL.Opt(IDL.Nat),
          IDL.Opt(IDL.Nat),
        ],
        [IDL.Vec(PaymentRecord)],
        ['query'],
      ),
    'icrc79_get_service_payments_0_0_1' : IDL.Func(
        [
          IDL.Principal,
          IDL.Opt(ServiceSubscriptionFilter__1),
          IDL.Opt(IDL.Nat),
          IDL.Opt(IDL.Nat),
        ],
        [IDL.Vec(PaymentRecord)],
        ['query'],
      ),
    'icrc79_get_service_subscriptions' : IDL.Func(
        [
          IDL.Principal,
          IDL.Opt(ServiceSubscriptionFilter),
          IDL.Opt(IDL.Nat),
          IDL.Opt(IDL.Nat),
        ],
        [IDL.Vec(Subscription)],
        ['query'],
      ),
    'icrc79_get_service_subscriptions_0_0_1' : IDL.Func(
        [
          IDL.Principal,
          IDL.Opt(ServiceSubscriptionFilter),
          IDL.Opt(IDL.Nat),
          IDL.Opt(IDL.Nat),
        ],
        [IDL.Vec(Subscription)],
        ['query'],
      ),
    'icrc79_get_user_payments' : IDL.Func(
        [IDL.Opt(UserSubscriptionsFilter), IDL.Opt(IDL.Nat), IDL.Opt(IDL.Nat)],
        [IDL.Vec(PaymentRecord)],
        ['query'],
      ),
    'icrc79_get_user_payments_0_0_1' : IDL.Func(
        [IDL.Opt(UserSubscriptionsFilter), IDL.Opt(IDL.Nat), IDL.Opt(IDL.Nat)],
        [IDL.Vec(PaymentRecord)],
        ['query'],
      ),
    'icrc79_get_user_subscriptions' : IDL.Func(
        [IDL.Opt(UserSubscriptionsFilter), IDL.Opt(IDL.Nat), IDL.Opt(IDL.Nat)],
        [IDL.Vec(Subscription)],
        ['query'],
      ),
    'icrc79_get_user_subscriptions_0_0_1' : IDL.Func(
        [IDL.Opt(UserSubscriptionsFilter), IDL.Opt(IDL.Nat), IDL.Opt(IDL.Nat)],
        [IDL.Vec(Subscription)],
        ['query'],
      ),
    'icrc79_max_memo_size' : IDL.Func([], [IDL.Nat], ['query']),
    'icrc79_max_memo_size_0_0_1' : IDL.Func([], [IDL.Nat], ['query']),
    'icrc79_max_query_batch_size' : IDL.Func([], [IDL.Nat], ['query']),
    'icrc79_max_query_batch_size_0_0_1' : IDL.Func([], [IDL.Nat], ['query']),
    'icrc79_max_take_value' : IDL.Func([], [IDL.Nat], ['query']),
    'icrc79_max_take_value_0_0_1' : IDL.Func([], [IDL.Nat], ['query']),
    'icrc79_max_update_batch_size' : IDL.Func([], [IDL.Nat], ['query']),
    'icrc79_max_update_batch_size_0_0_1' : IDL.Func([], [IDL.Nat], ['query']),
    'icrc79_metadata' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Text, Value))],
        ['query'],
      ),
    'icrc79_metadata_0_0_1' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Text, Value))],
        ['query'],
      ),
    'icrc79_pause_subscription' : IDL.Func(
        [PauseRequest],
        [IDL.Vec(PauseResult)],
        [],
      ),
    'icrc79_pause_subscription_0_0_1' : IDL.Func(
        [PauseRequest],
        [IDL.Vec(PauseResult)],
        [],
      ),
    'icrc79_permitted_drift' : IDL.Func([], [IDL.Nat], ['query']),
    'icrc79_permitted_drift_0_0_1' : IDL.Func([], [IDL.Nat], ['query']),
    'icrc79_subscribe' : IDL.Func(
        [SubscriptionRequest],
        [SubscriptionResult],
        [],
      ),
    'icrc79_subscribe_0_0_1' : IDL.Func(
        [SubscriptionRequest],
        [SubscriptionResult],
        [],
      ),
    'icrc79_tx_window' : IDL.Func([], [IDL.Nat], ['query']),
    'icrc79_tx_window_0_0_1' : IDL.Func([], [IDL.Nat], ['query']),
    'init' : IDL.Func([], [], []),
  });
  return Subs;
};
export const init = ({ IDL }) => {
  const SubStatus = IDL.Variant({
    'Paused' : IDL.Tuple(IDL.Nat, IDL.Principal, IDL.Text),
    'Active' : IDL.Null,
    'WillCancel' : IDL.Tuple(IDL.Nat, IDL.Principal, IDL.Text),
    'Canceled' : IDL.Tuple(IDL.Nat, IDL.Nat, IDL.Principal, IDL.Text),
  });
  const Interval = IDL.Variant({
    'Hourly' : IDL.Null,
    'Interval' : IDL.Nat,
    'Days' : IDL.Nat,
    'Weekly' : IDL.Null,
    'Weeks' : IDL.Nat,
    'Daily' : IDL.Null,
    'Monthly' : IDL.Null,
    'Months' : IDL.Nat,
    'Yearly' : IDL.Null,
  });
  const AssetClass = IDL.Variant({
    'Cryptocurrency' : IDL.Null,
    'FiatCurrency' : IDL.Null,
  });
  const Asset = IDL.Record({ 'class' : AssetClass, 'symbol' : IDL.Text });
  const CheckRate = IDL.Record({ 'decimals' : IDL.Nat32, 'rate' : IDL.Nat64 });
  const Account = IDL.Record({
    'owner' : IDL.Principal,
    'subaccount' : IDL.Opt(IDL.Vec(IDL.Nat8)),
  });
  const Time = IDL.Nat;
  const ActionId = IDL.Record({ 'id' : IDL.Nat, 'time' : Time });
  const SubscriptionStateShared = IDL.Record({
    'serviceCanister' : IDL.Principal,
    'status' : SubStatus,
    'nextPaymentAmount' : IDL.Opt(IDL.Nat),
    'endDate' : IDL.Opt(IDL.Nat),
    'interval' : Interval,
    'history' : IDL.Vec(IDL.Nat),
    'productId' : IDL.Opt(IDL.Nat),
    'subscriptionId' : IDL.Nat,
    'baseRateAsset' : IDL.Opt(Asset),
    'checkRate' : IDL.Opt(CheckRate),
    'account' : Account,
    'brokerId' : IDL.Opt(Account),
    'nextTimerId' : IDL.Opt(ActionId),
    'nextPayment' : IDL.Opt(IDL.Nat),
    'amountPerInterval' : IDL.Nat,
    'targetAccount' : IDL.Opt(Account),
    'tokenCanister' : IDL.Principal,
    'tokenPointer' : IDL.Opt(IDL.Vec(IDL.Nat8)),
  });
  const TokenInfo = IDL.Record({
    'tokenFee' : IDL.Opt(IDL.Nat),
    'standards' : IDL.Vec(IDL.Text),
    'tokenTotalSupply' : IDL.Nat,
    'tokenDecimals' : IDL.Nat8,
    'tokenSymbol' : IDL.Text,
    'tokenCanister' : IDL.Principal,
    'tokenPointer' : IDL.Opt(IDL.Nat),
  });
  const InitArgs__1 = IDL.Record({
    'maxQueries' : IDL.Opt(IDL.Nat),
    'maxUpdates' : IDL.Opt(IDL.Nat),
    'trxWindow' : IDL.Opt(IDL.Nat),
    'defaultTake' : IDL.Opt(IDL.Nat),
    'feeBPS' : IDL.Opt(IDL.Nat),
    'nextSubscriptionId' : IDL.Opt(IDL.Nat),
    'existingSubscriptions' : IDL.Vec(SubscriptionStateShared),
    'tokenInfo' : IDL.Opt(
      IDL.Vec(
        IDL.Tuple(
          IDL.Tuple(IDL.Principal, IDL.Opt(IDL.Vec(IDL.Nat8))),
          TokenInfo,
        )
      )
    ),
    'nextPaymentId' : IDL.Opt(IDL.Nat),
    'nextNotificationId' : IDL.Opt(IDL.Nat),
    'maxTake' : IDL.Opt(IDL.Nat),
    'publicGoodsAccount' : IDL.Opt(Account),
    'minDrift' : IDL.Opt(IDL.Nat),
    'maxMemoSize' : IDL.Opt(IDL.Nat),
  });
  const Args__1 = IDL.Opt(InitArgs__1);
  const ActionId__1 = IDL.Record({ 'id' : IDL.Nat, 'time' : Time });
  const Action = IDL.Record({
    'aSync' : IDL.Opt(IDL.Nat),
    'actionType' : IDL.Text,
    'params' : IDL.Vec(IDL.Nat8),
    'retries' : IDL.Nat,
  });
  const Args__2 = IDL.Opt(
    IDL.Record({
      'nextCycleActionId' : IDL.Opt(IDL.Nat),
      'maxExecutions' : IDL.Opt(IDL.Nat),
      'nextActionId' : IDL.Nat,
      'lastActionIdReported' : IDL.Opt(IDL.Nat),
      'lastCycleReport' : IDL.Opt(IDL.Nat),
      'initialTimers' : IDL.Vec(IDL.Tuple(ActionId__1, Action)),
      'expectedExecutionTime' : Time,
      'lastExecutionTime' : Time,
    })
  );
  const IndexType = IDL.Variant({
    'Stable' : IDL.Null,
    'StableTyped' : IDL.Null,
    'Managed' : IDL.Null,
  });
  const BlockType = IDL.Record({ 'url' : IDL.Text, 'block_type' : IDL.Text });
  const InitArgs = IDL.Record({
    'maxRecordsToArchive' : IDL.Nat,
    'archiveIndexType' : IndexType,
    'maxArchivePages' : IDL.Nat,
    'settleToRecords' : IDL.Nat,
    'archiveCycles' : IDL.Nat,
    'maxActiveRecords' : IDL.Nat,
    'maxRecordsInArchiveInstance' : IDL.Nat,
    'archiveControllers' : IDL.Opt(IDL.Opt(IDL.Vec(IDL.Principal))),
    'supportedBlocks' : IDL.Vec(BlockType),
  });
  const Args = IDL.Opt(InitArgs);
  return [
    IDL.Opt(
      IDL.Record({
        'icrc79InitArgs' : IDL.Opt(Args__1),
        'ttInitArgs' : IDL.Opt(Args__2),
        'icrc3InitArgs' : IDL.Opt(Args),
      })
    ),
  ];
};
