import {Args, Command, Flags} from '@oclif/core'

export default class SampleHello extends Command {
  static override description = 'Print a greeting from the agentia-cli-my-plugin plugin'
  static override examples = [
    '<%= config.bin %> <%= command.id %>',
    '<%= config.bin %> <%= command.id %> World',
    '<%= config.bin %> <%= command.id %> --from agentia-cli-my-plugin',
  ]
  static override args = {
    name: Args.string({description: 'Name to greet', required: false}),
  }
  static override flags = {
    from: Flags.string({
      char: 'f',
      description: 'Who the greeting is from',
      default: 'agentia-cli-my-plugin',
    }),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(SampleHello)
    const name = args.name ?? 'Agentia'
    this.log(`hello ${name} from ${flags.from}`)
  }
}
