import { CostumerCreateDto } from '../dto/costumer-create.dto';
import { v4 as UuidV4 } from 'uuid';
export function CostumerCreateQuery(dataJsonDto: CostumerCreateDto): string {
  const OlUuid = UuidV4();
  const olAppId = dataJsonDto.pe_app_id ?? 1;
  const olSystemClientId = dataJsonDto.pe_system_client_id;
  const olStoreId = dataJsonDto.pe_store_id;
  const olOrganizationId = dataJsonDto.pe_organization_id;
  const olUserId = dataJsonDto.pe_user_id;
  const olMemberRole = dataJsonDto.pe_member_role;
  const olPersonId = dataJsonDto.pe_person_id;
  const olNomeUsuario = dataJsonDto.pe_nome_usuario;
  const olNome = dataJsonDto.pe_nome;
  const olEmailDeLogin = dataJsonDto.pe_email_de_login;
  const olIdPessoaTipo = dataJsonDto.pe_id_pessoa_tipo;
  const olCnpj = dataJsonDto.pe_cnpj;
  const olRazaoSocial = dataJsonDto.pe_razao_social;
  const olCpf = dataJsonDto.pe_cpf;
  const olFone1 = dataJsonDto.pe_fone1;
  const olWhatsapp1 = dataJsonDto.pe_whatsapp1;
  const olImagem01 = dataJsonDto.pe_imagem01;
  const olCep = dataJsonDto.pe_cep;
  const olEndereco = dataJsonDto.pe_endereco;
  const olEnderecoNumero = dataJsonDto.pe_endereco_numero;
  const olComplemento = dataJsonDto.pe_complemento;
  const olBairro = dataJsonDto.pe_bairro;
  const olCidade = dataJsonDto.pe_cidade;
  const olUf = dataJsonDto.pe_uf;
  const olAnotacoes = dataJsonDto.pe_anotacoes;

  const queryString = ` call sp_costumer_create_v2(
        '${OlUuid}',
        ${olAppId},
        ${olSystemClientId},
        ${olStoreId},
        '${olOrganizationId}',
        '${olUserId}',
        '${olMemberRole}',
        ${olPersonId},
        '${olNomeUsuario}',
        '${olNome}',
        '${olEmailDeLogin}',
        ${olIdPessoaTipo},
        '${olCnpj}',
        '${olRazaoSocial}',
        '${olCpf}',
        '${olFone1}',
        '${olWhatsapp1}',
        '${olImagem01}',
        '${olCep}',
        '${olEndereco}',
        '${olEnderecoNumero}',
        '${olComplemento}',
        '${olBairro}',
        '${olCidade}',
        '${olUf}',
        '${olAnotacoes}'
      ) `;

  return queryString;
}
