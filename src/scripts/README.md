# Database Seeding Scripts

This directory contains scripts for managing the database with sample data.

## Scripts

### `seed.ts`

Populates the database with comprehensive sample data including:

- **Users**: Admin and Manager users for testing
- **Drivers**: 5 sample drivers with different statuses and profiles
- **Work Experiences**: Previous job history for drivers
- **References**: Personal references for drivers
- **Documents**: CNIC and license documents
- **Violations**: Sample traffic violations
- **Assignments**: Driver-vehicle assignments

### `reset.ts`

Completely clears all data from the database. Useful for testing and development.

## Sample Data Overview

### Drivers

1. **Ahmed Khan** - Active tanker driver with full documentation
2. **Ali Hassan** - Active trailer driver with clean record
3. **Usman Sheikh** - Suspended dumper driver (minor violation)
4. **Hassan Ali** - Terminated truck driver (policy violations)
5. **Fatima Bibi** - Active female bus driver (excellent record)

### Driver Statuses

- **Active**: 3 drivers (Ahmed, Ali, Fatima)
- **Suspended**: 1 driver (Usman)
- **Terminated**: 1 driver (Hassan)

### Data Variety

- Different education levels (Primary to Bachelors)
- Various vehicle types (Tanker, Trailer, Dumper, Truck, Bus)
- Multiple license types (LTV, HTV, PSV)
- Different blood groups and personal details
- Realistic Pakistani addresses and phone numbers
- Various work experiences and references

## Usage

### Seed the database

```bash
npm run db:seed
```

### Reset the database

```bash
npm run db:reset
```

### Reset and reseed

```bash
npm run db:reset && npm run db:seed
```

## Prerequisites

- Database must be migrated (`npm run db:migrate`)
- Prisma client must be generated (`npm run db:generate`)

## Notes

- The seed script automatically handles foreign key relationships
- All dates are realistic and properly formatted
- Sample data includes edge cases for testing
- Clerk user IDs are placeholder values - replace with real IDs in production
- Document URLs are example URLs - replace with real file paths in production

## Development

When adding new sample data:

1. Follow the existing patterns in `seed.ts`
2. Ensure all required fields are provided
3. Use realistic Pakistani data (addresses, names, phone numbers)
4. Include a variety of statuses and edge cases
5. Update this README with any new data types
