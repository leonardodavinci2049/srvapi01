import { UpdAccountAddressDto } from '../dto/upd-account-address.dto';

export function UpdAccountAddressQuery(
  dataJsonDto: UpdAccountAddressDto,
): string {
  const olIdSystem = dataJsonDto.ID_SYSTEM;
  const olIdLoja = dataJsonDto.ID_LOJA ?? 1;
  const olIdUsuario = dataJsonDto.ID_USUARIO;
  const olCep = dataJsonDto.CEP;
  const olEndereco = dataJsonDto.ENDERECO;
  const olNumero = dataJsonDto.ENDERECO_NUMERO;
  const olComplemento = dataJsonDto.COMPLEMENTO;
  const olBairro = dataJsonDto.BAIRRO;
  const olCidade = dataJsonDto.CIDADE;
  const olUf = dataJsonDto.UF;
  const olCodMunicipio = dataJsonDto.COD_MUNICIPIO;
  const olCodUf = dataJsonDto.COD_UF;

  const queryString = ` call sp_account_address_upd_v1(
      ${olIdSystem},
      ${olIdLoja},
      ${olIdUsuario},
      '${olCep}',
      '${olEndereco}',
      '${olNumero}',
      '${olComplemento}',
      '${olBairro}',
      '${olCidade}',
      '${olUf}',
      '${olCodMunicipio}',
      '${olCodUf}'
      ) `;

  return queryString;
}
