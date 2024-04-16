export const SMART_CONTRACT_CODE = `use anchor_lang::prelude::*;
use anchor_spl::token;
use anchor_lang::solana_program::{clock::Clock, hash::hash};

pub const MASTER_SEED: &str = "master";
pub const AUTOMATIC_DRAW_SEED: &str = "automatic_draw";
pub const ENTRY_SEED: &str = "entry";

pub const EXCLUDED_ADDRESSES: [Pubkey; 30] = [
    solana_program::pubkey!("GPMjfV4LTE3tnAeVHAbGS4krJkqaDw4ydFj15e7kjJTU"),
    solana_program::pubkey!("8PEc2ivbUPdNLYjCnGDzDZufaoZiK5vmaxfThDe3nnm7"),
    solana_program::pubkey!("3H5PtuLf6oj4syACUjtX8Q86LhWxZ4hQbC5nDeBGDQbj"),
    solana_program::pubkey!("6JukvoP9CezpKNJQt5LE4Rdisy2SC2PueW4vKmmUmv1f"),
    solana_program::pubkey!("8ezycB1desDXkbQN5mM8VFZ7mChEUmo3cAXZMDUA8tsD"),
    solana_program::pubkey!("D35tQ6uefH3DmcCvhMRt8V3qRTjy6xMjWL6GmGNa8DDn"),
    solana_program::pubkey!("75EyTNzER7KGCr3h58cGsNDjhZtfZsr42YXJU9qqcjkg"),
    solana_program::pubkey!("5RBYtsTivBW7cz51FzUvQ1Q4qWg7CkQVjy2gZ1FtM293"),
    solana_program::pubkey!("5T1XGBg9dp1uFykmZTmobH5oDVzAWGLGdZAARqpKPT59"),
    solana_program::pubkey!("FdgPzGvCknpJyhokF3g3bVyGaWRqCcCB7wdzB8xVpGQ6"),
    solana_program::pubkey!("HxJpBBXYE5aos4BQY27r2MjFzicxAjy8RhJ9U4vMvm6R"),
    solana_program::pubkey!("CfVBbVEBq8kp94dtKxyw8keCUFg4W1uSJs9hyA3y757k"),
    solana_program::pubkey!("2bFBUnR8hwqYtsbUUD6LNcJZCfx8KAEhEayo6JqNT3DH"),
    solana_program::pubkey!("149SNMYcWGt9hztcWGsioW9RFp7yNRRw3cRwyVrNs6Cv"),
    solana_program::pubkey!("C7V4A27RxuzuS7Qv3F6qPCdAW46voWCoUHhG4XQjzuEk"),
    solana_program::pubkey!("4ep47ejZ5HhwJWi7PoYQxUWRN4srDZLZ9n8BP4oYt8JY"),
    solana_program::pubkey!("2C6Rr1qJ7CGbDzreFsp1YaAfF52Jga55HijQNLDkbzae"),
    solana_program::pubkey!("DSNXQ1Nt4mNwPx4RWUEKNwFoneZn9oSokcgeN9RA2oYH"),
    solana_program::pubkey!("HnQ4TCJhttL33TtqSQKDwMi6qG9SuX184VBXx3agn5ur"),
    solana_program::pubkey!("CNa8eCs3HCFvGYjKsqnodGftunY6gZQtM4HcqbXGCmu6"),
    solana_program::pubkey!("AYLuGHDVZkAt1PnHSprL2ww7G6ox4bHLRzERGe68qsji"),
    solana_program::pubkey!("5PUwm8Jod1Ntsi7RJauWza5vd3mXQhoPaUX9i6ycMio8"),
    solana_program::pubkey!("3nfQZE28xtUP1yBdn5hDV1ULqJ6DsBjDARmN4dXge8Xb"),
    solana_program::pubkey!("7Y87sAsXYzxa7goqzGfyd9yW6g2MtAXoT6zXgPri4GWV"),
    solana_program::pubkey!("FgFPtqo4T2jj11JKhErejboWC7Ae7iFVBRw7JwJuHQLA"),
    solana_program::pubkey!("Dsmu3EGtCWgTUnTdrMN4uQoax4LWxyvkMvBfq1UysMmF"),
    solana_program::pubkey!("C8sjE6gA7qGuXkUHZ4yJNx8H61t6BUrEyzQpVaR4Uw3g"),
    solana_program::pubkey!("DYCUYtDGawoR5EZHzGx7CHL6iJsAgW538zjwyYyyc1SS"),
    solana_program::pubkey!("JDdKGWgPvZjXUcvuwiha69oNHz1ghyCfgcbqxwafQgcw"),
    solana_program::pubkey!("78kcuw4HWUotQkMSXs6i5RdET8YzPe6oxiusXKuU5ix9"),
];

#[error_code]
pub enum TokenAutomaticDrawError {
    #[msg("Winner already exists.")]
    WinnerAlreadySelected,
    #[msg("Cannot select a winner because the automaticDraw has no participants.")]
    NoEntries,
    #[msg("Mint address is not same.")]
    InvalidMint,
    #[msg("No enough token holdings.")]
    InsufficientTokens,
    #[msg("Address is excluded automatic draw.")]
    ExcludedAddress,
}

mod constants;
mod error;

use constants::*;
use error::*;

declare_id!("AxtuDAYigkzFLSjR9WE7jHMCvetVDaAuE2GQgkoHWFQa");

#[program]
mod token_automatic_draw {
    use super::*;

    pub fn initialize_master(_ctx: Context<InitializeMaster>) -> Result<()> {
        let master = &mut _ctx.accounts.master;
        let payer = &_ctx.accounts.payer;

        master.authority = *payer.key;
        Ok(())
    }

    pub fn create_automatic_draw(
        ctx: Context<CreateAutomaticDraw>,
        tokens_per_entry: u64,
        token_mint: Pubkey,
    ) -> Result<()> {
        let master = &mut ctx.accounts.master;
        let automatic_draw = &mut ctx.accounts.automatic_draw;

        // Increment the last automatic_draw id
        master.last_id += 1;

        // Set automatic_draw values
        automatic_draw.id = master.last_id;
        automatic_draw.authority = ctx.accounts.authority.key();
        automatic_draw.token_mint = token_mint;
        automatic_draw.tokens_per_entry = tokens_per_entry;

        msg!("Created automatic_draw: {}", automatic_draw.id);
        msg!("Authority: {}", automatic_draw.authority);
        msg!("Entry cost: {}", automatic_draw.tokens_per_entry);

        Ok(())
    }

    //Draws one winner from participants based on their token holdings at each market cap milestone of $10,000,000.
    pub fn select_winner(ctx: Context<SelectWinner>, automatic_draw_id: u32) -> Result<()> {
        let automatic_draw = &mut ctx.accounts.automatic_draw;

        if automatic_draw.winner_id.is_some() {
            return Err(TokenAutomaticDrawError::WinnerAlreadySelected.into());
        }
        if automatic_draw.last_entry_id == 0 {
            return Err(TokenAutomaticDrawError::NoEntries.into());
        }

        // Select a pseudo-random winner
        let clock = Clock::get()?;
        let pseudo_random_number = ((u64::from_le_bytes(
            <[u8; 8]>::try_from(&hash(&clock.unix_timestamp.to_be_bytes()).to_bytes()[..8])
                .unwrap(),
        ).wrapping_mul(clock.slot))
            % u64::MAX) as u64;

        let winner_id = (pseudo_random_number % automatic_draw.last_entry_id) + 1;
        automatic_draw.winner_id = Some(winner_id);

        msg!("Winner id: {}", pseudo_random_number);

        Ok(())
    }

    pub fn enter_automatic_draw(
        ctx: Context<EnterAutomaticDraw>,
        automatic_draw_id: u32,
    ) -> Result<()> {
        let automatic_draw = &mut ctx.accounts.automatic_draw;
        let entry = &mut ctx.accounts.holding_to_entries;

        if automatic_draw.winner_id.is_some() {
            return Err(TokenAutomaticDrawError::WinnerAlreadySelected.into());
        }

        let token_holdings = ctx.accounts.token_account.amount;
        let mint_address = ctx.accounts.token_account.mint;

        // Check if the mint address of the token account matches the desired mint address
        if mint_address != automatic_draw.token_mint {
            return Err(TokenAutomaticDrawError::InvalidMint.into());
        }

        if token_holdings <= automatic_draw.tokens_per_entry {
            return Err(TokenAutomaticDrawError::InsufficientTokens.into());
        }

        for address in EXCLUDED_ADDRESSES.iter() {
            if *address == ctx.accounts.token_account.key() {
                msg!("excluded address found: {:?}", address);
                return Err(TokenAutomaticDrawError::ExcludedAddress.into());
            }
        }

        entry.holdings = token_holdings;
        entry.automatic_draw_id = automatic_draw_id;
        entry.entered_by = ctx.accounts.token_account.key();

        // Assign entry range
        entry.entry_from = automatic_draw.last_entry_id + 1;
        entry.entry_to =
            automatic_draw.last_entry_id + (token_holdings / automatic_draw.tokens_per_entry);
        automatic_draw.last_entry_id = entry.entry_to;

        msg!("Token holdings: {}", token_holdings);
        msg!("Mint address: {}", mint_address);

        Ok(())
    }
}

#[derive(Accounts)]
pub struct InitializeMaster<'info> {
    #[account(
        init,
        payer = payer,
        space = 8 + 4 + 32,
        seeds = [MASTER_SEED.as_bytes()],
        bump,
    )]
    pub master: Account<'info, Master>,
    #[account(mut)]
    pub payer: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct Master {
    pub last_id: u32,
    pub authority: Pubkey,
}

#[derive(Accounts)]
pub struct CreateAutomaticDraw<'info> {
    #[account(
        init,
        payer = authority,
        space = 8 + 4 + 32 + 8 + 8 + 1 + 8 + 1 + 32,
        seeds = [AUTOMATIC_DRAW_SEED.as_bytes(), &(master.last_id + 1).to_le_bytes()],
        bump,
    )]
    pub automatic_draw: Account<'info, AutomaticDraw>,
    #[account(
        mut,
        seeds = [MASTER_SEED.as_bytes()],
        bump,
    )]
    pub master: Account<'info, Master>,
    #[account(mut,address=master.authority)]
    pub authority: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct AutomaticDraw {
    pub id: u32,
    pub authority: Pubkey,
    pub last_entry_id: u64,
    pub tokens_per_entry: u64,
    pub winner_id: Option<u64>,
    pub token_mint: Pubkey,
}

#[derive(Accounts)]
#[instruction(automatic_draw_id: u32)]
pub struct SelectWinner<'info> {
    #[account(
        mut,
        seeds = [AUTOMATIC_DRAW_SEED.as_bytes(), &automatic_draw_id.to_le_bytes()],
        bump,
        has_one = authority,
    )]
    pub automatic_draw: Account<'info, AutomaticDraw>,
    pub authority: Signer<'info>,
}

#[derive(Accounts)]
#[instruction(automatic_draw_id: u32)]
pub struct EnterAutomaticDraw<'info> {
    #[account(
        mut,
        seeds = [AUTOMATIC_DRAW_SEED.as_bytes(), &automatic_draw_id.to_le_bytes()],
        bump,
    )]
    pub automatic_draw: Account<'info, AutomaticDraw>,
    #[account(
        init,
        payer = payer,
        space = 8 + 8 + 8 + 8 + 4 + 32,
        seeds = [
            ENTRY_SEED.as_bytes(),
            automatic_draw.key().as_ref(),
            token_account.key().as_ref(),
        ],
        bump,
    )]
    pub holding_to_entries: Account<'info, Entry>,
    #[account(mut)]
    pub token_account: Account<'info, token::TokenAccount>,
    #[account(mut,address=automatic_draw.authority)]
    pub payer: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct Entry {
    pub holdings: u64,
    pub entry_from: u64,
    pub entry_to: u64,
    pub automatic_draw_id: u32,
    pub entered_by: Pubkey,
}`;
