import { BigInt } from "@graphprotocol/graph-ts"
import {
  tokeyMarketplaceV2Rinkeby,
  AuctionBuffersUpdated,
  AuctionClosed,
  ListingAdded,
  ListingRemoved,
  ListingUpdated,
  NewOffer,
  NewSale,
  PlatformFeeInfoUpdated,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked
} from "../generated/tokeyMarketplaceV2Rinkeby/tokeyMarketplaceV2Rinkeby"
import { ExampleEntity } from "../generated/schema"

export function handleAuctionBuffersUpdated(
  event: AuctionBuffersUpdated
): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.timeBuffer = event.params.timeBuffer
  entity.bidBufferBps = event.params.bidBufferBps

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.DEFAULT_ADMIN_ROLE(...)
  // - contract.MAX_BPS(...)
  // - contract.bidBufferBps(...)
  // - contract.contractType(...)
  // - contract.contractURI(...)
  // - contract.contractVersion(...)
  // - contract.getPlatformFeeInfo(...)
  // - contract.getRoleAdmin(...)
  // - contract.getRoleMember(...)
  // - contract.getRoleMemberCount(...)
  // - contract.hasRole(...)
  // - contract.isTrustedForwarder(...)
  // - contract.listings(...)
  // - contract.multicall(...)
  // - contract.offers(...)
  // - contract.onERC1155BatchReceived(...)
  // - contract.onERC1155Received(...)
  // - contract.onERC721Received(...)
  // - contract.supportsInterface(...)
  // - contract.thirdwebFee(...)
  // - contract.timeBuffer(...)
  // - contract.totalListings(...)
  // - contract.winningBid(...)
}

export function handleAuctionClosed(event: AuctionClosed): void {}

export function handleListingAdded(event: ListingAdded): void {}

export function handleListingRemoved(event: ListingRemoved): void {}

export function handleListingUpdated(event: ListingUpdated): void {}

export function handleNewOffer(event: NewOffer): void {}

export function handleNewSale(event: NewSale): void {}

export function handlePlatformFeeInfoUpdated(
  event: PlatformFeeInfoUpdated
): void {}

export function handleRoleAdminChanged(event: RoleAdminChanged): void {}

export function handleRoleGranted(event: RoleGranted): void {}

export function handleRoleRevoked(event: RoleRevoked): void {}
